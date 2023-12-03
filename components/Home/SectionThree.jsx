// import React, { useState } from "react";
// import { useEffect } from "react";
// import Slider from "react-slick";

// const Fade = () => {
// const [currentSlide, setCurrentSlide] = useState(0);

//     const settings = {
//       dots: false,
//       fade: true,
//       infinite: true,
//       speed: 500,
//       arrows: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       afterChange: (current) => {
//         setCurrentSlide(current);
//       },
//     };

//   return (
//     <div className="p-6">
//       <Slider {...settings}>
// {sliderImages.map((image, index) => (
//   <div key={index}>
//     <Image
//       src={image}
//       alt={`2512 | carousel image ${index + 1}`}
//       width={400}
//       height={500}
//       className="object-cover"
//     />
//   </div>
// ))}
//       </Slider>
// <div
//   className="h-2 bg-[#A86549] rounded-full"
//   style={{
//     width: `${((currentSlide + 1) / sliderImages.length) * 100}%`,
//     transition: "width 0.3s ease",
//   }}
// />
// <div className="flex justify-end">
//   <p className="underline font-semibold">View All</p>
// </div>
//     </div>
//   );
// };

// export default Fade;

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { mans_collection } from "../../utils/products";
import Link from "next/link";

export default function SectionThree() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {}, [currentSlide]);
  const handleSlideChange = (swiper) => {
    setCurrentSlide(0);
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <div className="px-[.945rem]">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {mans_collection.map((ele, index) => (
          <SwiperSlide key={index}>
            <Image
              src={ele.image}
              alt={`2512 | carousel image ${index + 1}`}
              width={400}
              height={500}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="h-2 bg-[#A86549] rounded-full"
        style={{
          width: `${((currentSlide) / mans_collection.length) * 100}%`,
          transition: "width 0.3s ease",
        }}
      />
      <div className="flex justify-end py-[1.125rem]">
        <Link href="/shop/tshirt" className="font-semibold">
          <a className="underline">View All</a>
        </Link>
      </div>
    </div>
  );
}
