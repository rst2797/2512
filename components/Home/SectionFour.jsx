import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionFour = () => {
  return (
    <>
      <div className="bg-[#A86549] w-screen p-[1.875rem] lg:w-auto lg:hidden block">
        <h2 className="font-sansita-regular !text-[2.5rem] text-white">
          Why Choose Us?
        </h2>
        <h3 className="font-sansita-regular !text-[2.125rem] py-[0.9375rem] text-[#F4E9DF]">
          We are <br /> Fashion forward People centric <br />
          Planet loving
        </h3>
        <Link href="/sustainability">
          <a className="underline text-white my-4 text-[1rem]">Learn more</a>
        </Link>
      </div>
      <div className="relative hidden lg:grid grid-cols-3 z-20 lg:min-h-[110vh] bg-cover bg-center bg-no-repeat lg:bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/homepage/2.png')]">
        <div className="col-span-2" />
        <div className="flex flex-col items-end justify-center h-screen px-[4.5rem] pt-32 container">
          <h2 className="font-sansita-regular text-[#2F2E2D] w-full">
            Why Choose Us?
          </h2>
          <h3 className="font-stay-dreaming w-full text-3xl mt-4 mb-1 text-[#2F2E2D]">
            We are
          </h3>
          <span className="bg-[#A86549] text-[#F4E9DF] w-full mb-3 flex items-center justify-center h-[3rem] rounded-md !text-[1rem] !font-bold tracking-wide font-lato-regular">
            Fashion Forward
          </span>
          <span className="bg-[#A86549] text-[#F4E9DF] w-full my-3 flex items-center justify-center h-[3rem] rounded-md !text-[1rem] !font-bold tracking-wide font-lato-regular">
            People Centric
          </span>
          <span className="bg-[#A86549] text-[#F4E9DF] w-full my-3 flex items-center justify-center h-[3rem] rounded-md !text-[1rem] !font-bold tracking-wide font-lato-regular">
            Planet Loving
          </span>
          <span className="lg:block hidden mt-[3rem] w-full">
            <Link href="/kanso">
              <a className="rounded-2xl bg-[#A86549] text-[#F4E9DF] py-[0.875rem] px-[1.25rem] text-[.85rem] font-bold flex items-center w-fit">
                Learn more &nbsp; <IoArrowForward />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
