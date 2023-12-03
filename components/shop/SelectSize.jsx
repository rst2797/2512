import React, { useState } from "react";

const SelectSize = () => {
  const [size, setSize] = useState("S");

  return (
    <div className="border-b-4 border-white py-[0.625rem] px-[0.94rem]">
      <div className="flex justify-between items-center">
        <h2 className="!text-[1rem] font-semibold font-lato-regular">
          Select Size
        </h2>
        <h3 className="text-[#A86549] font-semibold !text-[0.75rem] font-lato-regular underline cursor-pointer">
          Size Chart
        </h3>
      </div>
      <>
        <div className="radio-toolbar flex justify-between">
          <input
            type="radio"
            id="radioApple"
            name="SIZE"
            defaultValue="S"
            defaultChecked
          />
          <label htmlFor="radioApple">S</label>
          <input
            type="radio"
            id="M"
            name="SIZE"
            defaultValue="M"
          />
          <label htmlFor="M">M</label>
          <input
            type="radio"
            id="L"
            name="SIZE"
            defaultValue="L"
          />
          <label htmlFor="L">L</label>
          <input
            type="radio"
            id="XL"
            name="SIZE"
            defaultValue="XL"
          />
          <label htmlFor="XL">XL</label>
          <input
            type="radio"
            id="2XL"
            name="SIZE"
            defaultValue="2XL"
          />
          <label htmlFor="2XL">2XL</label>
          <input
            type="radio"
            id="3XL"
            name="SIZE"
            defaultValue="3XL"
          />
          <label htmlFor="3XL">3XL</label>
        </div>
      </>
    </div>
  );
};

export default SelectSize;
