import React from "react";
import { useEffect } from "react";
import { createShipment } from "../../utils/shiprocketApi";
import { getLocationByPostalCode } from "../../utils/getLocationByPostalCode";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useRouter } from "next/router";
import Cookies from "cookies";

const Order = ({ totalPrice, orderId, userId, token }) => {
  const router = useRouter();
  const shipOrder = async () => {
    const userResponse = await axios.get(`/api/admin/get-user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const orderResponse = await axios.get(`/api/admin/get-order/${orderId}`);

    const shippingDetails = {
      order: orderResponse.data.order,
      user: userResponse.data.user,
      totalPrice,
    };
    console.log(shippingDetails, userResponse.data);
    return await axios.post("/api/ship-order", shippingDetails).then(() => {
      router.push(`/delivery-and-returns/${userId}`);
    });
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

export const getServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const token = cookies.get("token").split("%22")[1];
  return {
    props: {
      city: "",
      state: "",
      country: "",
      orderId: context.query.slug[0],
      userId: context.query.slug[1],
      totalPrice: context.query.slug[2],
      token,
    },
  };
};
