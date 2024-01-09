import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SelectSize = ({ setProductSize }) => {
  const [size, setSize] = useState("S");
  useEffect(() => {
    setProductSize(size);
  }, [size]);

  const handleSizeChart = () => {
    Swal.fire({
      imageUrl: "/images/size-chart.png",
      imageHeight: 500,
      imageAlt: "2512 size chart | Pacchis Barah Size Chart",
    });
  };

  return (
    <div className="">
      <div className="flex items-center justify-between w-[55%] py-1">
        <h2 className="!text-[1rem] font-semibold font-lato-regular">
          Size: &nbsp; {size}
        </h2>
        <h3
          onClick={() => handleSizeChart()}
          className="text-[#A86549] font-semibold !text-[0.75rem] font-lato-regular underline cursor-pointer"
        >
          Size Chart
        </h3>
      </div>
      <>
        <div className="radio-toolbar w-[55%] flex justify-between">
          <input
            type="radio"
            id="radioApple"
            name="SIZE"
            value="S"
            onChange={(e) => setSize(e.target.value)}
            defaultChecked
          />
          <label className="py-3 px-4 mr-4" htmlFor="radioApple">
            S
          </label>
          <input
            type="radio"
            id="M"
            name="SIZE"
            value="M"
            onChange={(e) => setSize(e.target.value)}
          />
          <label className="py-3 px-4 mx-4" htmlFor="M">
            M
          </label>
          <input
            type="radio"
            id="L"
            name="SIZE"
            value="L"
            onChange={(e) => setSize(e.target.value)}
          />
          <label className="py-3 px-4 mx-4" htmlFor="L">
            L
          </label>
          <input
            type="radio"
            id="XL"
            name="SIZE"
            value="XL"
            onChange={(e) => setSize(e.target.value)}
          />
          <label className="py-3 px-[.85rem] mx-4" htmlFor="XL">
            XL
          </label>
          <input
            type="radio"
            id="2XL"
            name="SIZE"
            value="2XL"
            onChange={(e) => setSize(e.target.value)}
          />
          <label className="py-3 px-[.65rem] mx-4" htmlFor="2XL">
            2XL
          </label>
          <input
            type="radio"
            id="3XL"
            name="SIZE"
            value="3XL"
            onChange={(e) => setSize(e.target.value)}
          />
          <label className="py-3 px-[.6rem] ml-4" htmlFor="3XL">
            3XL
          </label>
        </div>
      </>
    </div>
  );
};

export default SelectSize;
