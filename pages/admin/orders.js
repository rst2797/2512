import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/order/Sidebar";
import AddProducts from "../../components/admin/AddProducts.jsx";
import { LuPointer } from "react-icons/lu";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";

const Orders = ({ orders }) => {
  const [orderResponse, setOrderResponse] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [addProduct, setAddProduct] = useState(false);
  const ordersPerPage = 10;

  useEffect(() => {
    axios.get("/api/admin/get-all-orders").then((res) => {
      setOrderResponse(res.data);
    });
  }, []);

  const handleStatusChange = (orderId, event) => {
    try {
      axios
        .post("/api/admin/update-order-status", {
          orderId,
          status: event.target.value,
        })
        .then(() => {
          axios.get("/api/admin/get-all-orders").then((res) => {
            setOrderResponse(res.data);
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orderResponse.orders?.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#F4E9DF] min-h-screen relative">
      <Sidebar />
      <div className="max-w-screen mx-auto">
        <div className="flex flex-col justify-center items-center p-4 ml-[15vw] md:p-8">
          <label className="font-sansita-regular py-4 absolute top-0 left-0 hidden lg:block">
            All Orders
          </label>
          <table className="border-2 border-black w-full">
            <thead>
              <tr className="border-b-2 border-black ">
                <th className="border-x-2 border-black py-4">S. No.</th>
                <th className="border-x-2 border-black px-6">Order Id</th>
                <th className="border-x-2 border-black px-6">User Id</th>
                <th className="border-x-2 border-black px-4">Total Amount</th>
                <th className="border-x-2 border-black px-4">Payment Method</th>
                <th className="border-x-2 border-black px-4">Status</th>
                <th className="border-x-2 border-black px-4">View</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders?.map((ele, index) => (
                <tr
                  key={ele.id}
                  className="focus:text-white border-b-2 border-black hover:bg-[#a5a5a5] cursor-pointer py-2"
                >
                  <td className="border-x-2 border-black px-4 w-fit">
                    {index + 1}
                  </td>
                  <td className="border-x-2 border-black px-4 py-3">{ele._id}</td>
                  <td className="border-x-2 border-black px-4">{ele.user}</td>
                  <td className="border-x-2 border-black px-4">
                    ₹&nbsp;{ele.totalAmount}
                  </td>
                  <td className="border-x-2 border-black px-4">
                    {ele.paymentMethod}
                  </td>
                  <td className="border-x-2 border-black px-4">
                    <select
                      name="status"
                      id="status"
                      value={ele.status}
                      onChange={(e) => handleStatusChange(ele._id, e)}
                      className="focus:outline-none active:outline-none bg-transparent"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="border-x-2 border-black px-4 cursor-pointer text-blue-500 font-bold">
                    <Link href={`/admin/order/${ele._id}/${ele.user}`}>
                      <a className="flex items-center">
                        See Order
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            {Array.from(
              {
                length: Math.ceil(orderResponse.orders?.length / ordersPerPage),
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
      {addProduct && <AddProducts setAddProduct={setAddProduct} />}
    </div>
  );
};

export default Orders;
