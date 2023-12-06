import Image from "next/image";
import React from "react";

const SectionFive = () => {
  return (
    <div className="relative">
      <video
        muted
        loop
        autoPlay={true}
        controls={false}
        className="object-cover h-[100vh] w-screen"
      >
        <source src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/video/kanso.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-40 left-0 right-0 text-[#2F2E2D]">
        <h2 className="font-sansita-regular text-center">Kanso</h2>
        <h2 className="font-sansita-regular text-center !text-[2rem]">
          Our First Collection
        </h2>
        <p className="font-bold text-sm px-6 text-center">
          Carefully curated collection of t-shirt made with organic cotton and
          minimal embroidery.
        </p>
      </div>
    </div>
  );
};

export default SectionFive;
