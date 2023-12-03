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
        className="object-cover h-[100vh] w-screen"
      >
        <source
          src="/images/video/kanso.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 left-0 right-0 shadow-white">
        {children}
        <h1 className="story-title text-center font-sansita-regular mt-96 !leading-[2rem] drop-shadow-custom">
          Kanso
        </h1>
        <p className="text-center story-title font-sansita-regular !text-[2.1rem] !leading-[1.1rem]  font-bold px-3 pt-3 drop-shadow-custom">
          Our First Collection
        </p>
        <p className="text-center text-[.9rem] font-bold px-4 pt-6 leading-4 drop-shadow-custom">
          Carefully curated collection of t-shirt made with organic cotton and
          minimal embroidery.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
