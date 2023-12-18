import React from "react";
import { useEffect } from "react";
import { createShipment } from "../../utils/shiprocketApi";
import { getLocationByPostalCode } from "../../utils/getLocationByPostalCode";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useRouter } from "next/router";

const Order = ({ totalPrice, orderId, userId }) => {
  const router = useRouter()
  const shipOrder = async () => {
    const userResponse = await axios.get(`/api/admin/get-user/${userId}`);
    const orderResponse = await axios.get(`/api/admin/get-order/${orderId}`);

    const shippingDetails = {
      order: orderResponse.data.order,
      user: userResponse.data.user,
      totalPrice
    };
    return await axios.post("/api/ship-order", shippingDetails).then(()=>{
        router.push("/delivery-and-returns")
    })
  };
  useEffect(() => {
    shipOrder();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <InfinitySpin width="200" color="#A86549" />
      <h1 className="font-bold text-[#A86549">
        Hang Tight While 2512 Creating Your Shipment...
      </h1>
    </div>
  );
};

export default Order;

export const getServerSideProps = async ({ query }) => {
  return {
    props: {
      city: "",
      state: "",
      country: "",
      orderId: query.slug[0],
      userId: query.slug[1],
      totalPrice: query.slug[2]
    },
  };
};
