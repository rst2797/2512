import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemList from "../../components/admin/ItemList";
import Link from "next/link";

const Orders = ({ orders }) => {
  const [orderResponse, setOrderResponse] = useState({});
  const [items, setItems] = useState(null);
  useEffect(() => {
    console.log(orders);
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
  const handleSeeOrder = (items) => {
    setItems(items);
  };

  return (
    <div className="max-w-[1450px] mx-auto my-0">
      {orderResponse.orders?.map((ele, index) => (
        <div key={ele.id} className="flex flex-col items-center justify">
          <table className="border-2 border-black">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="border-x-2 border-black px-4">S. No.</th>
                <th className="border-x-2 border-black px-4">Order Id</th>
                <th className="border-x-2 border-black px-4">User Id</th>
                <th className="border-x-2 border-black px-4">Total Amount</th>
                <th className="border-x-2 border-black px-4">Payment Method</th>
                <th className="border-x-2 border-black px-4">Status</th>
                <th className="border-x-2 border-black px-4">View</th>
              </tr>
            </thead>
            <tbody>
              <tr className="focus:bg-red-500 focus:text-white">
                <td className="border-x-2 border-black px-4">{index + 1}</td>
                <td className="border-x-2 border-black px-4">{ele._id}</td>
                <td className="border-x-2 border-black px-4">{ele.user}</td>
                <td className="border-x-2 border-black px-4">
                  {ele.totalAmount}
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
                    className="focus:outline-none active:outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>
                <td className="border-x-2 border-black px-4 cursor-pointer">
                  <Link href={`/admin/order/${ele._id}/${ele.user}`}>
                    <a>See Order</a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      {items && <ItemList />}
    </div>
  );
};

export default Orders;
