import React from "react";
import Image from "next/image";

const SectionOne = ({ children }) => {
  const details = [
    "The motivation behind starting the brand is centered around the planet and its people, aiming to bring about change in the fashion industry by establishing a capsule, gender-inclusive fashion brand that utilises certified eco-friendly textiles.",
    "The problem we aim to address is the issue of over-consumption and excessive production in the fashion industry. There is a critical need to view fashion through an environmental lens, striving to create products with minimal impact on the planet while making a positive impact on society. It's not just about establishing a fashion brand, it’s about cultivating a conscious community.",
  ];
  return (
    <div className="relative overflow-hidden lg:px-20 min-h-screen bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/our-story/story_1.png')] bg-cover bg-center bg-no-repeat lg:min-h-[91vh] lg:mt-[4.2rem]">
      <div className="absolute lg:relative z-50 top-0 left-0 right-0 ">
        {children}
        <h1 className="story-title text-center z-40 lg:text-left font-sansita-regular mt-60 lg:mt-24 text-white">
          Our Story
        </h1>
        <p className="px-6 lg:px-0 text-left text-white font-semibold pt-3 lg:pb-4 tracking-wide">
          A story of sustainable clothing and nature loving people.
        </p>
      </div>
      <div className="relative z-20 lg:max-w-[30%] lg:top-0 top-96 px-6 lg:px-0 text-white font-semibold">
        {details.map((ele, index) => (
          <p key={index} className="pb-12">
            {ele}
          </p>
        ))}
      </div>
      <div className="bg-[#0007] absolute z-10 left-0 top-0 h-screen w-screen lg:w-[35vw]" />
    </div>
  );
};

export default SectionOne;
