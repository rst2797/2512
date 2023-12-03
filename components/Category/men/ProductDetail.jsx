import React, { memo } from "react";
import Breadcrumb from "../common/breadcrumb";
import Navbar from "../common/header";
import Footer from "../common/footer";
import Carousel from "./Carousel";
import SelectSize from "./SelectSize";
import SelectColor from "./SelectColor";
import DeliveryDetails from "./DeliveryDetails";
import SecurityDetails from "./SecurityDetails.jsx";
import SimilarProducts from "./SimilarProducts";
import Subscribe from "../Home/SectionSeven";

const ProductDetail = ({ product }) => {
  return (
    <main className="bg-[#f2eadf] ">
      <Navbar />
      <div className="container border-b-4 border-white px-[0.94rem]">
        <Breadcrumb name={product.name} category={product.category} />
        <Carousel
          sliderImages={[...product.images]}
          rating={product.rating}
          numberOfRatings={product.numberOfRatings}
        />
        <h2 className="pt-[2.5rem] text-[1.125rem] text-[#2F2E2D] font-lato-regular !font-[400]">
          {product.name}
        </h2>
        <div className="flex items-center">
          <h2 className="text-[1.125rem] font-lato-regular font-[800]">{product.price}</h2>
          <small className="!text-[.75rem] ml-[0.75rem] font-lato-regular">
            <span className="line-through">{product.actualPrice}</span>{" "}
            <span className="font-semibold text-[#49AC56]">{product.offPercentage} OFF</span>
          </small>
        </div>
        <p className="font-lato-regular !font-[300] !text-[0.75rem]">
          Incl of taxes
        </p>
      </div>
      <SelectColor product={product} />
      <SelectSize />
      <DeliveryDetails />
      <SecurityDetails />
      <SimilarProducts />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default memo(ProductDetail);
