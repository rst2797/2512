import axios from "axios";
import React from "react";

const Button = ({ totalPrice }) => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/payment", {
        amount: totalPrice*100,
        currency: "INR",
        receipt: "qwsaql",
      });
      var options = {
        key: "rzp_test_QEgVnUZVvV6gcc",
        amount: totalPrice*100,
        currency: "INR",
        name: "2512",
        description: "Test Transaction",
        image: "/icons/2512_RGB 2.png",
        order_id: response.data.order.id,
        callback_url: "/delivery-and-returns",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#A86549",
        },
      };
      var rzp1 = new window.Razorpay(options)
      rzp1.on("payment.failed", (res)=>{
        alert(res.error.code)
      })
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleCheckout}
      className="rounded-lg bg-[#A86549] text-white font-bold w-full py-3 my-2 mx-2"
    >
      Pay Now - ₹{totalPrice}
    </button>
  );
};

export default Button;
