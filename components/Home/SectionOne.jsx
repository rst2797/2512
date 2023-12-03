import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionOne = () => {
  return (
    <div className="relative z-20">
      <Image
        src="/images/home_header.png"
        alt=""
        width={900}
        height={1800}
        className="object-fit w-screen min-h-screen"
      />

      <div className="px-[0.94rem] absolute z-20 top-[26rem] left-0 right-0 drop-shadow-custom text-center">
        <h1 className="font-sansita-regular my-4 drop-shadow-lg">Sustainable. Beautiful.</h1>
        <p className="font-bold drop-shadow-lg">
          A collection that embodies the concept of simplicity{" "}
          <Link href="/kanso">
          <a className="underline">Learn more</a>
        </Link>
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
