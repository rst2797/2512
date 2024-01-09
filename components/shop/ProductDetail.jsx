import React, { memo, useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import Navbar from "../common/header";
import Footer from "../common/footer";
import Carousel from "./carousel";
import SelectSize from "./SelectSize";
import SelectColor from "./SelectColor";
import DeliveryDetails from "./DeliveryDetails";
import SecurityDetails from "./SecurityDetails.jsx";
import SimilarProducts from "./SimilarProducts";
import Rating from "../common/RatingStars";
import FabricDetails from "./FabricDetails";
import MobFabricDetails from "./MobFabricDetails";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const ProductDetail = ({ product }) => {
  const [activeFabricDetail, setActiveFabricDetails] = useState("description");
  const [ratings, setRatings] = useState("description");
  const setProductSize = (s) => {
    product.size = s;
  };

  useEffect(() => {
    console.log(activeFabricDetail);
    axios
      .post(`/api/get-product-rating`, {
        productId: product._id,
      })
      .then((res) => {
        if (res.status == 200) {
          setRatings({
            totalRatings: res.data.totalRatings,
            averageRating: res.data.averageRating,
          });
        }
      });
  }, [product, activeFabricDetail]);
  return (
    <>
      <main className="bg-[#f2eadf] pt-[5rem] mx-auto lg:px-20 max-w-[1450px]">
        <Navbar />
        <div className="container border-b-4 border-white px-[0.94rem] grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div className="lg:p-4">
            <div className="lg:hidden block">
              <Breadcrumb
                name={product.breadcrumb}
                category={product.category}
              />
            </div>
            <Carousel
              sliderImages={[...product.images]}
              rating={product.rating}
              numberOfRatings={product.numberOfRatings}
            />
            <div className="hidden lg:block">
              <FabricDetails
                product={product}
                activeFabricDetail={activeFabricDetail}
                setActiveFabricDetails={setActiveFabricDetails}
              />
            </div>
          </div>
          <div className="relative lg:p-6">
            <div className="hidden lg:block mt-6">
              <Breadcrumb
                name={product.breadcrumb}
                category={product.category}
              />
            </div>
            <h2 className="!text-[1.5rem] text-[#2F2E2D] font-sansita-regular">
              {product.name}
            </h2>
            <div className="flex items-center pb-2">
              <h2 className="text-[1.125rem] font-lato-regular font-[800]">
                ₹{product.price}
              </h2>
              <small className="!text-[.85rem] ml-[0.75rem] font-lato-regular font-bold">
                <span className="line-through">₹{product.actualPrice}</span>{" "}
                <span className="font-bold text-[#FF0909]">
                  {product.offPercentage} OFF
                </span>
              </small>
            </div>
            <p className="font-bold flex items-center !text-[0.75rem]">
              {ratings.averageRating} &nbsp;{" "}
              <Rating overallRating={ratings.averageRating} /> &nbsp;{" "}
              {ratings.totalRatings}{" "}
              {ratings.totalRatings > 1 ? "Ratings" : "Rating"}
            </p>
            <div className="lg:pt-8">
              <SelectColor product={product} />
            </div>
            <div className="lg:py-4">
              <SelectSize setProductSize={setProductSize} />
            </div>
            <DeliveryDetails product={product} />
            <div className="hidden lg:block">
              <p className="font-semibold lg:w-[90%] pt-16 pb-5">
                {activeFabricDetail === "care" ||
                activeFabricDetail === "material" ? (
                  <>
                    {product[activeFabricDetail].map((ele, index) => (
                      <ul key={index}>
                        <li className="py-2 list-disc">{ele}</li>
                      </ul>
                    ))}
                  </>
                ) : (
                  product[activeFabricDetail]
                )}
              </p>
            </div>
            <MobFabricDetails product={product} />
            <div className="lg:absolute bottom-3 left-0 right-0 flex bg-[#A86549] rounded-2xl py-4 text-white w-full lg:w-[85%] lg:ml-4">
              <SecurityDetails />
            </div>
          </div>
        </div>
        <SimilarProducts />
        <div className="p-4">
          <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            style={{ marginBottom: "1rem", width: "fit-content" }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default memo(ProductDetail);
