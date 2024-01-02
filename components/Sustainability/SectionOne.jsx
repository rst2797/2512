import React from "react";
import Image from "next/image";

const SectionOne = ({ children }) => {
  return (
    <div className="relative bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/sustainability/Mask+group.png')] min-h-screen lg:min-h-[91vh] lg:mt-16 bg-center bg-no-repeat bg-cover">
      <div className="absolute bottom-0 lg:top-0 left-0 right-0">
        {children}
        <div className="text-white lg:text-[#2F2E2D] bg-[#00000074] lg:bg-transparent lg:px-20 lg:w-[42%]">
          <h1 className="story-title font-sansita-regular mt-12 text-center lg:text-start py-[1.85rem] relative z-40">
            Sustainability
          </h1>
          <p className="text-[1.125rem] leading-[1.75rem] font-bold px-8 lg:px-0 py-3 tracking-widest text-center lg:text-start  relative z-40">
            Welcome to PacchisBarah, where sustainable fashion meets a
            commitment to the planet and it’s people. Our dedication to
            sustainability is a continual journey, focused on mindful
            production. From fabric quality to low impact dyes, we meticulously
            ensure our offerings are free from plastic and toxic substances at
            every stage. We strive for a harmonious balance between the
            environment, economy, and ethics, providing a unique and sustainable
            alternative for fashion enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
