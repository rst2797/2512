import Image from "next/image";
import React from "react";

const SectionSix = () => {
  return (
    <div className="bg-[#f2eadf] p-4">
      <h2 className="font-sansita-regular !text-[2.5rem] text-center">
        @pacchisbarah
      </h2>
      <p className="text-center py-2 font-semibold text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Image src="/images/Frame 142.png" alt="" width={400} height={600} />
    </div>
  );
};

export default SectionSix;
