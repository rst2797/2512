import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionTwo = () => {
  return (
    <div className="lg:h-[92vh] bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group.png')] py-4 flex flex-col-reverse lg:flex-row gap-8 items-center overflow-hidden">
      <div className="flex gap-8 -ml-72">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/section2_2.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={350}
          height={350}
          className="rounded-xl drop-shadow-xl w-full lg:w-auto"
        />
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/section2_2.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={350}
          height={400}
          className="rounded-xl drop-shadow-xl w-full lg:w-auto"
        />
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/section2_1.png"
          alt="Pacchis Barah Organic Tees Brand"
          width={350}
          height={400}
          className="rounded-xl drop-shadow-xl w-full lg:w-auto"
        />
      </div>
      <div className="m-4 flex flex-col items-end justify-center">
        <h1 className="font-sansita-regular text-center lg:text-start !text-[2.5rem] tracking-wide my-4 lg:mt-4 lg:mb-0 mt-0 lg:w-[36.1875rem] lg:!text-[4rem] lg:!leading-[4.5rem] lg:text-[#2F2E2D]">
          Empowering You <br className="hidden lg:block" />& the Planet
        </h1>
        <p className="font-lato-regular text-center lg:text-start !leading-5 lg:text-[1.75rem] w-full lg:text-[#2F2E2D] lg:pt-[1rem]">
          <Link href="/our-story">
            <a>
              A story of sustainability, creativity, and{" "}
              <br className="hidden lg:block" /> craftsmanship.
            </a>
          </Link>
        </p>

        <span className="flex justify-center lg:justify-start w-full mt-[2rem] ">
          <Link href="/our-story">
            <a className="rounded-xl bg-[#A86549] text-white py-[0.875rem] px-[1.25rem] text-[.75rem] font-bold flex items-center w-fit">
              Learn more &nbsp; <IoArrowForward />
            </a>
          </Link>
        </span>
        <div className="w-full mt-12 hidden lg:flex justify-between">
          <div className="w-fit flex justify-between">
            <input type="radio" className="mx-1" defaultChecked />
            <input type="radio" className="mx-1" />
            <input type="radio" className="mx-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
