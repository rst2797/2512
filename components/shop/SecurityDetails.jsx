import React from "react";
import CardSecure from "./SVG/CardProtectionSVG";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import Image from "next/image";

const SecurityDetails = () => {
  const secure = [
    {
      title: "Sustainable Clothing",
      Logo: "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/products/security/Group+206+(1).png",
    },
    {
      title: "Secure Checkout",
      Logo: "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/products/security/Group+207.png",
    },
    {
      title: "Pan India Delivery",
      Logo: "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/products/security/Group+208.png",
    },
  ];
  return (
    <>
      {secure.map((item, index) => (
        <div
          key={index + 2}
          className="flex items-center justify-center text-center"
        >
          <Image src={item.Logo} alt="" width={50} height={50} />
          <h2 className="font-lato-regular lg:text-[1rem] !text-xs !font-[400] w-1/2">
            {item.title}
          </h2>
        </div>
      ))}
    </>
  );
};

export default SecurityDetails;
