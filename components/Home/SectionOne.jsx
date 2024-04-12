import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { IoArrowForward } from "react-icons/io5";
import { PiStarFourLight } from "react-icons/pi";

const SectionOne = () => {
  return (
    <div className="relative z-20 mt-16 min-h-[95vh] lg:min-h-[91vh] bg-cover bg-center bg-no-repeat bg-[url('/images/collage/mobileHome.png')] lg:bg-[url('/images/collage/home.png')]">
      <p className="text-center text-black z-50 absolute top-[40%] left-0 w-full font-semibold text-xl">
        <Link href="/shop/tshirt">
          <a className="underline">Kanso</a>
        </Link>{" "}
        <br />
        Shop 100% Organic Cotton Tees
      </p>
      <div className="absolute mt-12 bottom-0 left-0 right-0 bg-[#A86549] text-white">
        <Marquee
          pauseOnHover
          className="px-6 py-4 rounded-md text-[.8rem] h-[2.5rem] uppercase"
        >
          Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp; Free shipping all over India! &nbsp;
          <PiStarFourLight />
          &nbsp;
        </Marquee>
      </div>
    </div>
  );
};

export default SectionOne;
