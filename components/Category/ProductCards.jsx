import Image from "next/image";
import React from "react";
import { mans_collection as cards } from "../../utils/products";
import Link from "next/link";

const ProductCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards?.map((ele) => (
        <Link
          href={ele.link}
          className="card bg-white text-center"
          key={ele.id}
        >
          <a>
            <Image src={ele.image} alt={ele.title} width={350} height={400} />
            <h2 className="font-lato-regular !text-[0.75rem] !leading-[1rem] pt-[1.125rem]">
              {ele.title}
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
