import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaPlus, FaMinus, FaRegStar } from "react-icons/fa";
import EditableRating from "../common/EditableRating";

const FabricDetails = ({product, activeFabricDetail, setActiveFabricDetails }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    setActiveFabricDetails("description");
  }, []);

  const handleClick = (open) => {
    setActiveFabricDetails(open);
  };

  return (
    <div className="accordion lg:px-14">
      <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-y-[1px] !border-black">
        <h2
          className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick("description")}
        >
          <span className="accordion-header-text">Description</span>
          <span className="accordion-header-icon">
            {activeFabricDetail === "description" ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
      </div>
      <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-b-[1px] !border-black">
        <h2
          className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick("material")}
        >
          <span className="accordion-header-text">Material</span>
          <span className="accordion-header-icon">
            {activeFabricDetail === "material" ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
      </div>

      <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-b-[1px] !border-black">
        <h2
          className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]"
          onClick={() => handleClick("care")}
        >
          <span className="accordion-header-text">Care</span>
          <span className="accordion-header-icon">
            {activeFabricDetail === "care" ? <FaMinus /> : <FaPlus />}
          </span>
        </h2>
      </div>

      <Link href="/home/delivery-returns" >
        <a target="_blank">
          <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-b-[1px] !border-black">
            <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]">
              <span className="accordion-header-text">
                Delivery, Returns & Exchange
              </span>
              <span className="accordion-header-icon">
                {activeIndex === 3 ? <FaMinus /> : <FaPlus />}
              </span>
            </h2>
          </div>
        </a>
      </Link>
      <div className="accordion-item hover:cursor-pointer transition-all py-[.6rem] border-b-[1px] border-black">
        <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]">
          <span className="accordion-header-text">Rating & Reviews</span>
          <span className="accordion-header-icon flex gap-2">
            <EditableRating productId={product._id} readOnly={false} />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default FabricDetails;
