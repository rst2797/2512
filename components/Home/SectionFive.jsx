import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionFive = () => {
  return (
    <div className="relative bg-[#A86549] min-h-[90vh]">
      <video
        muted
        loop
        autoPlay={true}
        controls={false}
        className="object-cover h-[100vh] w-screen lg:hidden"
      >
        <source
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/video/kanso.mp4"
          type="video/mp4"
        />
      </video>
      <div className="lg:grid grid-cols-2 gap-12">
        <Link href="/kanso">
          <a className="absolute lg:relative lg:bottom-0 lg:top-0 lg:pt-28 lg:flex flex-col justify-center bottom-40 left-0 right-0 text-[#2F2E2D] lg:text-white ">
            <>
              <h2 className="font-sansita-regular text-center lg:text-start lg:px-12 lg:py-1 drop-shadow-custom">
                Kanso
              </h2>
              <h2 className="font-sansita-regular text-center lg:text-start lg:px-12 lg:py-1 drop-shadow-custom">
                Our First Collection
              </h2>
              <p className="font-semibold text-sm px-6 text-center lg:text-start lg:px-12 lg:py-4 lg:w-[60%]  drop-shadow-custom">
                Carefully curated collection of t-shirt made with organic cotton
                and minimal embroidery.
              </p>
              <span className="lg:flex justify-start w-full hidden mt-[1rem] lg:px-12">
                <Link href="/our-story">
                  <a className="rounded-2xl bg-[#F4E9DF] text-black py-[0.75rem] px-[1rem] text-[.75rem] font-bold flex items-center w-fit">
                    Learn more &nbsp; <IoArrowForward />
                  </a>
                </Link>
              </span>
            </>
          </a>
        </Link>
        <div className="hidden lg:block">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/homepage/3.png"
            alt=""
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
