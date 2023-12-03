import React from "react";
import {wild_thought_purple} from "../../../utils/products"
import Slider from "../../shop/Slider";

const SimilarProducts = () => {
  return (
    <div className="py-[1.25rem]">
      <div>
        <p className="font-lato-regular !text-[1.125rem] text-[#2F2E2D]">
          You may also like
        </p>
        <h2 className="font-sansita-regular">Similars</h2>
      </div>
      <div className="pt-[2.5rem] pb-[3.75rem]">
        <Slider sliderImages={[...wild_thought_purple.images]}/>
      </div>
    </div>
  );
};

export default SimilarProducts;
