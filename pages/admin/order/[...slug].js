import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import RadioGroup from "../../../components/admin/order/RadioGroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const OrderDetails = ({ order, orderId }) => {
  const [orderData, setOrderData] = useState(order);
  const [invoice, setInvoice] = useState(null);
  const [cancel, setCancel] = useState(false);
  const [ship, setShip] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [shipLoading, setShipLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(orderData?.shipments?.id);
    if (
      JSON.parse(localStorage.getItem("user"))._id !==
        "661a42bbaf7eb53e4ae1521e" &&
      JSON.parse(localStorage.getItem("user")).role !== "ADMIN"
    ) {
      return router.push("/");
    }
  }, [orderData]);

  const [checkedItems, setCheckedItems] = useState([]);

  const handleInvoice = async () => {
    if (!invoice) {
      setLoading(true);
      axios.post("/api/admin/generate-invoice", { id: orderId }).then((res) => {
        setInvoice(res.data.invoice_url);
        setLoading(false);
        toast.success("Invoice Generated Successfully");
      });
    } else {
      console.log(invoice);
      toast.success("Invoice Downloaded...");
    }
  };
  const handleCancelOrder = async () => {
    setCancelLoading(true);
    setCancel(true);
    axios.post("/api/admin/cancel-order", { orderId }).then((res) => {
      setCancelLoading(false);
      toast.success("Canceled Successfully");
      setCancel(false);
      router.push("/admin/orders");
    });
  };
  const handleOrderShipment = async () => {
    setShipLoading(true);
    setShip(true);
    axios
      .post("/api/admin/create-order-shipment", {
        orderId: orderData?.shipments?.id,
      })
      .then((res) => {
        setShipLoading(false);
        toast.success("Shipment Create Successfully");
        setShip(false);
        // router.push("/admin/orders");
      });
  };

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
          <p className="py-3">
            <span className="font-semibold">Address 2:</span>{" "}
            {`${
              orderData?.customer_address_2 === "null"
                ? "N/A"
                : orderData?.customer_address_2
            }`}
          </p>
          <p>
            <span className="font-semibold">City:</span>{" "}
            {`${orderData?.customer_city}, ${orderData?.customer_state}, ${orderData?.customer_country}`}
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
            <span className="font-semibold">Estimated Delivery:</span>{" "}
            {orderData?.shipments.created_at}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Estimated Delivery:</span>{" "}
            {orderData?.sla}
          </p>
        </div>
        <div className="bg-[#A86549] w-full lg:w-[450px] text-white px-12 py-4 rounded-lg">
          <h3 className="!text-2xl font-semibold mb-4 font-sansita-regular ">
            Update Order Status
          </h3>
          <div className="grid grid-cols-1">
            <button
              onClick={() => handleInvoice()}
              className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              {invoice ? (
                <Link href={invoice}>
                  <a>Download</a>
                </Link>
              ) : loading ? (
                <div className="flex">
                  <div className="border-l-4 border-black rounded-full p-3 animate-spin mr-2" />
                  <span>Generating...</span>
                </div>
              ) : (
                "Generate Invoice"
              )}
            </button>
            {/* <button
              onClick={() => handleOrderShipment()}
              className="my-4 relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-500 before:to-green-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              {ship ? (
                <>Ship</>
              ) : shipLoading ? (
                <div className="flex">
                  <div className="border-l-4 border-black rounded-full p-3 animate-spin mr-2" />
                  <span>Shipping...</span>
                </div>
              ) : (
                "Ship Now"
              )}
            </button> */}
            <button
              onClick={() => handleCancelOrder()}
              className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-red-500 before:to-red-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              {cancel ? (
                <>Cancel</>
              ) : cancelLoading ? (
                <div className="flex">
                  <div className="border-l-4 border-black rounded-full p-3 animate-spin mr-2" />
                  <span>Canceling...</span>
                </div>
              ) : (
                "Cancel Order"
              )}
            </button>
          </div>
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
      orderId: context.query.slug[0],
    },
  };
}
