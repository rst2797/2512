import Image from "next/image";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Fade = ({ sliderImages, rating, numberOfRatings }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <div className="relative">
      <Slider {...settings}>
        {isLoading && (
          <div className="absolute top-52 left-48 right-0 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="loader ease-linear rounded-full animate-spin border-t-2 border-[#A86549] h-14 w-14"/>
          </div>
        )}
        {sliderImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={400}
              height={700}
              priority={true}
              onLoadingComplete={handleImageLoad}
              onLoadingError={handleImageError}
            />
          </div>
        ))}
      </Slider>
      <span className="flex items-center bg-white max-w-fit p-1 rounded-md font-semibold drop-shadow-lg absolute bottom-8 right-6">
        {rating} <MdOutlineStarPurple500 className="text-[#FFD981]" /> |{" "}
        {numberOfRatings}
      </span>
    </div>
  );
};

export default Fade;
