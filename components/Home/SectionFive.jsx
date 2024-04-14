import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionFive = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden h-screen lg:h-[90vh] w-screen bg-cover origin-right bg-no-repeat lg:bg-cover lg:bg-left lg:bg-no-repeat bg-[url('/images/home_first_collection.jpeg')]">
        <div className="bg-[#ffffffa4] sticky left-0 top-full lg:top-0 w-full lg:w-[35%] h-[30%] lg:h-full text-center">
          <Link href="/kanso">
            <a className="lg:sticky lg:top-[55%] lg:py-0 py-32 lg:flex flex-col bottom-40 left-0 right-0 text-black ">
              <>
                <h2 className="font-sansita-regular !leading-[2.5rem] !text-[2.8rem] text-center lg:px-4 lg:py-1 lg:text-[2.5rem] lg:pt-20">
                  Our First Collection
                </h2>
                <p className="font-semibold text-lg px-6 py-4 text-center lg:px-20 lg:text-lg">
                  A story of sustainability, creativity and craftsmanship.
                </p>
                <span className="flex justify-center w-full lg:mt-[1rem] lg:px-12">
                  <Link href="/kanso">
                    <a className="rounded-lg text-[#F4E9DF] bg-[#A86549] py-[0.75rem] px-[1rem] text-[.75rem] font-bold flex items-center w-fit">
                      Learn more &nbsp; <IoArrowForward />
                    </a>
                  </Link>
                </span>
              </>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
