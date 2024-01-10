import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { useEffect } from "react";

export default function Carousel({ blogs, activeSlide, setActiveSlide }) {
  useEffect(() => {
    console.log(activeSlide);
  }, [activeSlide]);
  const blogSlider = [
    {
      id: 1,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/blog/Mask+group.png",
    },
    {
      id: 2,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/blog/Mask+group.png",
    },
    {
      id: 3,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/blog/Mask+group.png",
    },
    {
      id: 4,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/blog/Mask+group.png",
    },
    {
      id: 5,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/blog/Mask+group.png",
    },
  ];
  return (
    <div className="">
      <Swiper
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        initialSlide={activeSlide}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="mySwiper relative"
      >
        {blogs.blogs.map((item) => (
          <SwiperSlide key={item.id} className="text-center ">
            <Image src={item.image} alt={item.alt} width={500} height={550} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
