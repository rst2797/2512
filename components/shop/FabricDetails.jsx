import React, { useState } from "react";
import { FaPlus, FaMinus, FaRegStar  } from "react-icons/fa";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion border-t-4 border-white">
      <div className="accordion-item transition-all py-[1.25rem] border-b-4 !border-white">
        <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]" onClick={() => handleClick(0)}>
          <span className="accordion-header-text">Material</span>
          <span className="accordion-header-icon">{activeIndex === 0 ? <FaMinus/> : <FaPlus/>}</span>
        </h2>
        {activeIndex === 0 && (
          <div className="accordion-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              necessitatibus velit assumenda explicabo dolorem? Itaque autem
              vero natus ipsam ipsa corporis debitis doloremque nihil.
            </p>
          </div>
        )}
      </div>

      <div className="accordion-item transition-all py-[1.25rem] border-b-4 !border-white">
        <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]" onClick={() => handleClick(1)}>
          <span className="accordion-header-text">Care</span>
          <span className="accordion-header-icon">{activeIndex === 1 ? <FaMinus/> : <FaPlus/>}</span>
        </h2>
        {activeIndex === 1 && (
          <div className="accordion-body pl-8">
            <ul>
              <li className="list-disc">Machine or Hand Wash In Cold Water</li>
              <li className="list-disc">Do Not Dry Clean</li>
              <li className="list-disc">Do Not Tumble Dry</li>
              <li className="list-disc">Do Not Iron On Suede</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item transition-all py-[1.25rem] border-b-4 !border-white">
        <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]" onClick={() => handleClick(2)}>
          <span className="accordion-header-text">Delivery, Returns & Exchange</span>
          <span className="accordion-header-icon">{activeIndex === 2 ? <FaMinus/> : <FaPlus/>}</span>
        </h2>
        {activeIndex === 2 && (
          <div className="accordion-body">
            <p>This is the content for item 3.</p>
          </div>
        )}
      </div>
      <div className="accordion-item transition-all py-[1.25rem] border-b-4 !border-white">
        <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]" onClick={() => handleClick(3)}>
          <span className="accordion-header-text">Rating & Reviews</span>
          <span className="accordion-header-icon">{activeIndex === 3 ? <FaMinus/> : <FaPlus/>}</span>
        </h2>
        {activeIndex === 3 && (
          <div className="accordion-body">
            <p>This is the content for item 3.</p>
          </div>
        )}
      </div>
      <div className="accordion-item transition-all py-[1.25rem] border-b-4 border-white">
        <h2 className="accordion-header flex justify-between font-bold font-lato-regular !text-[1rem] text-[#2F2E2D]">
          <span className="accordion-header-text">Rating & Reviews</span>
          <span className="accordion-header-icon flex gap-2">
               {
                [1, 2, 3, 4, 5].map(ele=>(
                    <FaRegStar key={ele} />
                ))
               }
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Accordion;
