import Image from "next/image";
import React from "react";

const SectionSix = () => {
  return (
    <div className="bg-[#f2eadf]  px-[0.94rem]   2xl:px-20 2xl:flex justify-center flex-col  ">
      <h2 className="font-sansita-regular !text-[2.5rem] text-center py-[2rem]">
        @pacchisbarah
      </h2>
      <div className="2xl:max-w-full py-4 flex justify-center">
      <Image src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/Frame+142.png" alt="" width={400} height={600} />
      </div>
    </div>
  );
};

export default SectionSix;
