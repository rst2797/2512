import React from "react";
import Image from "next/image";

const SectionOne = ({ children }) => {
  return (
    <div className="relative">
      <video
        muted
        loop
        autoPlay={true}
        controls={false}
        className="object-cover h-[100vh] w-screen lg:hidden"
      >
        <source
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/kanso/Mobile+Video.mp4"
          type="video/mp4"
        />
      </video>
      <video
        muted
        loop
        autoPlay={true}
        controls={false}
        className="object-cover mt-14 h-[93vh] w-screen hidden lg:block"
      >
        <source
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/kanso/head-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 left-0 right-0 shadow-white">
        {children}
        <div className="px-20 lg:text-white lg:w-[31%]">
          <h1 className="story-title lg:mb-4 text-center lg:text-left font-sansita-regular mt-[34rem] lg:mt-32 !leading-[2rem]">
            Kanso
          </h1>
          <p className="text-center lg:text-left story-title font-sansita-regular !text-[2.1rem] !leading-[2.5rem] font-bold px-3 lg:px-0 pt-3">
            Our First Collection
          </p>
          <p className="text-center lg:text-left text-[.9rem] font-bold px-4 lg:px-0 pt-6 leading-4 lg:leading-7">
            Carefully curated collection of t-shirt made with organic cotton and
            minimal embroidery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
