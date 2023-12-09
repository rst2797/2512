import Link from "next/link";
import React from "react";

const SectionFour = () => {
  return (
    <div className="bg-[#A86549] w-screen p-[1.875rem]">
      <h2 className="font-sansita-regular !text-[2.5rem] text-white">
        Why Choose Us?
      </h2>
      <h3 className="font-sansita-regular !text-[2.125rem] py-[0.9375rem] text-[#F4E9DF]">
        We are <br /> Fashion forward People centric <br />
        Planet loving
      </h3>
      <Link href="/sustainability">
        <a className="underline text-white my-4 text-[1rem]">Learn more</a>
      </Link>
    </div>
  );
};

export default SectionFour;
