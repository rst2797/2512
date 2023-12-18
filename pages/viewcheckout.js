import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import Script from "next/script.js";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Product } from "./cart.js";
import { useCart } from "react-use-cart";
import Button from "../components/Razorpay/button.jsx";
import { useRouter } from "next/router.js";

const Viewcheckout = () => {
  const [userData, setUserData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const { items } = useCart();

  useEffect(() => {}, [paymentMethod]);
  const cookies = new Cookies();
  useEffect(() => {
    setUserData(JSON.parse(cookies.get("user")));
  }, []);
  useEffect(() => {
    setTotalPrice(null);
    setTotalPrice(
      items.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    );
  }, [items]);
  const { emptyCart } = useCart();
  const router = useRouter();
  const handleCODCheckout = () => {
    const order = {
      items,
      userId: userData._id,
      totalAmount: totalPrice,
      paymentMethod,
    };
    axios.post("/api/place-order", order).then((res) => {
      if (res.data.success) {
        router.push(`/order/${res.data.orderId}/${userData._id}/${totalPrice}`);
        emptyCart();
      }
    });
  };
  const handlePPCheckout = async () => {
    try {
      console.log(process.env.NEXT_API_BASE_URL)
      const response = await axios.post(`/api/payment`, {
        amount: totalPrice,
        currency: "INR",
        receipt: "qwsaql",
      });
      var options = {
        key: "rzp_test_PcEzfOEz9mnsaC",
        subscription_id: response.data.order.id,
        name: "Acme Corp.",
        description: "Monthly Test Plan",
        image: "/your_logo.jpg",
        handler: function (response) {
          alert(response.razorpay_payment_id),
            alert(response.razorpay_subscription_id),
            alert(response.razorpay_signature);
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "+919876543210",
        },
        notes: {
          note_key_1: "Tea. Earl Grey. Hot",
          note_key_2: "Make it so.",
        },
        theme: {
          color: "#F37254",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", (res) => {
        alert(res.error.code);
      });
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1250px] relative mx-auto w-full">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className={`flex flex-col `}>
        {paymentMethod ? (
          <div className="my-4 px-4">
            <h3 className="font-sansita-regular !text-2xl text-left flex items-center">
              <IoMdArrowBack
                className="rounded-lg bg-[#A86549] text-white font-bold w-6 h-7 mr-4 p-1"
                onClick={() => setPaymentMethod(null)}
              />
              Address
            </h3>
            <div className="border-y-2 border-slate-600 font-bold my-4">
              <h4 className="py-2">{userData?.name}</h4>
              <h4 className="py-2">{userData?.email}</h4>
              <h4 className="py-2">{userData?.phone}</h4>
              <h4 className="py-2">{userData?.address}</h4>
            </div>
          </div>
        ) : (
          <div className="my-4 mx-4 px-2">
            <h3 className="font-sansita-regular !text-2xl text-left">
              Payment Method
            </h3>
            <div className="border-y-2 border-slate-600 font-bold my-4 flex flex-col py-4">
              <label className="inline-flex items-center py-1 font-bold tracking-wider">
                <input
                  type="radio"
                  className="form-radio w-5 h-5"
                  name="radioGroup"
                  value={"pre_paid"}
                  onChange={() => setPaymentMethod("pre_paid")}
                />
                <span className="ml-2 capitalize">Pay Now</span>
              </label>
              <label className="inline-flex items-center py-1 font-bold tracking-wider">
                <input
                  type="radio"
                  className="form-radio w-5 h-5"
                  name="radioGroup"
                  value={"cash_on_delivery"}
                  onChange={() => setPaymentMethod("cash_on_delivery")}
                />
                <span className="ml-2 capitalize">Cash On Delivery</span>
              </label>
            </div>
          </div>
        )}
        <div className="mt-4 mb-32 w-full px-6">
          <h3 className="font-sansita-regular !text-2xl text-left">
            Order Summary
          </h3>
          <div className="border-y-2 border-slate-600 font-bold my-4">
            {items.map((ele, index) => (
              <div className="my-2" key={ele.id}>
                <Product item={ele} disableRemove={true} />
              </div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 py-4 w-full flex justify-center bg-[#ffffffb8]">
          {paymentMethod &&
            (paymentMethod === "pre_paid" ? (
              <Button handlePPCheckout={handlePPCheckout} totalPrice={totalPrice} />
            ) : (
              <button
                className="rounded-lg bg-[#A86549] text-white font-bold w-[80%] py-3 my-2 mx-2"
                onClick={handleCODCheckout}
              >
                Place Order - ₹{totalPrice}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Viewcheckout;

export const getServerSideProps = async () => {
  const response = await axios.post(`${process.env.NEXT_API_BASE_URL}/api/payment`, {
    amount: 9500,
    currency: "INR",
    receipt: "receipt",
  });
  console.log(response.data);
  return {
    props: {},
  };
};
