import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "react-use-cart";

const Checkout = ({ items, user }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(null);
    setTotalPrice(
      items.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    );
  }, [items]);
  

  return (
    <div className="absolute bottom-0 left-0 right-0 py-[1rem] px-[0.94rem] drop-shadow-2xl bg-[#f4f0ef]">
      <div className="flex items-center justify-between">
        <h4 className="font-lato-regular !text-sm !font-semibold">
          Promo Code
        </h4>
        <form action="" className="text-black flex border-2 border-[#e6e3e2]">
          <input
            type="text"
            className="w-[9rem] h-[2.5625rem] py-[0.8125rem] px-[1rem] bg-[#f3f3f3]"
          />
          <button className="text-[#A86549] bg-[#f3f3f3] font-lato-regular !text-[.8rem] !font-[700] py-[0.2rem] px-[0.425rem] w-[5rem] tracking-wide">
            Apply
          </button>
        </form>
      </div>
      <div className="flex justify-between border-t-2 border-[#a1a1a1] mt-3 py-2">
        <h4>Shipping</h4>
        <h4>Free</h4>
      </div>
      <div className="flex justify-between border-y-2 border-[#a1a1a1] py-2">
        <h4>Total</h4>
        <h4>₹{totalPrice}</h4>
      </div>

      <Link href="/viewcheckout">
        <a>
          <button
            type="button"
            className="bg-[#A86549] w-full py-2 my-4 font-bold text-[white] rounded-lg"
          >
            Proceed to Checkout - ₹{totalPrice}
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Checkout;
