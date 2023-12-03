import Link from "next/link";
import React from "react";

const SectionFour = () => {
  return (
    <div className="bg-[#A86549] w-screen py-6 px-4">
      <h2 className="font-sansita-regular !text-[2rem] text-white px-4 py-4">Why Choose Us?</h2>
      <h3 className="font-sansita-regular !text-3xl text-[#F4E9DF] px-4">We are <br/> Fashion forward People centric <br/>Planet loving</h3>
      <Link href="/sustainability">
          <a className="underline text-white px-4 my-4 text-[1rem]">Learn more</a>
        </Link>
    </div>
  );
};

export default SectionFour;
