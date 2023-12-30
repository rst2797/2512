import React, { memo, useEffect } from "react";
import Breadcrumb from "../common/breadcrumb";
import Navbar from "../common/header";
import Footer from "../common/footer";
import Carousel from "./carousel";
import SelectSize from "./SelectSize";
import SelectColor from "./SelectColor";
import DeliveryDetails from "./DeliveryDetails";
import SecurityDetails from "./SecurityDetails.jsx";
import SimilarProducts from "./SimilarProducts";
import Subscribe from "../Home/SectionSeven";
import Rating from "../common/RatingStars";
import FabricDetails from "./FabricDetails";

const ProductDetail = ({ product }) => {
  const setProductSize = (s) => {
    product.size = s;
  };
  useEffect(() => {}, [product]);
  return (
    <>
      <main className="bg-[#f2eadf] pt-[5rem] mx-auto max-w-[1450px]">
        <Navbar />
        <div className="container border-b-4 border-white px-[0.94rem] pt-8 grid grid-cols-2 gap-12">
          <div className="p-4">
            <Carousel
              sliderImages={[...product.images]}
              rating={product.rating}
              numberOfRatings={product.numberOfRatings}
            />
            <FabricDetails />
          </div>
          <div className="p-6 ml-12">
            <Breadcrumb name={product.breadcrumb} category={product.category} />
            <h2 className="!text-[1.5rem] text-[#2F2E2D] font-sansita-regular">
              {product.name}
            </h2>
            <div className="flex items-center pb-2">
              <h2 className="text-[1.125rem] font-lato-regular font-[800]">
                ₹{product.price}
              </h2>
              <small className="!text-[.85rem] ml-[0.75rem] font-lato-regular font-bold">
                <span className="line-through">{product.actualPrice}</span>{" "}
                <span className="font-bold text-[#FF0909]">
                  {product.offPercentage} OFF
                </span>
              </small>
            </div>
            <p className="font-bold flex items-center !text-[0.75rem]">
              4.5 &nbsp; <Rating /> &nbsp; 664 Ratings
            </p>
            <div>
              <SelectColor product={product} />
            </div>
            <SelectSize setProductSize={setProductSize} />
            <DeliveryDetails product={product} />
            <div>
              <p className="font-semibold w-[90%] py-10">
                Crafted from 100% organic cotton, our tee is incredibly soft and
                gentle on your skin. The relaxed fit is perfect for any
                occasion, whether you&apos;re lounging at home or out and about.
                And because it&apos;s gender neutral, it&apos;s a versatile
                addition to any wardrobe. The embroidery Live in the moment is a
                meaningful message for each of us to focus on the present rather
                than being anxious about the future.
              </p>
            </div>
            <div className="flex bg-[#A86549] rounded-2xl py-4 text-white w-[90%]">
              <SecurityDetails />
            </div>
          </div>
        </div>
        <SimilarProducts />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default memo(ProductDetail);
