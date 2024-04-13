import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/order/Sidebar";
import AddProducts from "../../components/admin/AddProducts.jsx";
import "react-toastify/dist/ReactToastify.css";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";
import Cookies from "cookies";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const fetchOrders = async () => {
  try {
    const response = await axios.get(`/api/admin/get-all-orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return null;
  }
};

const Orders = ({ orders }) => {
  const [orderResponse, setOrderResponse] = useState(orders);
  const [currentPage, setCurrentPage] = useState(1);
  const [addProduct, setAddProduct] = useState(false);
  const ordersPerPage = 10;
  const router = useRouter();

  const handleStatusChange = (orderId, event) => {
    try {
      axios
        .post(
          "/api/admin/update-order-status",
          {
            orderId,
            status: event.target.value,
          },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            axios
              .get("/api/admin/get-all-orders", {
                headers: {
                  Authorization: `Bearer ${JSON.parse(
                    localStorage.getItem("token")
                  )}`,
                },
              })
              .then((res) => {
                setOrderResponse({
                  ...res.data,
                  orders: res.data.orders.filter(
                    (a) => a.status !== "delivered"
                  ),
                });
                toast.success(res.data.message);
              });
          } else {
            throw new Error(res.data.message);
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    } catch (error) {
      console.error(error);
    }
  };

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orderResponse.data
    ?.filter((order) => order.status === "CANCELED")
    ?.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders();
      if (data) {
        setOrderResponse(data);
      } else {
        // Handle the case when data is null, possibly display an error message
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#F4E9DF] min-h-screen relative">
        <Sidebar />
        <>
          <div className="max-w-screen mx-auto">
            <div className="flex flex-col justify-center items-center p-4 ml-[15vw] md:p-8">
              <label className="font-sansita-regular py-4 ml-1/2 hidden lg:block">
                Canceled Orders
              </label>
              <table className="border-2 border-black w-full">
                <thead>
                  <tr className="border-b-2 border-black ">
                    <th className="border-x-2 border-black py-4">S. No.</th>
                    <th className="border-x-2 border-black px-6">Order Id</th>
                    <th className="border-x-2 border-black px-6">User Id</th>
                    <th className="border-x-2 border-black px-4">
                      Total Amount
                    </th>
                    <th className="border-x-2 border-black px-4">
                      Payment Method
                    </th>
                    {/* <th className="border-x-2 border-black px-4">Status</th> */}
                    <th className="border-x-2 border-black px-4">View</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders?.length > 0 ? (
                    currentOrders.map((order, index) => (
                      <tr
                        key={order.id}
                        className={`focus:text-white border-b-2 border-black hover:bg-[#a5a5a5] cursor-pointer py-2 ${
                          order.status === "CANCELED" && "bg-red-300"
                        }`}
                      >
                        <td className="border-x-2 border-black px-4 w-fit">
                          {index + 1}
                        </td>
                        <td className="border-x-2 border-black px-4 py-3">
                          {order.id}
                        </td>
                        <td className="border-x-2 border-black px-4">
                          {order.customer_name}
                        </td>
                        <td className="border-x-2 border-black px-4">
                          ₹ {order.total}
                        </td>
                        <td className="border-x-2 border-black px-4">
                          {order.payment_method}
                        </td>
                        {/* <td className="border-x-2 border-black px-4">
                          <select
                            name="status"
                            id="status"
                            value={order.status}
                            onChange={(e) => handleStatusChange(order.id, e)}
                            className="focus:outline-none active:outline-none bg-transparent"
                          >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                          </select>
                        </td> */}
                        <td className="border-x-2 border-black px-4 cursor-pointer text-blue-500 font-bold">
                          <Link href={`/admin/order/${order.id}`}>
                            <a className="flex items-center">See Order</a>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center font-bold text-xl" colSpan="6">
                        No records found!!
                      </td>
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="mt-4">
                {Array.from(
                  {
                    length: Math.ceil(
                      orderResponse?.orders?.length / ordersPerPage
                    ),
                  },
                  (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`mx-1 px-3 py-1 border rounded text-[#F4E9DF] ${
                        currentPage === index + 1 ? "bg-[#A86549]" : ""
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
          <GrAdd
            onClick={() => setAddProduct(true)}
            className="fixed bottom-10 right-4 bg-[#A86549] text-[#F4E9DF] w-12 h-12 p-4 font-bold rounded-full drop-shadow-lg"
          />
        </>
        {addProduct && <AddProducts setAddProduct={setAddProduct} />}
      </div>
    </>
  );
};

export default Orders;
export const getServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const serializedToken = cookies.get("token");
  const token = serializedToken?.split("%22")[1];

  try {
    const res = undefined;
    // const res = await fetchOrders(token);

    if (res.data.success) {
      return {
        props: {
          error: false,
          // orders: {
          //   ...res.data,
          //   orders: res.data.orders.filter((a) => a.status !== "delivered"),
          // },
          // response: res.data,
        },
      };
    } else {
      throw new Error(res.data.message);
    }
  } catch (error) {
    console.error("Error fetching orders:", error);

    return {
      props: {
        error: true,
        orders: {},
        response: {
          error: true,
          success: false,
          message: "Error fetching orders",
        },
      },
    };
  }
};
