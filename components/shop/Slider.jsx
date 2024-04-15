import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

const getPresignedUrls = async (key, file) => {
  try {
    const res = await axios.get(
      `/api/get-profile-picture-signedurl/${key}/${file}`
    );

    return res.data.url;
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    throw error;
  }
};
export default function SectionThree() {
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/get-all-products").then(async (res) => {
      const products = await Promise.all(
        res.data.products.map(async (product) => {
          let images = [];

          await Promise.all(
            product.images.map(async (img) => {
              if (img.includes("https://s3")) {
                images.push(img);
              } else {
                const presigned = await getPresignedUrls("products-image", img);
                images.push(presigned);
              }
            })
          );

          return { ...product, images };
        })
      );
      setProductImages(products);
    });
  }, []);
  return (
    <div className="relative lg:px-[.945rem] cursor-pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".next-arrow",
          prevEl: ".prev-arrow",
        }}
        modules={[Navigation, Autoplay]}
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {productImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-lg lg:min-h-[64vh] lg:max-h-[65vh] relative"
          >
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
                <h3 className="font-sansita-regular !text-2xl lg:!text-[1rem] !leading-6 px-4">
                  {image.name.split("/")[0]}
                  <br />
                  {image.name.split("/")[1]}
                </h3>
                <h5 className="px-4 py-1 font-bold text-sm lg:absolute bottom-3">
                  ₹{image.price}
                </h5>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
