import axios from "axios";
import React from "react";

const Button = ({ totalPrice }) => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/payment", {
        amount: totalPrice * 100,
        currency: "INR",
        receipt: "qwsaql",
      });
      var options = {
        key: "rzp_test_QEgVnUZVvV6gcc",
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
<button
  onClick={handleCheckout}
  className="rounded-lg bg-[#A86549] text-white font-bold w-full py-3 my-2 mx-2"
>
  Pay Now - ₹{totalPrice}
</button>
  );
};

export default Button;

// pages/order.js
// import { initiateTransaction } from "../../pages/api/phonepe.js";

// const OrderPage = ({ totalPrice }) => {
//   const handlePaytmTransaction = async () => {
//     const orderData = {
//       // Construct order data as required by Paytm Initiate Transaction API
//     };

//     try {
//       const result = await initiateTransaction(orderData);
//       console.log("Paytm Transaction initiated successfully:", result);
//       // Redirect the user to the Paytm payment page or perform other actions
//     } catch (error) {
//       console.error("Error initiating Paytm transaction:", error);
//     }
//   };

//   return (
//     <button
//       onClick={handlePaytmTransaction}
//       className="rounded-lg bg-[#A86549] text-white font-bold w-full py-3 my-2 mx-2"
//     >
//       Pay Now - ₹{totalPrice}
//     </button>
//   );
// };

// export default OrderPage;
