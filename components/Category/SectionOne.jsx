import React from "react";
import Cards from "./ProductCards.jsx";

const SectionOne = ({ children }) => {
  return (
    <>
      {children}
      <div className="py-[1.25rem] px-[.94rem]">
        <div className="pt-[4rem]">
          <p className="font-lato-regular !text-[1.125rem] text-[#2F2E2D]">
            for the
          </p>
          <h2 className="font-sansita-regular !text-[3rem] !font-[700]">Man</h2>
        </div>
        <div className="pt-[2.5rem] pb-[3.75rem]">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
