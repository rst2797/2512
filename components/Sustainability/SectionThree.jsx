import React from "react";
import { TbPlant2 } from "react-icons/tb";
import { BsBox2Heart } from "react-icons/bs";
import { LiaTshirtSolid } from "react-icons/lia";
import { FaHandHoldingHeart } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className="lg:flex justify-center items-center lg:h-[60vh]">
      <div className="px-[1.88rem] lg:w-[70%] py-4 bg-[#A86549] lg:bg-transparent  text-white flex flex-wrap justify-between lg:justify-around">
        <div className="flex items-center justify-center bg-[#A86549] lg:flex-col lg:text-center lg:justify-center lg:p-4 lg:rounded-lg lg:h-[200px] lg:w-[230px] my-4">
          <TbPlant2 className="text-5xl font-light my-6 mx-2" />
          <div>
            <h2 className="font-sansita-regular !text-[1.3rem] lg:!text-[.85rem] !leading-7">
              Certified Organic fabrics
            </h2>
            <h2 className="uppercase text-xs lg:text-[.5rem] font-bold">
              for an eco-friendly fashion statement
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#A86549] lg:flex-col lg:text-center lg:justify-center lg:p-4 lg:rounded-lg lg:h-[200px] lg:w-[230px] my-4">
          <FaHandHoldingHeart className="text-[2.5rem] font-light my-6 mx-2" />
          <div>
            <h2 className="font-sansita-regular !text-[1.25rem] lg:!text-[.85rem] !leading-7">
              Sustainablility at every step -
            </h2>
            <h2 className="uppercase text-xs lg:text-[.5rem]  font-bold">
              from sourcing to packaging
            </h2>
          </div>
        </div>
        <div className="flex items-center bg-[#A86549] lg:flex-col lg:text-center lg:justify-center lg:p-4 lg:rounded-lg lg:h-[200px] lg:w-[230px] my-4">
          <LiaTshirtSolid className="text-[2.5rem] font-light my-6 mx-2" />
          <div>
            <h2 className="font-sansita-regular !text-[1.25rem] lg:!text-[.85rem] !leading-7">
              fashio that&apos;sinclusive
            </h2>
            <h2 className="uppercase text-xs lg:text-[.5rem] font-bold">
              gender-neutral and non-seasonal
            </h2>
          </div>
        </div>
        <div className="flex items-center bg-[#A86549] lg:flex-col lg:text-center lg:justify-center lg:p-4 lg:rounded-lg lg:h-[200px] lg:w-[230px] my-4">
          <BsBox2Heart className="text-[2.5rem] font-light my-6 mx-2" />
          <div>
            <h2 className="font-sansita-regular !text-[1.25rem] lg:!text-[.85rem] !leading-7">
              Thoughtful packaging
            </h2>
            <h2 className="uppercase text-xs lg:text-[.5rem] font-bold">
              for a greener tomorrow
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
