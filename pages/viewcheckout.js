import axios from "axios";
import Script from "next/script";
import { useState } from "react";
import { useEffect } from "react";
import { Product } from "./cart.js";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoMdArrowBack } from "react-icons/io";

export default function YourBillingComponent() {
  const [userData, setUserData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const { items, isEmpty } = useCart();

  useEffect(() => {}, [paymentMethod]);
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
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
        axios
          .post("/api/update-payment", {
            id: res.data.orderId,
            status: true,
          })
          .then(() => {
            emptyCart();
          });
        router.push(`/order/${res.data.orderId}/${userData._id}/${totalPrice}`);
      }
    });
  };

  const makePayment = async ({ productId = null }) => {
    const order = {
      items,
      userId: userData._id,
      totalAmount: totalPrice,
      paymentMethod: "pre_paid",
    };
    axios.post("/api/place-order", order).then((resp) => {
      if (resp.data.success) {
        axios
          .post("/api/razorpay", {
            productId,
            currency: "INR",
            amount: totalPrice,
            userId: userData._id,
          })
          .then((res) => {
            const options = {
              key: "rzp_test_uTiONXbSXdfqHV",
              name: res.data.name,
              currency: res.data.currency,
              amount: res.data.amount,
              order_id: res.data.id,
              description: res.data.amountDesc,
              // image: logoBase64,
              handler: function (response) {
                axios.post("/api/update-payment", {
                  id: resp.data.orderId,
                  status: true,
                });
                emptyCart();
                router.push(
                  `/verify-payment/${response.razorpay_payment_id}/${response.razorpay_order_id}/${response.razorpay_signature}/${totalPrice}/${resp.data.orderId}`
                );
              },
              prefill: {
                name: res.data.name,
                email: res.data.email,
                contact: res.data.phone,
              },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

            paymentObject.on("payment.failed", function (response) {
              axios.post("/api/update-payment", {
                id: resp.data.orderId,
                status: false,
              });
              console.log(
                "Payment failed. Please try again. Contact support for help"
              );
            });
          });
      }
    });
  };

  return (
    <div className="bg-[#e2dad7] h-screen">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="bg-[#e2dad7]">
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
          <div className="fixed bottom-0 py-4 w-full flex justify-center bg-[#e2dad7]">
            {paymentMethod &&
              (paymentMethod === "pre_paid" ? (
                <button
                  className="rounded-lg bg-[#A86549] text-white font-bold w-[80%] py-3 my-2 mx-2"
                  onClick={() => makePayment({ productId: "2512" })}
                >
                  Pay Now - ₹{totalPrice}
                </button>
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
    </div>
  );
}
