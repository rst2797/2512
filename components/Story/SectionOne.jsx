import React from "react";
import Image from "next/image";

const SectionOne = ({ children }) => {
  return (
    <div className="relative">
      <Image
        src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/Section 6.jpg"
        alt="2512 | Pacchis Barah Story"
        width={500}
        height={1100}
        className="relative object-cover w-screen h-screen"
      />
      <div className="absolute top-0 left-0 right-0">
        {children}
        <h1 className="story-title text-center font-sansita-regular mt-96 drop-shadow-custom">
          Our Story
        </h1>
        <p className="text-center text-xs font-bold pt-3 tracking-wide">
          A story of sustainable clothing and nature loving people.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
