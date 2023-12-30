import React, { useEffect, useState } from "react";
import DeliveryTruck from "./SVG/DeliveryTruckSVG";
import FabricDetails from "./FabricDetails";
import { useCart } from "react-use-cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeliveryDetails = ({ product, setProductQuantity }) => {
  const [productState, setProductState] = useState(product);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="">
      <Counter quantity={quantity} setQuantity={setQuantity} />
      <AddToCart product={productState} quantity={quantity} />

      <div className="pt-[2rem]">
        <div className="">
          <h4 className="text-[1rem] leading-[.5rem] font-[700] text-[#2F2E2D]">
            Delivery Details
          </h4>

          <h5 className="text-[0.75rem] leading-[1rem] font-[500] text-[#2F2E2D] py-[0.62rem]">
            Enter Pincode to check deliver date
          </h5>
        </div>
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
        <div className="flex items-center gap-[1.125rem] py-[.5rem]">
          <span>
            <h5 className="text-[#FF0909] font-lato-regular !text-[.75rem] !font-[700] !leading-[1rem]">
              Expected delivery by 7th January
            </h5>
            <p className="font-lato-regular !text-[0.65rem] !font-[400]">
              Final delivery based on items in bag
            </p>
          </span>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        style={{ marginBottom: "1rem" }}
      />
    </div>
  );
};

export default DeliveryDetails;

const AddToCart = ({ product, quantity }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ ...product, quantity: quantity, units: quantity });
    toast.success("Added to bag successfully...");
  };
  return (
    <button
      className="py-[0.3rem] my-2 rounded-xl w-[55%] text-white bg-[#A86549] font-lato-regular !text-[.75rem] !font-[700]"
      onClick={handleAddToCart}
    >
      Add to Bag
    </button>
  );
};
const Counter = ({ quantity, setQuantity }) => {
  return (
    <div className="flex items-center pt-4 pb-2">
      <p className="font-semibold pr-4">Quantity: </p>
      <div className="flex bg-white w-fit px-2 border-[2px] rounded-lg">
        <button
          className="focus:bg-transparent active:bg-transparent focus:outline-none px-2"
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        <input
          disabled
          value={quantity}
          className="w-8 text-sm text-center border-x-[1px]"
        />
        <button
          className="focus:bg-transparent active:bg-transparent px-2"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
