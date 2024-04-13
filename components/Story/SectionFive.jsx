import Image from "next/image";
import React from "react";

const SectionFive = () => {
  return (
    <div className="relative px-4 lg:px-20 lg:py-24 flex flex-col-reverse lg:grid grid-cols-2 gap-8 lg:h-[87vh] bg-cover bg-no-repeat bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/our-story/story_4.png')] overflow-hidden">
      <div className="flex flex-col justify-center ">
        <h2 className="font-sansita-regular text-center lg:text-start lg:pb-16 leading-[70px] text-[#2F2E2D] lg:text-[#2F2E2D]">
          Note from the Founder
        </h2>

        <p className="text-center lg:text-left mb-6 mt-16 lg:mt-0 text-lg lg:text-md font-lato-bold lg:text-[#2F2E2D]">
          “ I believe that fashion should be a reflection of who we are and what
          we stand for. Pacchis Barah is dedicated to creating fashion that
          promotes individuality, promotes inclusivity and prioritises
          controlled consumption & production.
        </p>

        <p className="text-center lg:text-left mb-6 text-lg lg:text-md font-lato-bold lg:text-[#2F2E2D]">
          Thank you for being a part of our journey and for your commitment to
          making the world a better place. “
        </p>

        <p className="text-center lg:text-left mb-6 lg:text-md text-lg font-lato-bold lg:text-[#2F2E2D]">
          Palak Dubey
          <br /> (Founder & CEO )
        </p>
      </div>
      <div className="flex justify-center lg:inline-block lg:sticky top-0 bottom-0 mt-4 lg:mt-20 lg:ml-32">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/Palak_Dubey.JPG"
          alt="2512 Sustainable - Planet Love - Clothes"
          width={250}
          height={330}
        />
      </div>
    </div>
  );
};

export default SectionFive;
