import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";

export default function Carousel({ blogs, activeSlide, setActiveSlide }) {
  const [blogSlider, setBlogSlider] = useState([]);

  const fetchPreSignedUrls = async () => {
    const promises = blogs.blogs.map(async (blog) => {
      const res = await axios.get(
        `/api/get-profile-picture-signedurl/blogs-thumbnail/${blog.image}`
      );
      return res.data.url;
    });

    Promise.all(promises)
      .then((urls) => {
        setBlogSlider(urls);
      })
      .catch((error) => {
        console.error("Error fetching pre-signed URLs:", error);
      });
  };

  useEffect(() => {
    if (blogs.blogs.length > 0 && blogSlider.length === 0) {
      fetchPreSignedUrls();
    }
  }, [blogs.blogs, blogSlider]);

  return (
    <div className="">
      {blogSlider.length > 0 && (
        <Swiper
          loop={false}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          initialSlide={activeSlide}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex);
          }}
          className="mySwiper relative"
        >
          {blogSlider.map((url, index) => (
            <SwiperSlide key={index} className="text-center ">
              <Image
                src={url}
                alt={`Blog Image ${index + 1}`}
                width={500}
                height={550}
                className="rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
