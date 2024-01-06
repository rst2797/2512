import Link from "next/link";
import React from "react";

const SelectColor = ({ product }) => {
  return (
    <div className="w-72 h-auto flex flex-col">
      <div className="font-semibold">
        <h2 className="capitalize">Color: {product.color}</h2>
      </div>
      <div className="flex px-0 py-[.5rem] w-[25%]">
        <Link href="#">
          <a>
            <button
              className={`!text-[0.9375rem] rounded-full p-4 border-2 border-[#A86549] bg-white text-center font-bold flex justify-center items-center ${
                product.color === "white" ? "opacity-100" : "opacity-50"
              }`}
            />
          </a>
        </Link>
        <Link href="#">
          <a>
            <button
              className={`!text-[0.9375rem] rounded-full p-4 mx-2 border-2 border-[#A86549] bg-[#B55A30] text-white text-center font-bold flex justify-center items-center ${
                product.color === "rust" ? "opacity-100" : "opacity-50"
              }`}
            />
          </a>
        </Link>
        <Link href="#">
          <a>
            <button
              className={`!text-[0.9375rem] rounded-full p-4 border-2 border-black bg-black text-white text-center font-bold flex justify-center items-center ${
                product.color === "black" ? "opacity-100" : "opacity-50"
              }`}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SelectColor;

{
  /* */
}
