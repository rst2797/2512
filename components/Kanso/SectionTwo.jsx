import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const SectionTwo = () => {
  return (
    <div className="bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/kanso/Mask+group.png')] lg:bg-[#F4E9DF]">
      <div className="mx-auto max-w-[1450px]  lg:flex justify-between items-center w-full px-4 lg:px-20 py-24">
        <div className="lg:w-[40%] text-white">
          <h2 className="font-sansita-regular !text-center !lg:text-left !leading-[4rem] py-4">
            Where Simplicity Inspires Serenity{" "}
          </h2>
          <div className="bg-[#F4E9DF] rounded-full w-[360px] lg:w-[320px] lg:h-[100%] py-20 lg:py-8 mt-12">
            <div className="text-[#2F2E2D] text-center pb-1">
              <h2 className="text-xl font-semibold">KAN</h2>
              <h4 className=" tracking-wide">Simplicity</h4>
            </div>
            <div className="text-[#2F2E2D] text-center flex flex-col items-center py-1">
              <h2 className="text-xl font-semibold">SO</h2>
              <h4 className=" tracking-wide">elimination/removal</h4>
              <div className="border-b-2 border-black w-[30px] mt-2 lg:mt-8" />
            </div>
            <div className="text-[#2F2E2D] text-center pb-1">
              <h2 className="text-xl font-semibold">KANSO</h2>
              <h4 className="px-20 tracking-wide">
                simplicity, purity, and a sense of tranquility
              </h4>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] hidden lg:block text-white">
          <p className="py-3 !text-lg font-lato-regular !font-semibold">
            Kanso, a timeless Japanese aesthetic, celebrates simplicity, purity,
            and the serenity that comes from leading an uncluttered life.
          </p>{" "}
          <p className="py-3 !text-lg font-lato-regular !font-semibold">
            At Pacchis Barah, we&apos;ve embodied the essence of Kanso in our
            first collection, Organic tees, crafted with care in soothing
            neutral and earthy colours. These gender-neutral, relaxed-fit
            t-shirt are designed with minimalism in mind, using GOTS certified
            organic cotton as the main fabric for lasting comfort.
          </p>{" "}
          <p className="py-3 !text-lg font-lato-regular !font-semibold">
            However, our commitment to sustainability doesn&apos;t stop there.
            We&apos;ve removed unnecessary labels and plastic from our
            packaging, reducing our environmental footprint. Experience the
            power of minimal yet meaningful embroidery, reminding you to live in
            the present and find happiness in life&apos;s simplest pleasures.{" "}
          </p>
          <p className="py-3 !text-lg font-lato-regular !font-semibold">
            Beyond fashion, &ldquo;Kanso&rdquo; aims to inspire clarity, focus,
            and peace by simplifying surroundings and letting go of
            distractions. Join us in embracing a mindful lifestyle, where
            tranquility awaits in every aspect of life
          </p>
        </div>
        <div className="lg:w-[60%] lg:hidden flex flex-col items-center text-white">
          <p className="py-3 !text-lg font-lato-regular !font-semibold">
            Kanso, a timeless Japanese aesthetic, celebrates simplicity, purity,
            and the serenity that comes from leading an uncluttered life. At
            Pacchis Barah, we&apos;ve embodied the essence of Kanso in our first
            collection, ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
