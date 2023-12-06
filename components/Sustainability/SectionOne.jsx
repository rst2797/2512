import React from "react";
import Image from "next/image";

const SectionOne = ({ children }) => {
  return (
    <div className="relative">
      <Image
        src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/Frame 133.png"
        alt="2512 | Pacchis Barah - Sustainability"
        className="object-cover w-[100vw] h-[100vh]"
        width={500}
        height={1100}
      />
      <div className="absolute top-0 left-0 right-0 ">
        {children}
        <h1 className="story-title text-center font-sansita-regular mt-96 drop-shadow-custom">
          Sustainability
        </h1>
        <p className="text-center text-xs font-bold px-8 pt-3 tracking-wide drop-shadow-custom">
          Sustainability is an ever evolving commitment for us. We work towards
          finding balance between the environment, economy and ethics.
        </p>
        <p className="text-center text-xs font-bold px-8 pt-3 tracking-wide">
          Sustainable fashion to us is creating versatile, timeless pieces in
          harmony to the planet and the people. How are we sustainable?
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
