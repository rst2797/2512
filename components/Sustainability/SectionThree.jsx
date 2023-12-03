import React from "react";
import { TbPlant2 } from "react-icons/tb";
import { BsBox2Heart } from "react-icons/bs";
import { LiaTshirtSolid } from "react-icons/lia";
import { FaHandHoldingHeart } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className="px-[1.88rem] py-4 bg-[#A86549]  text-white flex flex-wrap justify-between">
      <div className="flex items-center justify-center">
        <TbPlant2 className="text-5xl font-light my-6 mx-2" />
        <div>
          <h2 className="font-sansita-regular !text-[1.3rem] !leading-7">Certified Organic fabrics</h2>
          <h2 className="uppercase text-xs font-bold">for an eco-friendly fashion statement</h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <FaHandHoldingHeart className="text-[2.5rem] font-light my-6 mx-2" />
        <div>
          <h2 className="font-sansita-regular !text-[1.25rem] !leading-7">Sustainablility at every step -</h2>
          <h2 className="uppercase text-xs font-bold">from sourcing to packaging</h2>
        </div>
      </div>
      <div className="flex items-center">
        <LiaTshirtSolid className="text-[2.5rem] font-light my-6 mx-2" />
        <div>
          <h2 className="font-sansita-regular !text-[1.25rem] !leading-7">fashio that&apos;sinclusive</h2>
          <h2 className="uppercase text-xs font-bold">gender-neutral and non-seasonal</h2>
        </div>
      </div>
      <div className="flex items-center">
        <BsBox2Heart className="text-[2.5rem] font-light my-6 mx-2" />
        <div>
          <h2 className="font-sansita-regular !text-[1.25rem] !leading-7">Thoughtful packaging</h2>
          <h2 className="uppercase text-xs font-bold">for a greener tomorrow</h2>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
