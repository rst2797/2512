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
        "65856027c169c5523ff9462e" &&
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
            <span className="font-semibold">Name:</span> {userData.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> {userData.phone}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Postal Code:</span>{" "}
            {userData.postalCode}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {userData.address}
          </p>
        </div>
        <div className="bg-[#A86549] w-full lg:w-[450px] text-white px-12 py-4 rounded-lg">
          <h3 className="!text-2xl font-semibold mb-4 font-sansita-regular">
            Order Details
          </h3>
          <p className="mb-2">
            <span className="font-semibold">Order ID:</span> {orderData._id}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Total Amount:</span> ₹
            {orderData.totalAmount}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Status:</span> {orderData.status}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Payment Method:</span>{" "}
            {orderData.paymentMethod}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Order Date:</span>{" "}
            {new Date(orderData.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="bg-[#A86549] w-full lg:w-[450px] text-white px-12 py-4 rounded-lg">
          <h3 className="!text-2xl font-semibold mb-4 font-sansita-regular">
            Update Order Status
          </h3>
          <RadioGroup id={orderData._id} status={orderData.status} />
        </div>
      </div>
      <div className="">
        <h3 className="!text-2xl font-sansita-regular font-semibold mb-4">
          Product Details
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {orderData.items?.map((item) => (
            <div
              className={`flex flex-col lg:flex-row border-2 rounded-lg drop-shadow-lg w-fit relative z-40 ${
                checkedItems.find((id) => id === item.id)
                  ? "border-green-500"
                  : "border-white"
              }`}
              key={item.id}
              onClick={() => setCheckedItems([...checkedItems, item.id])}
            >
              {checkedItems.find((id) => id === item.id) && (
                <FaCheckCircle className="text-green-500 bg-[#F4E9DF] rounded-full text-3xl absolute z-50 -top-4 -right-4" />
              )}
              <Image
                src={item.images[0]}
                alt={item.name}
                width={200}
                height={250}
                className="py-2 lg:mb-4 rounded-lg shadow-md object-fill"
              />
              <div className="mx-24 flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col justify-center">
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Name:</span> {item.name}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Category:</span>{" "}
                    {item.category}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Color:</span> {item.color}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Size:</span> {item.size}
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Quantity:</span>{" "}
                    {item.quantity}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Total Price:</span> ₹
                    {item.itemTotal}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Off Percentage:</span>{" "}
                    {item.offPercentage}
                  </p>
                  <p className="mb-2 whitespace-nowrap">
                    <span className="font-semibold">Item Total:</span> ₹
                    {item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          style={{ marginBottom: "1rem", width: "fit-content" }}
        />
      </div>
    </div>
  );
};

export default OrderDetails;

const getPresignedUrls = async (key, file) => {
  try {
    const res = await axios.get(
      `http://localhost:4545/api/get-profile-picture-signedurl/${key}/${file}`
    );
    return res.data.url;
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    throw error;
  }
};

export async function getServerSideProps(context) {
  const orderRes = await axios.get(
    `http://localhost:4545/api/admin/get-order/${context.query.slug[0]}`
  );

  await Promise.all(
    orderRes.data.order.items.map(async (item, index) => {
      await Promise.all(
        item.images.map(async (ele, imgIndex) => {
          if (ele.includes("x-id=GetObject")) {
            const presigned = await getPresignedUrls(
              "products-image",
              ele
                .split("web.pacchisbarah.profile-pictures/")[1]
                .split("?")[0]
                .split("/")[1]
            );
            // Update the specific item's image
            orderRes.data.order.items[index].images[imgIndex] = presigned;
          }
        })
      );
    })
  );

  return {
    props: {
      order: orderRes.data.order,
    },
  };
}