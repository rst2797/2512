// // import "swiper/css";
// // import "swiper/css/pagination";
// // import Image from "next/image";
// // import React, { useEffect, useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { MdOutlineStarPurple500 } from "react-icons/md";

// // export default function SectionThree({ sliderImages, rating, numberOfRatings }) {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   useEffect(() => {}, [currentSlide]);
// //   const handleSlideChange = (swiper) => {
// //     setCurrentSlide(0);
// //     setCurrentSlide(swiper.activeIndex);
// //   };
// //   return (
// //     <div className="relative px-[.945rem]">
// //       <Swiper
// //         slidesPerView={"auto"}
// //         centeredSlides={true}
// //         spaceBetween={5}
// //         loop={true}
// //         onSlideChange={handleSlideChange}
// //         className="mySwiper"
// //       >
//         // {sliderImages.map((image, index) => (
//         //   <SwiperSlide key={index}>
//         //     <Image
//         //       src={image}
//         //       alt={`2512 | carousel image ${index + 1}`}
//         //       width={400}
//         //       height={500}
//         //       className="object-cover relative z-30"
//         //     />
//         //   </SwiperSlide>
//         // ))}
// //       </Swiper>
// //       <span className="flex items-center bg-white max-w-fit p-1 rounded-md font-semibold drop-shadow-lg absolute bottom-8 right-6 z-40">
// //         {rating} <MdOutlineStarPurple500 className="text-[#FFD981]" /> |{" "}
// //         {numberOfRatings}
// //       </span>
// //     </div>
// //   );
// // }

// import "swiper/css";
// import "swiper/css/pagination";
// import Image from "next/image";
// import { Navigation } from "swiper/modules";
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { MdOutlineStarPurple500 } from "react-icons/md";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// export default function SectionThree({
// sliderImages,
// rating,
// numberOfRatings,
// }) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   useEffect(() => {}, [currentSlide]);
//   const handleSlideChange = (swiper) => {
//     setCurrentSlide(0);
//     setCurrentSlide(swiper.activeIndex);
//   };
//   return (
//     <div className="max-w-[40%] flex items-center ">
//       <Swiper
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         loop={true}
//         modules={[Navigation]}
//         className="mySwiper relative w-full flex justify-center"
//       >
//        {sliderImages.map((image, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={image}
//               alt={`2512 | carousel image ${index + 1}`}
//               width={1100}
//               height={1500}
//               className="object-cover rounded-3xl relative z-30"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// components/Carousel.js
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Carousel = ({ sliderImages, rating, numberOfRatings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex justify-around lg:px-12 pb-6">
      <div className="w-full object-cover relative">
        <div className="relative flex justify-center items-center py-4">
          <Swiper
            onSwiper={(it) => (sliderRef.current = it)}
            modules={[Navigation]}
            loop={true}
            className="relative w-full flex flex-row"
          >
            <div className="absolute inset-y-0 left-6 z-50 flex items-center">
              <button
                onClick={() => sliderRef.current?.slidePrev()}
                className="bg-[#A86549] text-white -ml-2 lg:-ml-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none"
              >
                <IoIosArrowRoundBack className="text-2xl" />
              </button>
            </div>
            {sliderImages.map((ele, index) => (
              <SwiperSlide key={index + 1}>
                <Image
                  src={ele}
                  alt={`2512 Exclusive Tee ${index + 1}`}
                  width={800}
                  height={1155}
                  placeholder="blur"
                  className="rounded-2xl"
                  blurDataURL="/images/placeholders/image.png"
                />
              </SwiperSlide>
            ))}
            <div className="absolute z-50 inset-y-0 right-6 flex items-center">
              <button
                onClick={() => sliderRef.current?.slideNext()}
                className="bg-[#A86549] text-white -mr-2 lg:-mr-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none"
              >
                <IoIosArrowRoundForward className="text-2xl" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;