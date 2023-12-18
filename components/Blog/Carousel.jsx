import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function Carousel() {
  const blogSlider = [
    {
      id: 1,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/Blog/1.png",
      title: "Digital Catalogue",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/Blog/2.png",
      title: "Digital Catalogue",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/Blog/3.png",
      title: "Digital Catalogue",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/Blog/4.png",
      title: "Digital Catalogue",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      image:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/Blog/5.png",
      title: "Digital Catalogue",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div className="max-w-[40%] min-h-[70vh] flex items-center ">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        modules={[Navigation]}
        className="mySwiper relative"
      >
        {blogSlider.map((item) => (
          <SwiperSlide key={item.id} className="text-center ">
            <Image src={item.image} alt={item.title} width={500} height={550} />
            <div className="absolute bottom-1 left-0 w-[92%] h-[40%] bg-[#0007] mx-[1.4rem] rounded-b-2xl">
              <h2 className="font-sansita-regular !text-4xl pt-4 text-center text-white">
                {item.title}
              </h2>
              <div className="swiper-button-next">
                <IoIosArrowRoundForward className="text-black bg-white rounded-full !w-[170px]" />
              </div>
              <div className="swiper-button-prev">
                <IoIosArrowRoundBack className="text-black bg-white rounded-full !w-[170px]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
