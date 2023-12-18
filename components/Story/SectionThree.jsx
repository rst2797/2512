import React from "react";
import Image from "next/image";
import WebGrid from "./WebGrid";

const SectionThree = () => {
  return (
    <div className="relative lg:w-full lg:grid grid-cols-2 items-center lg:bg-[#a15735]">
      <Image
        src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/story-2512.png"
        alt="2512 | PACCHIS BARAH STORY"
        className="contrast-125"
        width={600}
        height={600}
      />
      <div className="px-4 lg:text-[#F4E9DF]">
        <p className="text-left mb-6 mt-6 text-lg font-lato-bold lg:!font-medium">
          Our name carries profound significance, evoking cherished bonds and
          inspiring lofty aspirations. It serves as a poignant reminder of the
          ones who hold immense importance in our lives, igniting our dreams to
          reach greater heights.
        </p>

        <p className="text-left mb-6 text-lg  font-lato-bold lg:!font-medium">
          Guided by the unwavering support of my parents and grandparents, I
          developed a profound care for the world and the impact of my actions.
        </p>
        <p className="text-left mb-6 text-lg font-lato-bold lg:!font-medium">
          This led to the creation of Pacchis Barah, a clothing brand that
          encapsulates the essence of these teachings, fostering a meaningful
          connection between individuals and the world they inhabit.
        </p>
        <div className="hidden lg:block">
          <h2 className="font-sansita-regular leading-[70px] px-3 py-12 !text-[1.75rem] text-[#F4E9DF] w-[70%]">
            “Fashion forward People centric Planet loving”
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
