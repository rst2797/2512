import React from "react";
import Cards from "../Category/ProductCards";

const SectionOne = ({ children, products }) => {
  return (
    <>
      {children}
      <div className="mx-auto max-w-[1450px]">
        <div className="py-[1.25rem] px-[.94rem] 2xl:px-20">
          <div className="pt-[6rem]">
            <h2 className="font-sansita-regular !text-[3rem] !font-[700]">
              T-shirt
            </h2>
          </div>
          <div className="pt-[2.5rem] pb-[3.75rem]">
            <Cards products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
