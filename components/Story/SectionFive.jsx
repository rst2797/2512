import Image from "next/image";
import React from "react";

const SectionFive = () => {
  return (
    <div className="relative px-4 lg:px-20 lg:py-6 lg:grid grid-cols-2 gap-8 lg:h-[80vh] bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/our-story/story_4.png')] overflow-hidden">
      <div className="flex flex-col justify-center ">
        <h2 className="font-sansita-regular leading-[70px] text-[#2F2E2D] lg:text-[#2F2E2D]">
          Note from the Founder
        </h2>
        <h3 className="text-[7rem] text-[#A86549] font-extrabold font-mono leading-[7rem] hidden lg:block mt-4 quotes">
          &ldquo;
        </h3>

        <p className="text-left mb-6 mt-6 lg:mt-0 text-lg lg:text-md font-lato-bold lg:text-[#2F2E2D]">
          We believe that fashion should be a reflection of who we are and what
          we stand for, and were honored that youve chosen to express yourself
          through our clothes. Our brand is dedicated to creating fashion that
          celebrates individuality, promotes inclusivity, and prioritises
          sustainability.
        </p>

        <p className="text-left mb-6 text-lg lg:text-md font-lato-bold lg:text-[#2F2E2D]">
          Thank you for being a part of our journey and for your commitment to
          making the world a better place, one t-shirt at a time!
        </p>

        <p className="text-left mb-6 lg:text-md text-lg font-lato-bold lg:text-[#2F2E2D]">
          with gratitude <br />
          Palak Dubey
        </p>
      </div>
      <div className="hidden lg:block absolute top-0 bottom-0 right-0">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/our+story/2.png"
          alt="2512 Sustainable - Planet Love - Clothes"
          width={650}
          height={650}
        />
      </div>
    </div>
  );
};

export default SectionFive;
