import React from "react";
import Cards from "../Category/ProductCards";

const SectionOne = ({ children, products }) => {
  return (
    <>
      {children}
      <div className="py-[1.25rem] px-[.94rem]">
        <div className="pt-[6rem]">
          <p className="font-lato-regular !text-[1.125rem] text-[#2F2E2D]">
            Our
          </p>
          <h2 className="font-sansita-regular !text-[3rem] !font-[700]">T-shirt</h2>
        </div>
        <div className="pt-[2.5rem] pb-[3.75rem]">
          <Cards products={products} />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
