import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

export default function SectionThree() {
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/get-all-products").then((res) => {
      setProductImages([...res.data.products]);
      console.log([...res.data.products])
    });
  }, []);
  return (
    <div className="relative lg:px-[.945rem] cursor-pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.next-arrow',
          prevEl: '.prev-arrow',
        }}
        modules={[Navigation]} 
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index} className="bg-white rounded-lg">
            <Link href={`/collection/${image._id}`}>
              <a>
                <Image
              src={image.images[1]}
              alt={`2512 | carousel image ${index + 1}`}
              width={600}
              height={800}
              className="object-cover rounded-t-lg"
              onLoad={() => setLoading(false)}
            />
            <h3 className="font-sansita-regular !text-2xl lg:!text-[1rem] !leading-6 px-4">{image.name}</h3>
            <h5 className="px-4 py-1 font-bold text-sm">₹{image.actualPrice}</h5>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
