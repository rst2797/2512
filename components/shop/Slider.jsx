// import Image from "next/image";
// import React, { Component } from "react";
// import Slider from "react-slick";
// import { productSuggestion } from "../../utils/products";

// const MultipleItems = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     arrows: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div>
//       <Slider {...settings}>
//         {productSuggestion.map((ele) => (
//           <div className="text-center bg-white" key={ele.id}>
//             <Image src={ele.image} alt="Image 1" width={400} height={500} />
//             <h3 className="font-sansita-regular !text-[0.99131rem] !leading-[1.25rem] pt-4">
//               {ele.name}
//             </h3>
//             <p className="font-lato-regular !text-[0.99131rem] !leading-[1.25rem] pb-4">
//               {ele.price}
//             </p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
// export default MultipleItems;

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { mans_collection } from "../../utils/products";
import { MdOutlineStarPurple500 } from "react-icons/md";
import axios from "axios";
import { InfinitySpin, MutatingDots } from "react-loader-spinner";

export default function SectionThree() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/get-all-products").then((res) => {
      setProductImages([...res.data.products]);
    });
  }, []);
  useEffect(() => {}, [currentSlide]);
  const handleSlideChange = (swiper) => {
    setCurrentSlide(0);
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <div className="relative px-[.945rem]">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.images[1]}
              alt={`2512 | carousel image ${index + 1}`}
              width={400}
              height={500}
              className="object-cover"
              onLoad={() => setLoading(false)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {loading && (
        <div className="h-[500px] flex justify-center items-center">
          <InfinitySpin width="200" color="#A86549" />
        </div>
      )}
      {/* {rating && (
        <span className="flex items-center bg-white max-w-fit p-1 rounded-md font-semibold drop-shadow-lg absolute bottom-8 right-6">
          {rating} <MdOutlineStarPurple500 className="text-[#FFD981]" /> |{" "}
          {numberOfRatings}
        </span>
      )} */}
    </div>
  );
}
