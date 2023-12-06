import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const ProfileOptions = () => {
  const options = [
    {
      id: 1,
      name: "View Orders",
    },
    {
      id: 2,
      name: "Returns & Exchanges",
    },
    {
      id: 3,
      name: "Payment Options",
    },
    {
      id: 4,
      name: "Account Settings",
    },
  ];
  return (
    <div className="px-[.94rem] pt-[1.88rem] relative h-[68vh] ">
      {options.map((option) => (
        <div className="flex justify-between items-center pt-[.62rem] pb-[.94rem] border-b-2 text-[#2F2E2D] border-white font-[700]" key={option.id}>
          <h3>{option.name}</h3>
          <IoChevronForwardSharp/>
        </div>
      ))}
      <div className="text-[#2F2E2D] absolute bottom-10 left-6 right-6 flex justify-between items-center pt-[.62rem] pb-[.94rem] font-[700]">
          <h3>Sign out</h3>
          <IoChevronForwardSharp/>
        </div>
    </div>
  );
};

export default ProfileOptions;
