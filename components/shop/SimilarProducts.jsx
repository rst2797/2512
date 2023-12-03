import React from "react";
import {live_in_moment_tshirt_black} from "../../utils/products"
import Slider from "./Slider";

const SimilarProducts = () => {
  return (
    <div className="py-[1.25rem] px-[0.94rem]">
      <div>
        <p className="font-lato-regular !text-[1.125rem] text-[#2F2E2D]">
          You may also like
        </p>
        <h2 className="font-sansita-regular">Similars</h2>
      </div>
      <div className="pt-[2.5rem] pb-[3.75rem]">
        <Slider sliderImages={[...live_in_moment_tshirt_black.images]}/>
      </div>
    </div>
  );
};

export default SimilarProducts;
