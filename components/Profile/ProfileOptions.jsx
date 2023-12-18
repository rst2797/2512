import Link from "next/link";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const ProfileOptions = ({ user }) => {
  const options = [
    {
      id: 1,
      name: "View Orders",
      link: `/delivery-and-returns/${user._id}`,
    },
    {
      id: 2,
      name: "Returns & Exchanges",
      link: `/home/delivery-returns`,
    },
    {
      id: 3,
      name: "Payment Options",
      link: `/`,
    },
    {
      id: 4,
      name: "Account Settings",
      link: `/`,
    },
  ];
  return (
    <div className="px-[.94rem] pt-[1.88rem] relative h-[58vh] ">
      {options.map((option) => (
        <Link href={option.link} key={option.id}>
          <a>
            <div className="flex justify-between items-center pt-[.62rem] pb-[.94rem] border-b-2 text-[#2F2E2D] border-white font-[700]">
              <h3>{option.name}</h3>
              <IoChevronForwardSharp />
            </div>
          </a>
        </Link>
      ))}
      <button className="text-[#2F2E2D] absolute bottom-10 left-6 right-6 flex justify-between items-center pt-[.62rem] pb-[.94rem] font-[700]">
        <h3>Sign out</h3>
        <IoChevronForwardSharp />
      </button>
    </div>
  );
};

export default ProfileOptions;
