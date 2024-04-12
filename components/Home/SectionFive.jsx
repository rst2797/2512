import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionFive = () => {
  return (
    <div className="relative overflow-hidden lg:max-h-[90vh] lg:bg-contain lg:bg-left lg:bg-no-repeat bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group+3.png')]">
      <div className="lg:grid grid-cols-5 flex flex-col-reverse gap-0">
        <Link href="/kanso">
          <a className="lg:relative lg:top-32 lg:py-0 py-32 lg:flex flex-col bottom-40 left-0 right-0 text-white ">
            <>
              <h2 className="font-sansita-regular !text-[2.8rem] text-center lg:text-start lg:px-12 lg:py-1 lg:text-[2.5rem] lg:pt-20">
                Our First Collection
              </h2>
              <p className="font-semibold text-lg px-6 lg:px-12 py-4 lg:w-full lg:text-left text-center lg:text-lg">
                Carefully curated collection of t-shirts made with organic cotton
                and minimal embroidery.
              </p>
              <span className="lg:flex justify-start w-full hidden mt-[1rem] lg:px-12">
                <Link href="/kanso">
                  <a className="rounded-lg bg-[#F4E9DF] text-[#2F2E2D] py-[0.75rem] px-[1rem] text-[.75rem] font-bold flex items-center w-fit">
                    Learn more &nbsp; <IoArrowForward />
                  </a>
                </Link>
              </span>
            </>
          </a>
        </Link>
        <div className="col-span-4">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home_page_image2.jpeg"
            alt="A Sustainable Product From 2512"
            width={500}
            height={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
