import React from "react";
import Image from "next/image";

const SectionOne = ({ children }) => {
  return (
    <div className="relative lg:bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/Sustainability/1.png')] lg:min-h-[91vh] lg:mt-16 bg-center bg-no-repeat bg-cover">
      <div className="lg:hidden block">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/Frame 133.png"
          alt="2512 | Pacchis Barah - Sustainability"
          className="object-cover w-[100vw] h-[100vh]"
          width={500}
          height={1100}
        />
      </div>
      <div className="absolute top-0 left-0 right-0">
        {children}
        <div className="lg:text-white lg:px-20 lg:w-[35%] rounded-full">
          <h1 className="story-title text-center font-sansita-regular mt-96 drop-shadow-custom  relative z-40 drop-shadow-md">
            Sustainability
          </h1>
          <p className="text-center text-xs font-bold px-8 lg:px-0 pt-3 tracking-wide drop-shadow-custom  relative z-40 drop-shadow-md">
            Sustainability is an ever evolving commitment for us. We work
            towards finding balance between the environment, economy and ethics.
          </p>
          <p className="text-center text-xs font-bold px-8 lg:px-0 pt-3 tracking-wide  relative z-40 drop-shadow-md">
            Sustainable fashion to us is creating versatile, timeless pieces in
            harmony to the planet and the people. How are we sustainable?
          </p>
          {/* <div className="drop-shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] py-32 px-48 absolute z-10 top-10 rounded-full"/> */}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
