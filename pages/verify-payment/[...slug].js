import axios from "axios";
import Cookies from "cookies";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCart } from "react-use-cart"

const VerifyPayment = ({
  success,
  authorized = true,
  messageResp,
  orderId,
  totalAmount,
}) => {
  const { emptyCart } = useCart();
  const router = useRouter();
  const [message, setMessage] = useState("Please Wait....");
  useEffect(() => {
    if (authorized) {
      if (success) {
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        setMessage(messageResp);
        emptyCart();
        router.push(`/order/${orderId}/${userId}/${totalAmount}`); 
      }
    } else {
      setMessage(
        "You're not authorized for this operation, please login first"
      );
      router.push("/login?destination=/viewcheckout");
    }
  }, [message]);
  return (
    <div className="h-screen font-bold flex justify-center items-center">
      {message}
    </div>
  );
};

export default VerifyPayment;

export const getServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const payment_id = context.query.slug[0];
  const order_id = context.query.slug[1];
  const signature = context.query.slug[2];
  const totalAmount = context.query.slug[3];
  const placedOrderId = context.query.slug[4];
  const token = cookies.get("token")?.split("%22")[1];

  if (!token) {
    return {
      props: {
        success: false,
        authorized: false,
      },
    };
  }
  const response = await axios.post(
    `${process.env.NEXT_API_BASE_URL}/api/verify-payment`,
    {
      order_id,
      payment_id,
    },
    {
      headers: {
        "x-razorpay-signature": signature,
      },
    }
  );
  return {
    props: {
      success: response.data.success,
      messageResp: response.data.message,
      orderId: placedOrderId,
      totalAmount,
    },
  };
};
