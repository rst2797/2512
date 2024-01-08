import React from "react";
import Image from "next/image";
import WebGrid from "./WebGrid";

const SectionThree = () => {
  return (
    <div className="relative lg:w-full lg:grid grid-cols-2 items-center bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/our-story/story_3.png')]">
      <div className="mx-auto max-w-[1450px]">
        <h2 className="font-sansita-regular lg:hidden block leading-[70px] px-3 pt-4 !text-[2.5rem] text-center lg:text-start text-[#F4E9DF] w-full">
          “Fashion forward, People centric, Planet loving”
        </h2>
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/our-story/story_2-transparent.png"
          alt="2512 | PACCHIS BARAH STORY"
          className="contrast-125 brightness-125"
          width={800}
          height={800}
        />
      </div>
      <div className="px-4 text-[#F4E9DF]">
        <h2 className="font-sansita-regular hidden lg:block leading-[70px] px-3 py-4 lg:py-12 !text-[2.5rem] text-center lg:text-start text-[#F4E9DF] w-full">
          “Fashion forward, People centric, Planet loving”
        </h2>
        <p className="text-center lg:text-left lg:mb-6 lg:mt-6 text-lg font-lato-bold lg:!font-medium">
          Our name carries profound significance, evoking cherished bonds and
          inspiring lofty aspirations. It serves as a poignant reminder of the
          ones who hold immense importance in our lives, igniting our dreams to
          reach greater heights.
        </p>

        <p className="text-center lg:text-left mb-6 text-lg  font-lato-bold lg:!font-medium">
          Guided by the unwavering support of my parents and grandparents, I
          developed a profound care for the world and the impact of my actions.
        </p>
        <p className="text-center lg:text-left pb-3 text-lg font-lato-bold lg:!font-medium">
          This led to the creation of Pacchis Barah, a clothing brand that
          encapsulates the essence of these teachings, fostering a meaningful
          connection between individuals and the world they inhabit.
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
