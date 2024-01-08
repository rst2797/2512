import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useRef } from "react";

const SectionThree = () => {
  const sliderRef = useRef();

  return (
    <div className="px-4 py-12 bg-[#F4E9DF]">
      <div className="mx-auto max-w-[1450px]">
        <h3 className="font-sansita-regular text-center">Digital Catalogue</h3>
        <p className="py-3 text-xl font-semibold font-lato-regular text-center text-[#2F2E2D]">
          Sustainability meets Artificial Intelligence
        </p>{" "}
        <div className="bg-white rounded-lg p-12 lg:mx-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="py-4 font-bold text-xl px-12 text-center lg:text-start">
              Kanso <br className="hidden lg:block" /> by{" "}
              <br className="hidden lg:block" /> Pacchis Barah
            </div>
            <div className="py-4 font-bold text-xl lg:px-48 border-y-[1px] lg:border-x-[1px] lg:border-y-[0px] border-black text-center lg:text-start">
              GOTS Certified <br className="hidden lg:block" /> 100% Organic{" "}
              <br className="hidden lg:block" /> Cotton T-shirts
            </div>
            <div className="py-4 font-bold text-xl px-12 text-center lg:text-start">
              Relaxed Fit <br className="hidden lg:block" /> Single Jersey{" "}
              <br className="hidden lg:block" /> 200GSM
            </div>
          </div>
          <div className="relative flex justify-center items-center -ml-24 py-4">
            <Swiper
              onSwiper={(it) => (sliderRef.current = it)}
              modules={[Navigation]}
              loop={true}
              className="relative w-10/12 mx-auto flex flex-row"
            >
              <div className="absolute inset-y-0 left-16 z-50 flex items-center">
                <button
                  onClick={() => sliderRef.current?.slidePrev()}
                  className="bg-[#A86549] text-white -ml-2 lg:-ml-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none"
                >
                  <IoIosArrowRoundBack className="text-2xl" />
                </button>
              </div>
              <SwiperSlide className="pl-28">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/kanso/Group+203.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
              </SwiperSlide>
              <SwiperSlide className="pl-28">
                <Image
                  src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/kanso/Group+203.png"
                  alt=""
                  width={1000}
                  height={1000}
                />
              </SwiperSlide>
            </Swiper>
            <div className="absolute z-50 inset-y-0 right-16 flex items-center">
              <button
                onClick={() => sliderRef.current?.slideNext()}
                className="bg-[#A86549] text-white -mr-2 lg:-mr-4 flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none"
              >
                <IoIosArrowRoundForward className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
