import React from "react";
import Link from "next/link";

const SectionOne = ({ children }) => {
  return (
    <div className="relative z-20 min-h-[100vh] bg-cover bg-center bg-no-repeat bg-[url('/images/collage/kanso.png')]">
      <div className="absolute bottom-0 right-0 left-0 w-auto lg:w-[35%] flex flex-col items-end justify-center h-auto lg:h-[35%] px-4 lg:px-[.5rem] py-4 lg:pt-12 container bg-[#ffffff85]">
        <h1 className="story-title mr-12 lg:mb-4 !text-center lg:text-left font-sansita-regular !leading-[3rem]">
          Kanso <br/> Our First Collection
        </h1>
        <span className="text-[#2F2E2D] text-center lg:px-24 w-full my-2 flex items-center justify-center min-h-[3rem] rounded-md !text-[0.97rem] !font-bold tracking-wide font-lato-regular">
          <p>
            Carefully curated collection of t-shirt made with organic cotton and
            minimal embroidery.
          </p>
        </span>
      </div>
      <div className="absolute top-0 left-0 right-0 shadow-white">
        {children}
      </div>
    </div>
  );
};

export default SectionOne;
