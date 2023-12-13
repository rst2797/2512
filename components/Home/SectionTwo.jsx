import Link from "next/link";
import React from "react";

const SectionTwo = () => {
  return (
    <div className="m-4">
      <h1 className="font-sansita-regular !text-4xl tracking-wide my-4">
        Empowering You & the Planet
      </h1>
      <p className="font-lato-regular !leading-5 !text-[16px] lg:text-2xl">
        <Link href="/our-story">
          <a>A story of sustainability, creativity, and craftsmanship.</a>
        </Link>
      </p>
    </div>
  );
};

export default SectionTwo;
