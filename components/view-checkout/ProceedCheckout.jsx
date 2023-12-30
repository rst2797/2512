import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const ProceedCheckout = ({ items, btn=true, minHeight=true }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(null);
    setTotalPrice(
      items.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    );
  }, [items]);

  return (
    <div className={` ${minHeight && 'min-h-[68vh] h-[98%]'} py-[1rem] px-[0.94rem] 2xl:px-12 rounded-xl bg-white`}>
      <h2 className="font-lato-regular !font-semibold !text-[1.2rem]">
        Price details (2 items)
      </h2>
      <div className="flex justify-between text-sm py-4 pt-8 pb-2 font-semibold">
        <h4>Total MRP</h4>
        <h4>₹{totalPrice}</h4>
      </div>
      <div className="flex justify-between text-sm py-3 border-y-[1px] border-[#a1a1a1] font-semibold">
        <h4>Discount on MRP</h4>
        <h4 className="text-[#2EE0A0]">₹{totalPrice}</h4>
      </div>
      <div className="flex justify-between text-sm py-3 border-b-[1px] border-[#a1a1a1] font-semibold">
        <h4>Coupon Discount</h4>
        <h4 className="cursor-not-allowed">Apply coupon</h4>
      </div>
      <div className="flex justify-between text-sm py-3 border-b-[1px] border-[#a1a1a1] font-semibold">
        <h4>Shipping fee</h4>
        <h4 className="text-[#2EE0A0]">Free</h4>
      </div>
      <div className="flex justify-between text-lg font-semibold py-4">
        <h4>Total Amount</h4>
        <h4>₹1,958</h4>
      </div>

      {btn && <Link href={"/viewcheckout"}>
        <a>
          <button
            type="button"
            className="bg-[#A86549] w-full py-2 my-4 font-bold text-sm text-[white] rounded-lg"
          >
            Proceed
          </button>
        </a>
      </Link>}
    </div>
  );
};

export default ProceedCheckout;
