import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionTwo = () => {
  return (
    <div className="lg:h-[92vh] lg:bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group.png')] flex gap-8 items-center overflow-hidden">
      <div className="hidden lg:flex gap-8 -ml-72">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/section2_2.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={350}
          height={350}
          className="rounded-xl drop-shadow-xl"
        />
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/section2_2.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={350}
          height={400}
          className="rounded-xl drop-shadow-xl"
        />
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/section2_1.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={350}
          height={400}
          className="rounded-xl drop-shadow-xl"
        />
      </div>
      <div className="m-4 lg:flex flex-col items-end justify-center">
        <h1 className="font-sansita-regular !text-5xl tracking-wide my-4 lg:mt-4 lg:mb-0 mt-0 lg:w-[36.1875rem] lg:!text-[4rem] lg:!leading-[4.5rem] lg:text-[#2F2E2D]">
          Empowering You <br />& the Planet
        </h1>
        <p className="font-lato-regular !leading-5 !text-[1rem] lg:text-[1.75rem] w-full lg:text-[#2F2E2D] lg:pt-[1rem]">
          <Link href="/our-story">
            <a>
              A story of sustainability, creativity, and <br /> craftsmanship.
            </a>
          </Link>
        </p>

        <span className="lg:flex justify-start w-full hidden mt-[2rem] ">
          <Link href="/our-story">
            <a className="rounded-2xl bg-[#A86549] text-white py-[0.875rem] px-[1.25rem] text-[.75rem] font-bold flex items-center w-fit">
              Learn more &nbsp; <IoArrowForward />
            </a>
          </Link>
        </span>
        <div className="w-full mt-12 hidden lg:flex justify-between">
          <div className="w-fit flex justify-between">
            <input type="radio" className="mx-1" defaultChecked/>
            <input type="radio" className="mx-1" />
            <input type="radio" className="mx-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
