import React, { useState } from "react";
import DeliveryTruck from "./SVG/DeliveryTruckSVG";
import FabricDetails from "./FabricDetails";

const DeliveryDetails = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <div className="py-[1.25rem] px-[0.94rem]">
      <div className="flex justify-between py-[1.25rem]">
        <Counter
          productQuantity={productQuantity}
          setProductQuantity={setProductQuantity}
        />
        <AddToCart />
      </div>
      <div className="py-[1.25rem]">
        <h4 className="font-lato-regular !text-[1rem] !font-[700] text-[#2F2E2D]">
          Delivery Details
        </h4>

        <h5 className="font-lato-regular !text-[0.75rem] !font-[300] text-[#2F2E2D] py-[0.62rem]">
          Enter Pincode to check deliver date
        </h5>
        <form action="" className="flex">
          <input
            type="text"
            defaultValue={466001}
            className="w-[12.125rem] h-[2.5625rem] py-[0.8125rem] px-[1rem]"
          />
          <button className="text-[#A86549] font-lato-regular !font-[700] !text-[0.8125rem] py-[0.6875rem] px-[0.625rem] w-[8.5rem] h-[2.5625rem] bg-white">
            Change Pincode
          </button>
        </form>
        <div className="flex items-center gap-[1.125rem] py-[1.25rem]">
          <DeliveryTruck />
          <span>
            <h5 className="text-[#4BAF59] font-lato-regular !text-[0.75rem] !font-[700] !leading-[1rem]">
              Expected delivery by 7th August
            </h5>
            <p className="font-lato-regular !text-[0.75rem] !leading-[1rem] !font-[400]">Final delivery based on items in bag</p>
          </span>
        </div>
        <FabricDetails/>
      </div>
    </div>
  );
};

export default DeliveryDetails;

const AddToCart = () => {
  return (
    <button className="py-[0.6875rem] w-[13.0625rem] text-white bg-[#A86549] font-lato-regular !text-[1.125rem] !font-[700]">
      Add to Bag
    </button>
  );
};
const Counter = ({ productQuantity, setProductQuantity }) => {
  return (
    <div className="flex bg-white w-fit px-2 py-1 border-[2px] border-[#A86549] text-[#A86549]">
      <button
        className="focus:bg-transparent active:bg-transparent focus:outline-none font-bold"
        disabled={productQuantity === 1}
        onClick={() => {
          setProductQuantity(productQuantity - 1);
        }}
      >
        -
      </button>
      <input
        disabled
        value={productQuantity}
        className="w-12 text-center font-bold"
      />
      <button
        className="focus:bg-transparent active:bg-transparent font-bold"
        onClick={() => {
          setProductQuantity(productQuantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
