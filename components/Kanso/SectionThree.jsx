import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <div className="px-4 py-12 bg-[#F4E9DF]">
      <h3 className="font-sansita-regular text-center">Digital Catalogue</h3>
      <p className="py-3 text-xl font-semibold font-lato-regular text-center text-[#2F2E2D]">
        Sustainability meets Artificial Intelligence
      </p>{" "}
      <div className="bg-white rounded-lg p-12 lg:mx-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="py-4 font-bold text-xl px-12 text-center lg:text-start">
            Kanso <br className="hidden lg:block" /> by{" "}
            <br className="hidden lg:block" /> Pacchis Barah
          </div>
        <div className="py-4 font-bold text-xl lg:px-48 border-y-[1px] lg:border-x-[1px] lg:border-y-[0px] border-black text-center lg:text-start">
            GOTS Certified <br className="hidden lg:block" /> 100% Organic{" "}
            <br className="hidden lg:block" /> Cotton T-shirts
          </div>
          <div className="py-4 font-bold text-xl px-12 text-center lg:text-start">
            Relaxed Fit <br className="hidden lg:block" /> Single Jersey{" "}
            <br className="hidden lg:block" /> 200GSM
          </div>
        </div>
        <div className="lg:p-8 hidden lg:flex">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/kanso/Group+203.png"
            alt=""
            width={1500}
            height={1500}
          />
        </div>
        <div className="lg:p-8 flex ">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/kanso/Group+203.png"
            alt=""
            width={1500}
            height={1500}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
