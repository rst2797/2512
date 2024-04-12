import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import RadioGroup from "../../../components/admin/order/RadioGroup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderDetails = ({ order }) => {
  const [orderData, setOrderData] = useState(order);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
    if (
      JSON.parse(localStorage.getItem("user"))._id !==
        "6614e4a92dbe62ee4ed655c8" &&
      JSON.parse(localStorage.getItem("user")).role !== "ADMIN"
    ) {
      return router.push("/");
    }
  }, [orderData]);

  const [checkedItems, setCheckedItems] = useState([]);

  return (
    <div className="container mx-auto p-6 bg-[#F4E9DF] min-h-screen">
      <h2 className="font-sansita-regular font-semibold mb-6">Order Details</h2>
      <div className="flex justify-between flex-col lg:flex-row gap-4 my-4">
        <div className="bg-[#A86549] w-full lg:w-[450px] text-white px-12 py-4 rounded-lg">
          <h3 className="!text-2xl font-semibold mb-4 font-sansita-regular">
            User Details
          </h3>
          <p className="mb-2">
            <span className="font-semibold">Name:</span>{" "}
            {orderData?.customer_name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span>{" "}
            {orderData?.customer_email}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span>{" "}
            {orderData?.customer_phone}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Postal Code:</span>{" "}
            {orderData?.customer_pincode}
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {`${orderData?.customer_address}, ${orderData?.customer_city}, ${orderData?.customer_state}, ${orderData?.customer_country}`}
          </p>
        </div>
        <div className="bg-[#A86549] w-full lg:w-[450px] text-white px-12 py-4 rounded-lg">
          <h3 className="!text-2xl font-semibold mb-4 font-sansita-regular">
            Order Details
          </h3>
          <p className="mb-2">
            <span className="font-semibold">Order ID:</span>{" "}
            {orderData?.channel_order_id}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Total Amount:</span> ₹
            {orderData?.net_total}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Status:</span> {orderData?.status}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Payment Method:</span>{" "}
            {orderData?.payment_method}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Order Date:</span>{" "}
            {orderData?.order_date}
          </p>
        </div>
        <div className="bg-[#A86549] w-full lg:w-[450px] text-white px-12 py-4 rounded-lg">
          <h3 className="!text-2xl font-semibold mb-4 font-sansita-regular">
            Update Order Status
          </h3>
          {/* <RadioGroup
            id={orderData?.channel_order_id}
            status={orderData?.status}
          /> */}
        </div>
      </div>
      <div className="">
        <h3 className="!text-2xl font-sansita-regular font-semibold mb-4">
          Product Details
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {orderData.products?.map((product) => (
            <div
              className={`flex flex-col lg:flex-row border-2 rounded-lg drop-shadow-lg w-fit relative z-40 ${
                checkedItems.find((id) => id === product.id)
                  ? "border-green-500"
                  : "border-white"
              }`}
              key={product.id}
              onClick={() => setCheckedItems([...checkedItems, product.id])}
            >
              {checkedItems.find((id) => id === product.id) && (
                <FaCheckCircle className="text-green-500 bg-[#F4E9DF] rounded-full text-3xl absolute z-50 -top-4 -right-4" />
              )}
              <div className="mx-24 flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col justify-center">
                  <p className="mb-2">
                    <span className="font-semibold text-ellipsis w-48 overflow-hidden whitespace-nowrap">
                      Name:
                    </span>{" "}
                    {product.name}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">SKU:</span> {product.sku}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Color:</span>{" "}
                    {product.color}
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Price:</span> ₹
                    {product.price}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Quantity:</span>{" "}
                    {product.quantity}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Total Price:</span> ₹
                    {product.net_total}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OrderDetails;

const getPresignedUrls = async (key, file) => {
  try {
    const res = await axios.get(
      `https://www.2512.in/api/get-profile-picture-signedurl/${key}/${file}`
    );
    return res.data.url;
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    throw error;
  }
};

const fetchOrder = async (orderId) => {
  try {
    const tokenRes = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: "discretestructure3@gmail.com",
        password: "P#Brs12!!",
      }
    );
    const response = await axios.get(
      `https://apiv2.shiprocket.in/v1/external/orders/show/${orderId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRes?.data?.token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return null;
  }
};
export async function getServerSideProps(context) {
  // const orderRes = await axios.get(
  //   `https://www.2512.in/api/admin/get-order/${context.query.slug[0]}`
  // );

  // await Promise.all(
  //   orderRes.data.order.items.map(async (item, index) => {
  //     await Promise.all(
  //       item.images.map(async (ele, imgIndex) => {
  //         if (ele.includes("x-id=GetObject")) {
  //           const presigned = await getPresignedUrls(
  //             "products-image",
  //             ele
  //               .split("web.pacchisbarah.profile-pictures/")[1]
  //               .split("?")[0]
  //               .split("/")[1]
  //           );
  //           // Update the specific item's image
  //           orderRes.data.order.items[index].images[imgIndex] = presigned;
  //         }
  //       })
  //     );
  //   })
  // );

  const order = await fetchOrder(context.query.slug[0]);

  return {
    props: {
      order: order?.data,
    },
  };
}
