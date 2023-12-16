import React from "react";

const SectionSeven = () => {
  return (
    <div className="bg-[#A86549] px-4 py-[1.125rem] lg:hidden">
      <p className="text-white text-xs text-center">
        Subscribe to our newsletter below and never miss the latest product or
        an exclusive offer.
      </p>
      <form className="my-4 flex">
        <input type="text" className="w-[75%] px-4 placeholder:text-xs placeholder:flex placeholder:items-center" placeholder="Enter your email address" />
        <button className="uppercase text-white bg-[#2F2E2D] px-4 text-[10px] h-[33px]">Subscribe</button>
      </form>
    </div>
  );
};

export default SectionSeven;
