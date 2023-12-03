import React from "react";
import Image from "next/image";

const SectionThree = () => {
  return (
    <div className="relative">
      <Image
        src="/images/story-2512.png"
        alt="2512 | PACCHIS BARAH STORY"
        className="contrast-125"
        width={600}
        height={600}
      />
      <div className="px-4">
        <p className="text-left mb-6 mt-6 text-lg  font-lato-bold">
          Our name carries profound significance, evoking cherished bonds and
          inspiring lofty aspirations. It serves as a poignant reminder of the
          ones who hold immense importance in our lives, igniting our dreams to
          reach greater heights.
        </p>

        <p className="text-left mb-6 text-lg  font-lato-bold">
          Guided by the unwavering support of my parents and grandparents, I
          developed a profound care for the world and the impact of my actions.
        </p>
        <p className="text-left mb-6 text-lg font-lato-bold">
          This led to the creation of Pacchis Barah, a clothing brand that
          encapsulates the essence of these teachings, fostering a meaningful
          connection between individuals and the world they inhabit.
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
