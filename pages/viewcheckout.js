import axios from "axios";
import Script from "next/script";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer";
import { IoMdArrowBack, IoMdClose } from "react-icons/io";
import Image from "next/image";
import ProceedCheckout from "../components/view-checkout/ProceedCheckout";

export default function YourBillingComponent() {
  const [userData, setUserData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Prepaid");
  const { items } = useCart();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  useEffect(() => {
    setTotalPrice(null);
    setTotalPrice(
      items.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    );
    console.log(totalPrice);
  }, []);
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
      paymentMethod: "Prepaid",
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
    <div className="bg-[#e2dad7] ">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <Navbar />

      <div className="bg-[#F4E9DF] pt-20 lg:px-20">
        <div className={`flex flex-col mx-auto max-w-[1450px]`}>
          <div className="my-4 mx-4">
            <h3 className="font-sansita-regular text-left">Checkout</h3>
            <div className="grid grid-cols-3 gap-12">
              <div className="bg-white rounded-xl font-bold my-4 flex flex-col py-4 px-6 col-span-2">
                <h3 className="font-lato-regular !font-semibold pb-4">
                  Choose Payment Mode
                </h3>
                <label className="inline-flex items-center py-1 font-bold tracking-wider">
                  <input
                    type="radio"
                    className="form-radio w-5 h-5"
                    name="radioGroup"
                    value={"Prepaid"}
                    defaultChecked
                    onChange={() => setPaymentMethod("Prepaid")}
                  />
                  <span className="ml-2 capitalize">Pay Now</span>
                </label>
                <label className="inline-flex items-center py-1 font-bold tracking-wider">
                  <input
                    type="radio"
                    className="form-radio w-5 h-5"
                    name="radioGroup"
                    value={"COD"}
                    onChange={() => setPaymentMethod("COD")}
                  />
                  <span className="ml-2 capitalize">Cash On Delivery</span>
                </label>
                <div className="flex justify-center pt-12 w-[60%]">
                  {paymentMethod &&
                    (paymentMethod === "Prepaid" ? (
                      <button
                        className="rounded-lg bg-[#A86549] text-white text-xs font-bold w-full py-2 my-2 mx-2"
                        onClick={() => makePayment({ productId: "2512" })}
                      >
                        Pay Now
                      </button>
                    ) : (
                      <button
                        className="rounded-lg bg-[#A86549] text-white text-xs font-bold w-full py-2 my-2 mx-2"
                        onClick={handleCODCheckout}
                      >
                        Place Order
                      </button>
                    ))}
                </div>
              </div>
              <div className="my-4">
                <ProceedCheckout items={items} btn={false} minHeight={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function Product({ item, disableRemove }) {
  const { items, updateItemQuantity, getItem } = useCart();

  const [quantity, setQuantity] = useState(getItem(item.id).units);

  return (
    <div className="flex justify-between border-b border-white pb-4 mb-4">
      <Image
        src={item.images[0]}
        alt="Sustainable and Organic Cloths"
        width={70}
        height={100}
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-lato-regular !text-[1rem]">{item.name}</h2>
          <span className="font-lato-regular !text-[.75rem]">
            Size: {item.size}
          </span>
        </div>
        <span className="font-lato-regular !text-[.75rem]">
          Quantity: {quantity}
        </span>
      </div>
      <Price
        id={item.id}
        actualPrice={item.actualPrice}
        offPercentage={item.offPercentage}
        disableRemove={disableRemove}
      />
    </div>
  );
}
function Price({ id, actualPrice, offPercentage, disableRemove }) {
  const { removeItem, getItem } = useCart();
  const { price, quantity } = getItem(id);
  const [totalPrice, setTotalPrice] = useState(price * quantity);
  useEffect(() => {
    setTotalPrice(null);
    setTotalPrice(price * quantity);
  }, [quantity, price]);
  const removeProduct = () => {
    removeItem(id);
  };
  return (
    <div className="flex flex-col justify-between text-right">
      {!disableRemove && (
        <span className="flex justify-end" onClick={removeProduct}>
          <IoMdClose className="opacity-25" />
        </span>
      )}
      <span className="flex flex-col">
        <h3>₹{totalPrice}</h3>
        <small className="!text-[.75rem] ml-[0.75rem] font-lato-regular">
          <span className="line-through">{actualPrice}</span>{" "}
          <span className="font-semibold text-[#49AC56]">
            {offPercentage}OFF
          </span>
        </small>
      </span>
    </div>
  );
}
