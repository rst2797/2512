import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionFour = () => {
  return (
    <>
      <div className="relative lg:grid grid-cols-3 z-20 min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group+2.png')]">
        <div className="col-span-2" />
        <div className="absolute bottom-0 lg:bottom-52 right-0 lg:w-[38%] flex flex-col items-end justify-center h-auto lg:h-[35%] px-4 lg:px-[4.5rem] py-4 lg:pt-32 container bg-[#ffffff9f]">
          <span className="text-[#2F2E2D] text-center w-full my-2 flex items-center justify-center min-h-[3rem] rounded-md !text-[1.7rem] !font-bold tracking-wide font-lato-regular">
            We are fashion forward, people centric & planet loving
          </span>
          <span className="flex justify-center my-[2.5rem] w-full">
            <Link href="/our-story">
              <a className="rounded-xl bg-[#A86549] text-[#fff] py-[0.875rem] px-[1.25rem] text-[.85rem] font-bold flex items-center w-fit">
                Our Story &nbsp; <IoArrowForward className="text-white" />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
