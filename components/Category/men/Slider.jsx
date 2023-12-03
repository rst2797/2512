import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { productSuggestion } from "../../utils/products";

const MultipleItems = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {productSuggestion.map((ele) => (
          <div className="text-center bg-white" key={ele.id}>
            <Image src={ele.image} alt="Image 1" width={400} height={500} />
            <h3 className="font-sansita-regular !text-[0.99131rem] !leading-[1.25rem] pt-4">
              {ele.name}
            </h3>
            <p className="font-lato-regular !text-[0.99131rem] !leading-[1.25rem] pb-4">
              {ele.price}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MultipleItems;
