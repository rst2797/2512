import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionFive = () => {
  return (
    <div className="relative bg-[#ae6847] overflow-hidden max-h-[90vh] lg:bg-contain lg:bg-left lg:bg-no-repeat lg:bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group+3.png')]">
      <div className="lg:grid grid-cols-5 -gap-8">
        <Link href="/kanso">
          <a className="absolute lg:relative lg:top-32 lg:flex flex-col bottom-40 left-0 right-0  text-[#2F2E2D] lg:text-white ">
            <>
              <h2 className="font-sansita-regular text-center lg:pt-20 lg:text-start lg:px-12 lg:py-1 drop-shadow-custom">
              Kanso Our First Collection
              </h2>
              <p className="font-semibold text-sm px-6 lg:px-12 lg:py-4 lg:w-full text-justify  drop-shadow-custom">
                Carefully curated collection of t-shirt made with organic cotton
                and minimal embroidery.
              </p>
              <span className="lg:flex justify-start w-full hidden mt-[1rem] lg:px-12">
                <Link href="/our-story">
                  <a className="rounded-lg bg-[#F4E9DF] text-[#2F2E2D] py-[0.75rem] px-[1rem] text-[.75rem] font-bold flex items-center w-fit">
                    Learn more &nbsp; <IoArrowForward />
                  </a>
                </Link>
              </span>
            </>
          </a>
        </Link>
        <div className="hidden lg:block col-span-4">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/22+1.png"
            alt=""
            width={1800}
            height={1800} 
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
