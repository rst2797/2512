import React, { useState } from "react";

const SelectSize = () => {
  const [size, setSize] = useState("S");

  return (
    <div className="border-b-4 border-white py-[0.625rem]">
      <div className="flex justify-between items-center">
        <h2 className="!text-[1rem] font-semibold font-lato-regular">Select Size</h2>
        <h3 className="text-[#A86549] font-semibold !text-[0.75rem] font-lato-regular underline cursor-pointer">Size Chart</h3>
      </div>
      <div className="grid grid-cols-6 gap-[1px] py-8">
        <button
          onClick={() => {
            setSize("S");
          }}
          className={`font-lato-regular !text-[1.125rem] w-[3.125remp h-[3.125rem] border-2 border-[#A86549]  ${
            size === "S"
              ? "bg-[#A86549]  text-white"
              : "text-[#A86549] bg-white"
          } text-center font-bold flex justify-center items-center`}
        >
          S
        </button>
        <button
          onClick={() => {
            setSize("M");
          }}
          className={`font-lato-regular !text-[1.125rem] w-[3.125remp h-[3.125rem] border-2 border-[#A86549]  ${
            size === "M"
              ? "bg-[#A86549] text-white"
              : "text-[#A86549] bg-white"
          } text-center font-bold flex justify-center items-center`}
        >
          M
        </button>
        <button
          onClick={() => {
            setSize("L");
          }}
          className={`font-lato-regular !text-[1.125rem] w-[3.125rem] h-[3.125rem] border-2 border-[#A86549] ${
            size === "L"
              ? "bg-[#A86549] text-white"
              : "text-[#A86549] bg-white"
          } text-center font-bold flex justify-center items-center`}
        >
          L
        </button>
        <button
          disabled
          className={`relative font-lato-regular !text-[1.125rem] w-[3.125remp h-[3.125rem] border-2 border-[#A86549] ${
            size === "XL"
              ? "bg-[#A86549] text-white"
              : "text-[#A86549] bg-white opacity-50"
          } text-center font-bold flex justify-center items-center`}
        >
          XL
        </button>
        <button
          disabled
          className={`relative font-lato-regular !text-[1.125rem] w-[3.125remp h-[3.125rem] border-2 border-[#A86549] ${
            size === "2XL"
              ? "bg-[#A86549] text-white"
              : "text-[#A86549] bg-white opacity-50"
          } text-center font-bold flex justify-center items-center`}
        >
          2XL
        </button>
        <button
          disabled
          className={`relative font-lato-regular !text-[1.125rem] w-[3.125remp h-[3.125rem] border-2  ${
            size === "3XL"
              ? "bg-[#A86549] border-[#fff] text-white"
              : "text-[#A86549] border-[#A86549] bg-white opacity-50"
          } text-center font-bold flex justify-center items-center`}
        >
          3XL
        </button>
      </div>
    </div>
  );
};

export default SelectSize;
