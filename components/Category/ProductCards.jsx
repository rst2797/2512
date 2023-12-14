import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products?.map((ele) => (
        <Link
          href={`/collection/${ele._id}`}
          className="card bg-white text-center"
          key={ele.id}
        >
          <a>
            <Image
              src={ele.images[0]}
              alt={ele.breadcrumb}
              width={350}
              height={400}
            />
            <h2 className="font-lato-regular !text-[0.75rem] !leading-[1rem] pt-[1.125rem]">
              {ele.name}
            </h2>
            <p className="font-lato-regular !text-[0.75rem] !leading-[1rem] pb-[1.125rem]">
              {ele.price}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductCards;