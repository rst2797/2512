import axios from "axios";
import React, { useEffect, useState } from "react";
import { mans_collection as products } from "../../../utils/products";
const CustomerOrder = ({ orderId, userId }) => {
  // State to store order data
  const [orderData, setOrderData] = useState(null);

  // Function to fetch order data
  const fetchOrderData = async (orderId, userId) => {
    try {
      const response = await axios.post("/api/admin/get-order", {
        orderId,
        userId,
      });
      if (response.data.success) {
        setOrderData(response.data.order);
      } else {
        console.error("Error fetching order:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching order:", error.message);
    }
  };

  // useEffect to fetch order data on component mount
  useEffect(() => {
    // Fetch order data
    fetchOrderData(orderId, userId);
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="max-w-[1450px] mx-auto my-0">
      {orderData ? (
        <div>
          <h1>Order Details</h1>
          {/* Render order details based on orderData */}
          <p>Order ID: {orderData._id}</p>
          <p>User ID: {orderData.user}</p>
          {/* {orderData.items.map((item) => (
            <div key={item.id}>{
              products.find(product => product.id === item.id).title
            }</div>
          ))} */}
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomerOrder;

export function getServerSideProps(context) {
  return {
    props: {
      orderId: context.query.slug[0],
      userId: context.query.slug[1],
    },
  };
}
