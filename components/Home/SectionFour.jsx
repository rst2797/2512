import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionFour = () => {
  return (
    <>
      <div className="relative lg:grid grid-cols-3 z-20 min-h-screen lg:min-h-[110vh] bg-cover bg-center bg-no-repeat bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group+2.png')]">
        <div className="col-span-2" />
        <div className="absolute bottom-0 lg:relative flex flex-col items-end justify-center h-1/2 lg:h-full px-4 lg:px-[4.5rem] lg:pt-32 container bg-[#00000073]">
          <h2 className="font-sansita-regular text-[#fff] w-full">
            Why Choose Us?
          </h2>
          <h3 className=" w-full text-3xl text-center mt-4 mb-1 text-[#fff]">
            We are
          </h3>
          <span className="bg-[#EADAC8] text-[#2F2E2D] w-full mb-3 flex items-center justify-center h-[3rem] rounded-md !text-[1rem] !font-bold tracking-wide font-lato-regular">
            Fashion Forward
          </span>
          <span className="bg-[#EADAC8] text-[#2F2E2D] w-full my-3 flex items-center justify-center h-[3rem] rounded-md !text-[1rem] !font-bold tracking-wide font-lato-regular">
            People Centric
          </span>
          <span className="bg-[#EADAC8] text-[#2F2E2D] w-full my-3 flex items-center justify-center h-[3rem] rounded-md !text-[1rem] !font-bold tracking-wide font-lato-regular">
            Planet Loving
          </span>
          <span className="flex justify-center mt-[3rem] w-full">
            <Link href="/kanso">
              <a className="rounded-xl bg-[#F4E9DF] text-[#2F2E2D] py-[0.875rem] px-[1.25rem] text-[.85rem] font-bold flex items-center w-fit">
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
