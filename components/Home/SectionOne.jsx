import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { IoArrowForward } from "react-icons/io5";
import { PiStarFourLight } from "react-icons/pi";

const SectionOne = () => {
  return (
    <div className="relative z-20 lg:-mt-12 lg:min-h-[110vh] bg-cover bg-center bg-no-repeat lg:bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/homepage/1.png')]">
      <div className="block lg:hidden">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home_header.png"
          alt="Sustainable Cloths with 100% cotton | Organic Cloths | 2512 Cloths"
          width={900}
          height={1800}
          className="object-fit w-screen min-h-screen"
        />
      </div>

      <div className=" px-[0.94rem]  2xl:px-20  absolute z-20 top-[26rem] lg:top-[20rem] left-0 right-0 lg:left-0 drop-shadow-custom text-center lg:text-left text-[#2F2E2D]">
        <h1 className="font-sansita-regular lg:!text-[4rem] lg:!leading-[5.625rem] drop-shadow-lg">
          Sustainable. <br className="hidden lg:block" /> Beautiful.
        </h1>
        <p className="font-lato-regular font-bold drop-shadow-lg lg:drop-shadow-none lg:w-[20rem] lg:text-[1.3rem] lg:leading-[2rem] ">
          A collection that embodies the concept of simplicity{" "}
          <span className="block lg:hidden">
            <Link href="/kanso">
              <a className="underline">Learn more</a>
            </Link>
          </span>
        </p>
        <span className="lg:block hidden mt-[3.37rem]">
          <Link href="/kanso">
            <a className="rounded-2xl bg-[#A86549] text-[#F4E9DF] py-[0.875rem] px-[1.25rem] text-[1rem] font-bold flex items-center w-fit">
              Learn more &nbsp; <IoArrowForward className="mt-1" />
            </a>
          </Link>
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#2F2E2D] text-white hidden lg:block">
        <Marquee
          pauseOnHover
          className="backdrop-sepia px-6 py-4 rounded-md font-bold text-[1.2rem] h-[2.6rem] uppercase"
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
