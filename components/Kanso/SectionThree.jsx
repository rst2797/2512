import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <div className="px-4 py-12 bg-[#F4E9DF]">
      <h3 className="font-sansita-regular text-center">Digital Catalogue</h3>
      <p className="py-3 text-xl font-semibold font-lato-regular text-center text-[#2F2E2D]">
        Sustainability meets Artificial Intelligence
      </p>{" "}
      <div className="bg-white rounded-lg p-12 mx-20">
        <div className="flex justify-between">
          <div className="font-bold text-xl px-12">Kanso <br /> by <br /> Pacchis Barah</div>
          <div className="font-bold text-xl px-48 border-x-[1px] border-black">
            GOTS Certified <br /> 100% Organic <br /> Cotton T-shirts
          </div>
          <div className="font-bold text-xl px-12">
            Relaxed Fit <br /> Single Jersey <br /> 200GSM
          </div>
        </div>
        <div className="p-8 flex">
        
          <Image src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/kanso/Group+203.png" alt="" width={1500} height={1500}/>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
