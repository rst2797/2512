import React from "react";

const SectionTwo = () => {
  return (
    <div className="bg-[#A86549] lg:bg-[#F4E9DF] lg:flex justify-between items-center w-full -mt-2 lg:-mt-8 px-4 lg:px-20 py-24">
      <div className="w-[40%]">
        <h2 className="font-sansita-regular py-4">
          Where Simplicity Inspires Serenity{" "}
        </h2>
        <div className="border-2 boder-white lg:border-black rounded-full w-[350px] h-[100%] py-8">
          <div className="text-white lg:text-black text-center py-3">
            <h2 className="text-2xl font-semibold">KAN</h2>
            <h4 className=" tracking-wide">Simplicity</h4>
          </div>
          <div className="text-white lg:text-black text-center flex flex-col items-center py-3">
            <h2 className="text-2xl font-semibold">SO</h2>
            <h4 className=" tracking-wide">elimination/removal</h4>
            <div className="border-b-2 boder-white w-[30px] mt-8" />
          </div>
          <div className="text-white lg:text-black text-center py-3">
            <h2 className="text-2xl font-semibold">KANSO</h2>
            <h4 className="px-20 tracking-wide">
              simplicity, purity, and a sense of tranquility
            </h4>
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <p className="py-3 !text-lg font-lato-regular text-[#2F2E2D]">
          Kanso, a timeless Japanese aesthetic, celebrates simplicity, purity,
          and the serenity that comes from leading an uncluttered life.
        </p>{" "}
        <p className="py-3 !text-lg font-lato-regular text-[#2F2E2D]">
          At Pacchis Barah, we&apos;ve embodied the essence of Kanso in our
          first collection, Organic tees, crafted with care in soothing neutral
          and earthy colours. These gender-neutral, relaxed-fit t-shirt are
          designed with minimalism in mind, using GOTS certified organic cotton
          as the main fabric for lasting comfort.
        </p>{" "}
        <p className="py-3 !text-lg font-lato-regular text-[#2F2E2D]">
          However, our commitment to sustainability doesn&apos;t stop there.
          We&apos;ve removed unnecessary labels and plastic from our packaging,
          reducing our environmental footprint. Experience the power of minimal
          yet meaningful embroidery, reminding you to live in the present and
          find happiness in life&apos;s simplest pleasures.{" "}
        </p>
        <p className="py-3 !text-lg font-lato-regular text-[#2F2E2D]">
          Beyond fashion, &ldquo;Kanso&rdquo; aims to inspire clarity, focus,
          and peace by simplifying surroundings and letting go of distractions.
          Join us in embracing a mindful lifestyle, where tranquility awaits in
          every aspect of life
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
