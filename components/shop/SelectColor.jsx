import Link from "next/link";
import React from "react";

const SelectColor = ({ product }) => {
  return (
    <div className="py-[0.625rem] px-[0.94rem]">
      <h2 className="text-2xl !text-[1rem] font-lato-regular font-semibold">Color</h2>
      <div className="flex justify-between px-0 py-[1.125rem] border-b-4 border-white">
        <Link href="/collection/live_in_moment_tshirt_white">
          <a>
            <button
              className={`font-lato-regular w-[5.8rem] !text-[0.9375rem] py-[0.875rem] px-[1.25rem] h-12 border-2 border-[#A86549] bg-white text-center font-bold flex justify-center items-center ${
                product.color === "white" ? "opacity-100" : "opacity-50"
              }`}
            >
              White
            </button>
          </a>
        </Link>
        <Link href="/collection/live_in_moment_tshirt_rust">
          <a>
            <button
              className={`font-lato-regular w-[5.8rem] !text-[0.9375rem] py-[0.875rem] px-[1.25rem] h-12 border-2 border-[#A86549] bg-[#A86549] text-white text-center font-bold flex justify-center items-center ${
                product.color === "rust" ? "opacity-100" : "opacity-50"
              }`}
            >
              Rust
            </button>
          </a>
        </Link>
        <Link href="/collection/live_in_moment_tshirt_black">
          <a>
            <button
              className={`font-lato-regular w-[5.8rem] !text-[0.9375rem] py-[0.875rem] px-[1.25rem] h-12 border-2 border-black bg-black text-white text-center font-bold flex justify-center items-center ${
                product.color === "black" ? "opacity-100" : "opacity-50"
              }`}
            >
              Black
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SelectColor;
