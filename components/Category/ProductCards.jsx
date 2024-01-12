import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Rating from "../common/RatingStars";
import axios from "axios";

const ProductCards = ({ products }) => {
  const [render, setRender] = useState(false);
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    const productIds = products.map((obj) => obj._id);
    axios
      .post(`/api/get-products-rating`, {
        productIds,
      })
      .then((res) => {
        setRatings([res.data.ratings]);
        setTimeout(() => {
          setRender(true);
        }, 1000);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-y-4 lg:gap-x-10 lg:gap-y-16">
      {products?.map((ele, index) => (
        <Link href={`/collection/${ele._id}`} key={ele.id}>
          <a className="w-fit bg-white rounded-xl hover:drop-shadow-lg">
            <Image
              src={ele.images[0]}
              alt={ele.breadcrumb}
              width={350}
              height={500}
              priority="high"
              className="rounded-t-xl"
            />
            <div className="px-4">
              <h2 className="font-sansita-regular !text-[1rem] !leading-[1rem] pt-[.25rem]">
                {ele.name}
              </h2>
              <div className="flex items-center">
                <p className="font-lato-regular !font-semibold !text-[1rem] !leading-[1.5rem]">
                  ₹{ele.price}
                </p>
                <p className="font-lato-regular !font-semibold !text-[.7rem] !leading-[1.5rem] px-1 line-through">
                  ₹{ele.actualPrice}
                </p>
                <p className="font-lato-regular !font-bold !text-[.7rem] text-[#FF0909] !leading-[1.5rem]">
                  {ele.offPercentage} OFF
                </p>
              </div>
              {render && (
                <div className="flex items-center font-semibold py-1 text-xs">
                  {ratings[0][index][ele._id]?.averageRating} &nbsp;{" "}
                  <Rating
                    overallRating={ratings[0][index]?.[ele._id]?.averageRating}
                  />{" "}
                  &nbsp; {ratings[0][index]?.[ele._id]?.totalRatings}{" "}
                  {ratings[0][index]?.[ele._id]?.totalRatings > 1
                    ? "Ratings"
                    : "Rating"}
                </div>
              )}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductCards;
