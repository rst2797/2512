import React from "react";

const SectionTwo = () => {
  return (
    <div className="bg-[#A86549] text-white py-[1.13rem] px-[.94rem]">
      <h5>all exclusive</h5>
      <h2 className="font-sansita-regular">Offers</h2>

      <h5 className="py-[.94rem] font-lato-regular !font-[400] !text-[0.875rem]">
        Etiam in nibh vitae elit eleifend mattis. Nulla pretium{" "}
      </h5>
      <form action="" className="text-black flex pb-[1rem]">
        <input
          type="text"
          defaultValue={466001}
          className="w-[12.125rem] h-[2.5625rem] py-[0.8125rem] px-[1rem]"
        />
        <button className="text-[#A86549] bg-[#F4E9DF] font-lato-regular !text-[1.125rem] !font-[700] py-[0.6875rem] px-[0.625rem] w-[8.5rem] h-[2.5625rem]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SectionTwo;
