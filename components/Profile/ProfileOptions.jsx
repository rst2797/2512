import Link from "next/link";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const ProfileOptions = ({ user }) => {
  const options = [
    {
      id: 1,
      name: "Account Settings",
      link: `/`,
    },
    {
      id: 2,
      name: "Returns & Exchanges",
      link: `/home/delivery-returns`,
    },
    {
      id: 3,
      name: "View Orders",
      link: `/order-history/${user._id}`,
    },
  ];
  return (
    <div className="px-[1.5rem] pt-[1rem] relative my-4 h-[97%] rounded-3xl bg-white drop-shadow-lg">
      {options.map((option) => (
        <Link href={option.link} key={option.id}>
          <a>
            <div className="flex justify-between items-center pt-[.62rem] pb-[.94rem] border-b-[1px] text-[#2F2E2D] border-black font-[700]">
              <h3>{option.name}</h3>
              <IoChevronForwardSharp />
            </div>
          </a>
        </Link>
      ))}
      <button className="text-[#2F2E2D] absolute bottom-4 left-6 right-6 flex justify-between items-center  pb-[.94rem] font-[700]">
        <h3>Sign out</h3>
        <IoChevronForwardSharp />
      </button>
    </div>
  );
};

export default ProfileOptions;
