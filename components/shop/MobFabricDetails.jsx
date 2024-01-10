import React, { useState } from "react";
import { FaPlus, FaMinus, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import EditableRating from "../common/EditableRating";

const MobFabricDetails = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion py-4 lg:hidden">
      <div className="accordion-item transition-all py-[1rem] border-y-[1px] !border-black">
        <h2
          className="accordion-header cursor-pointer flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick(0)}
        >
          <span className="accordion-header-text">Description</span>
          <span className="accordion-header-icon">
            {activeIndex === 0 ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
        {activeIndex === 0 && (
          <div className="accordion-body py-2">
            <p>{product["description"]}</p>
          </div>
        )}
      </div>
      <div className="accordion-item transition-all py-[1rem] border-b-[1px] !border-black">
        <h2
          className="accordion-header cursor-pointer flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick(1)}
        >
          <span className="accordion-header-text">Material</span>
          <span className="accordion-header-icon">
            {activeIndex === 1 ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
        {activeIndex === 1 && (
          <div className="accordion-body">
            <p className="pl-8">
              {product["material"].map((ele, index) => (
                <ul key={index}>
                  <li className="py-2 list-disc">{ele}</li>
                </ul>
              ))}
            </p>
          </div>
        )}
      </div>

      <div className="accordion-item transition-all py-[1rem] border-b-[1px] !border-black">
        <h2
          className="accordion-header cursor-pointer flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick(2)}
        >
          <span className="accordion-header-text">Care</span>
          <span className="accordion-header-icon">
            {activeIndex === 2 ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
        {activeIndex === 2 && (
          <div className="accordion-body">
            <p className="pl-8">
              {product["care"].map((ele, index) => (
                <ul key={index}>
                  <li className="py-2 list-disc">{ele}</li>
                </ul>
              ))}
            </p>
          </div>
        )}
      </div>

      <div className="accordion-item transition-all py-[1rem] border-b-[1px] !border-black">
        <Link href={"/home/delivery-returns"}>
          <a target="_blank">
            <h2 className="accordion-header cursor-pointer flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]">
              <span className="accordion-header-text">
                Delivery, Returns & Exchange
              </span>
              <span className="accordion-header-icon">
                {activeIndex === 3 ? <FaMinus /> : <FaPlus />}
              </span>
            </h2>
          </a>
        </Link>
      </div>
      <div className="accordion-item transition-all py-[1rem] border-b-[1px] border-black">
        <h2 className="accordion-header cursor-pointer flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]">
          <span className="accordion-header-text">Rating & Reviews</span>
          <span className="accordion-header-icon flex gap-2">
            <EditableRating productId={product._id} readOnly={false} />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default MobFabricDetails;
