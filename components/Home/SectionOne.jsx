import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { IoArrowForward } from "react-icons/io5";
import { PiStarFourLight } from "react-icons/pi";

const SectionOne = () => {
  return (
    <div className="relative z-20 min-h-[100vh] bg-cover bg-center bg-no-repeat bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/0O9A8802+1.png')]">
      <div className=" px-[0.94rem]  2xl:px-20 text-white absolute z-20 top-[26rem] lg:top-[22rem] left-0 right-0 lg:left-0 text-center lg:text-left">
        <h1 className="font-sansita-regular lg:!text-[4rem] lg:!leading-[5.5rem]">
          Sustainable. <br className="hidden lg:block" /> Beautiful.
        </h1>
        <p className="font-lato-regular lg:drop-shadow-none lg:w-[26rem] lg:text-[1.75rem] lg:leading-[2.375rem] ">
          A collection that embodies the concept of simplicity{" "}
          <span className="block lg:hidden">
            <Link href="/kanso">
              <a className="underline">Learn more</a>
            </Link>
          </span>
        </p>
        <span className="lg:block hidden mt-[1rem]">
          <Link href="/kanso">
            <a className="rounded-2xl bg-[#A86549] text-[#F4E9DF] py-[0.875rem] px-[1.25rem] text-[1rem] font-bold flex items-center w-fit">
              Learn more &nbsp; <IoArrowForward className="mt-1" />
            </a>
          </Link>
        </span>
      </div>
      <div className="absolute mt-12 bottom-0 left-0 right-0 bg-[#A86549] text-white">
        <Marquee
          pauseOnHover
          className="px-6 py-4 rounded-md text-[.8rem] h-[2.5rem] uppercase"
        >
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
          Free shipping all over India! &nbsp;<PiStarFourLight/>&nbsp;
        </Marquee>
      </div>
    </div>
  );
};

export default SectionOne;
