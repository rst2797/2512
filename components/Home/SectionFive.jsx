import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionFive = () => {
  return (
    <div className="relative">
      <video
        muted
        loop
        autoPlay={true}
        controls={false}
        className="object-cover h-[100vh] w-screen"
      >
        <source
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/video/kanso.mp4"
          type="video/mp4"
        />
      </video>
      <Link href="/kanso">
        <a className="absolute bottom-40 left-0 right-0 text-[#2F2E2D]">
          <h2 className="font-sansita-regular text-center drop-shadow-custom">Kanso</h2>
          <h2 className="font-sansita-regular text-center !text-[2rem] drop-shadow-custom">
            Our First Collection
          </h2>
          <p className="font-bold text-sm px-6 text-center drop-shadow-custom">
            Carefully curated collection of t-shirt made with organic cotton and
            minimal embroidery.
          </p>
        </a>
      </Link>
    </div>
  );
};

export default SectionFive;
