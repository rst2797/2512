import React, { memo } from "react";
import Breadcrumb from "../common/breadcrumb";
import Navbar from "../common/header";
import Footer from "../common/footer";
import Carousel from "./men/Carousel";
import SelectSize from "./men/SelectSize";
import DeliveryDetails from "./men/DeliveryDetails";
import SecurityDetails from "./men/SecurityDetails.jsx";
import SimilarProducts from "./men/SimilarProducts";
import SectionThree from "../Category/SectionThree.jsx";
import Offer from "../Category/SectionTwo.jsx";


const ProductDetail = ({ product }) => {
  return (
    <>
      <main className="bg-[#f2eadf] px-[0.94rem]">
        <div className="container border-b-4 border-white">
          <Navbar />
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
            <h2 className="text-[1.125rem] font-lato-regular font-[800]">
              {product.price}
            </h2>
            <small className="!text-[.75rem] ml-[0.75rem] font-lato-regular">
              <span className="line-through">₹1399</span>{" "}
              <span className="font-semibold text-[#49AC56]">30% OFF</span>
            </small>
          </div>
          <p className="font-lato-regular !font-[300] !text-[0.75rem]">
            Incl of taxes
          </p>
        </div>
        <SelectSize />
        <DeliveryDetails />
        <SecurityDetails />
        <SectionThree />
        <SimilarProducts />
      </main>
      <Offer />
      <Footer />
    </>
  );
};

export default memo(ProductDetail);
