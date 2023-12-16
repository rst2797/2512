import Image from "next/image";
import React from "react";

const SectionSix = () => {
  return (
    <div className="bg-[#f2eadf] p-4 lg:px-48 flex flex-col justify-center items-center lg:flex-row lg:justify-between">
      <div>
        <h2 className="font-sansita-regular !text-[2.5rem] lg:!text-[3.5rem] text-center">
          @pacchisbarah
        </h2>
        <p className="text-center py-2 font-semibold text-sm lg:text-lg lg:py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Image
        src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/Frame 142.png"
        alt=""
        width={400}
        height={600}
      />
      {/* <div className="relative">
        <div className="grid grid-cols-3 ">
          <div className="bg-blue-800 p-24 border-2 border-gray-400">
            <Image
              src="https://www.instagram.com/p/CtTx_cXMJqK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              alt="2512 Instagram For Fashion Centric You"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-blue-600 p-24 border-2 border-gray-400">
            <Image
              src="https://www.instagram.com/p/CtTx_cXMJqK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              alt="2512 Instagram For Fashion Centric You"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-blue-500 p-24 border-2 border-gray-400">
            <Image
              src="https://www.instagram.com/p/CtTx_cXMJqK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              alt="2512 Instagram For Fashion Centric You"
              width={500}
              height={500}
            />
          </div>
          <div className="col-span-2 bg-blue-300 p-24 border-2 border-gray-400">
            <Image
              src="https://www.instagram.com/p/CtTx_cXMJqK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              alt="2512 Instagram For Fashion Centric You"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-blue-700 p-24 border-2 border-gray-400">
            <Image
              src="https://www.instagram.com/p/CtTx_cXMJqK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              alt="2512 Instagram For Fashion Centric You"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-blue-700 p-24 border-2 border-gray-400">
            <Image
              src="https://www.instagram.com/p/CtTx_cXMJqK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              alt="2512 Instagram For Fashion Centric You"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-blue-400 p-24 border-2 border-gray-400">
            <Image
              src="https://www.instagram.com/p/CtTx_cXMJqK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              alt="2512 Instagram For Fashion Centric You"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-blue-900 p-24 border-2 border-gray-400">
            <Image
              src="https://www.instagram.com/p/CtTx_cXMJqK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              alt="2512 Instagram For Fashion Centric You"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SectionSix;
