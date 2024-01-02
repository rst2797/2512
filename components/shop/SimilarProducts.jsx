import React from "react";
import {live_in_moment_tshirt_black} from "../../utils/products"
import Slider from "./Slider";

const SimilarProducts = () => {
  return (
    <div className="py-[1.25rem] px-[0.94rem] 2xl:px-20 mx-auto max-w-[1450px]">
      <div>
        <h2 className="font-sansita-regular !text-4xl">You may also like</h2>
      </div>
      <div className="pt-[2.5rem] pb-[3.75rem]">
        <Slider sliderImages={[...live_in_moment_tshirt_black.images]}/>
      </div>
    </div>
  );
};

export default SimilarProducts;
