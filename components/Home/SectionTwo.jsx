import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SectionTwo = ({ products }) => {
  const [slideCheck, setSlideCheck] = useState(0);
  useEffect(() => {
    if (slideCheck > 2) {
      setTimeout(() => {
        setSlideCheck(0);
      }, 2500);
    }
  }, [slideCheck]);
  return (
    <div className="h-auto lg:h-[92vh] bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group.png')] py-4 flex flex-col-reverse lg:flex-row gap-8 items-center w-full">
      <div className="lg:max-w-[65vw] max-w-[90vw] lg:-ml-10">
        <Swiper
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
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
                    src={ele.images[1]}
                    alt={ele.breadcrumb}
                    width={500}
                    height={675}
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
      <div className="m-4 mt-32 flex flex-col justify-center">
        <p className="font-lato-regular text-center lg:text-start !leading-7 lg:text-[1rem] font-semibold lg:w-[60%] lg:text-[#2F2E2D] lg:pt-[1rem]">
          Carefully curated collection of T-shirt made with GOTS certified 200
          GSM Organic Cotton
        </p>

        <span className="flex justify-center lg:justify-start w-full mt-[2rem] ">
          <Link href="/shop/tshirt">
            <a className="rounded-xl bg-[#A86549] text-white py-[0.875rem] px-[1.25rem] text-[.75rem] font-bold flex items-center w-fit">
              Shop Now &nbsp; <IoArrowForward />
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SectionTwo;
