import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionTwo = () => {
  return (
    <div className="lg:h-[92vh] lg:bg-[#A86549] flex gap-8 items-center overflow-hidden">
      <div className="hidden lg:flex gap-8 -ml-48">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/homepage/Mask+group.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={300}
          height={350}
          className="rounded-xl"
        />
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/homepage/Group+16.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={300}
          height={400}
          className="rounded-xl"
        />
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/homepage/Group+15.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={300}
          height={400}
          className="rounded-xl"
        />
      </div>
      <div className="m-4 lg:flex flex-col items-end justify-center">
        <h1 className="font-sansita-regular !text-5xl tracking-wide my-4 lg:mt-4 lg:mb-0 mt-0 lg:w-[36.1875rem] lg:!text-[4rem] lg:!leading-[4.5rem] lg:text-[#F4E9DF]">
          Empowering You <br />& the Planet
        </h1>
        <p className="font-lato-regular !leading-5 !text-[1rem] lg:text-[1.75rem] w-full lg:text-[#F4E9DF] lg:pt-[1rem]">
          <Link href="/our-story">
            <a>A story of sustainability, creativity, and <br/> craftsmanship.</a>
          </Link>
        </p>

        <span className="lg:flex justify-start w-full hidden mt-[2rem] ">
          <Link href="/our-story">
            <a className="rounded-2xl bg-[#F4E9DF] py-[0.75rem] px-[1rem] text-[.75rem] font-bold flex items-center w-fit">
              Learn more &nbsp; <IoArrowForward />
            </a>
          </Link>
        </span>
        <div className="w-full mt-12 hidden lg:block">
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
