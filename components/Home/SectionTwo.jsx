import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules

const SectionTwo = ({ products }) => {
  const [slideCheck, setSlideCheck] = useState(0);
  return (
    <div className="h-auto lg:h-[92vh] bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group.png')] py-4 flex flex-col-reverse lg:flex-row gap-8 items-center w-full">
      <div className="lg:max-w-[65vw] max-w-[90vw] lg:-ml-48">
        <Swiper
          onSlideChange={(value) => setSlideCheck(value.activeIndex)}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {products?.map((ele) => (
            <SwiperSlide key={ele._id}>
              <Link href={`/collection/${ele._id}`}>
                <a>
                  <Image
                    src={ele.images[0]}
                    alt={ele.breadcrumb}
                    width={450}
                    height={550}
                    placeholder="blur"
                    blurDataURL="/images/placeholders/image.png"
                    className="rounded-xl drop-shadow-xl w-full lg:w-auto"
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="m-4 flex flex-col items-end justify-center">
        <h1 className="font-sansita-regular text-center lg:text-start !text-[2.5rem] tracking-wide my-4 lg:mb-0 mt-0 lg:w-[36.1875rem] lg:!text-[4rem] lg:!leading-[4.5rem] lg:text-[#2F2E2D]">
          Empowering You <br className="hidden lg:block" />& the Planet
        </h1>
        <p className="font-lato-regular text-center lg:text-start !leading-5 lg:text-[1.75rem] w-full lg:text-[#2F2E2D] lg:pt-[1rem]">
          <Link href="/our-story">
            <a className="leading-8">
              A story of sustainability, creativity, and{" "}
              <br className="hidden lg:block" /> craftsmanship.
            </a>
          </Link>
        </p>

        <span className="flex justify-center lg:justify-start w-full mt-[2rem] ">
          <Link href="/our-story">
            <a className="rounded-xl bg-[#A86549] text-white py-[0.875rem] px-[1.25rem] text-[.75rem] font-bold flex items-center w-fit">
              Learn more &nbsp; <IoArrowForward />
            </a>
          </Link>
        </span>
        <div className="w-full mt-12 hidden lg:flex justify-between">
          <div className="w-fit flex justify-between">
            <input
              type="radio"
              className="mx-1 focus:ring-[#A86549] active:ring-[#A86549] ring-[#A86549] ring-opacity-50"
              checked={slideCheck === 0}
            />
            <input
              type="radio"
              className="mx-1 focus:ring-[#A86549] active:ring-[#A86549] ring-[#A86549] ring-opacity-50"
              checked={slideCheck === 1}
            />
            <input
              type="radio"
              className="mx-1 focus:ring-[#A86549] active:ring-[#A86549] ring-[#A86549] ring-opacity-50"
              checked={slideCheck === 2}
            />
            <input
              type="radio"
              className="mx-1 focus:ring-[#A86549] active:ring-[#A86549] ring-[#A86549] ring-opacity-50"
              checked={slideCheck === 3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
