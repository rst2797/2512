import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import "animate.css";
import { useCart } from "react-use-cart";
import { FaRegUser } from "react-icons/fa6";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import CartDropdown from "../CartIcon";

const Navbar = ({ position }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(false);
  

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    Cookies.remove("token");
    setUser(null);
    router.push("/login?destination=/");
  };
  return (
    <>
      <div className="lg:px-0 2xl:px-20 lg:py-0 ">
        <nav
          className={`lg:border-b-[1px] border-[#A86549] fixed top-0 left-0 right-0 z-50 bg-[#F4E9DF] px-[1rem] lg:px-[5.37rem] drop-shadow-md lg:drop-shadow-none transition-all`}
        >
          <div className="flex items-center justify-between">
            <div className="lg:hidden pt-2 pr-6">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-[#2F2E2D] font-semibold focus:outline-none"
              >
                <GiHamburgerMenu size={25} />
              </button>
            </div>
            <Link href="/">
              <a className="text-2xl font-bold pt-[.5rem] lg:border-r-[1px] lg:border-[#A86549] lg:pr-12 pl-6 lg:pl-0">
                <Image
                  src="/icons/2512_RGB 2.png"
                  alt="2512 | PACCHIS BARAH"
                  width={63}
                  height={48}
                />
              </a>
            </Link>
            <div className="hidden lg:block">
              <ul className="flex flex-wrap list-none leading-loose lg:pl-44">
                <li className="px-[1.5rem] border-x-[1px] border-[#A86549] py-4 md:my-0">
                  <Link href="/">
                    <a className="!text-[1rem] font-bold font-lato-regular">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="px-[1.5rem] pt-4 md:my-0">
                  <Link href="/shop/tshirt">
                    <a className="!text-[1rem] font-bold font-lato-regular">
                      Shop
                    </a>
                  </Link>
                </li>
                <li
                  onMouseEnter={() => setOpenMenu(!openMenu)}
                  onMouseLeave={() => setOpenMenu(!openMenu)}
                  className="px-[1.5rem] border-x-[1px] border-[#A86549] py-4 md:my-0 relative cursor-pointer"
                >
                  <span className="!text-[1rem] font-bold font-lato-regular cursor-pointer select-none ">
                    About Us
                  </span>
                  {openMenu && (
                    <div className=" bg-[#F4E9DF] absolute -left-4 top-12 p-6 font-semibold">
                      <ul>
                        <li>
                          <Link href="/our-story">
                            <a className="select-none">Our Story</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/sustainability">
                            <a className="select-none">Sustainability</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/kanso">
                            <a className="select-none">Kanso</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="px-[1.5rem] border-r-[1px] border-[#A86549] py-4 md:my-0">
                  <Link href="/contactus">
                    <a className="!text-[1rem] font-bold font-lato-regular">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center flex-row-reverse lg:flex-row justify-evenly gap-4 lg:gap-0">
              <Link href={user ? `/profile/${user._id}` : "/auth"}>
                <a className="lg:text-[1.25rem] relative">
                  <FaRegUser size={25} className="pl-1 lg:p-0 lg:mx-4" />
                </a>
              </Link>
              <CartDropdown />
              {/* <Link href="/cart">
                <a className="text-[1.25rem] relative">
                  {!isEmpty && (
                    <span className="absolute right-2 top-0 text-xs bg-[#A86549] text-white rounded-full w-4 h-4 text-center">
                      {totalUniqueItems}
                    </span>
                  )}
                  <IoBagOutline size={25} className="lg:mx-4" />
                </a>
              </Link> */}
              <div className="justify-center hidden lg:flex ml-4">
                {user ? (
                  <button
                    className="py-[0.5rem] px-[1.25rem] text-xs text-white bg-[#A86549] rounded-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link href="/login?destination=/">
                    <a>
                      <button className="py-[0.5rem] px-[1.25rem] text-xs text-white bg-[#A86549] rounded-lg">
                        Login
                      </button>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {navOpen && (
        <NavList
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          user={user}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default Navbar;

const NavList = ({ navOpen, setNavOpen, user, handleLogout }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <div
      className={`animate__animated animate__slideInLeft font-semibold bg-[#EADAC8] w-[80vw] h-screen fixed top-0 left-0 z-50 flex flex-col justify-between`}
    >
      <div className="flex flex-end relative">
        <div className="absolute top-5 right-4 text-[2rem]">
          <IoMdClose onClick={() => setNavOpen(false)} />
        </div>
        <ul className="flex flex-col mt-12 px-4">
          <li className="my-4 px-[1.88rem]">
            <Link href="/">
              <a className="text-[1.25rem]">Home</a>
            </Link>
          </li>
          <li className="my-4 px-[1.88rem]">
            <Link href="/shop/tshirt">
              <a className="text-[1.25rem]">Shop</a>
            </Link>
          </li>
          <li
            className="my-4 px-[1.88rem]"
            onClick={() => {
              setAboutOpen(!aboutOpen);
            }}
          >
            <div className="flex justify-between items-baseline">
              <h3 className="text-[1.25rem]">About Us</h3>
              {!aboutOpen ? (
                <IoMdAdd className="text-[1.25rem]" />
              ) : (
                <FaMinus className="text-[1rem]" />
              )}
            </div>
            {aboutOpen && (
              <ul className="text-[0.875rem] pl-4">
                <li>
                  <Link href="/our-story">Our Story</Link>
                </li>
                <li>
                  <Link href="/sustainability">Sustainability</Link>
                </li>
                <li>
                  <Link href="/kanso">Kanso</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="my-4 px-[1.88rem]">
            {user ? (
              <Link href={`/profile/${user._id}`}>
                <a className="text-[1.25rem]">My Profile</a>
              </Link>
            ) : (
              <Link href="/auth">
                <a className="text-[1.25rem]">My Account</a>
              </Link>
            )}
          </li>
          <li className="my-4 px-[1.88rem]">
            <Link href="/contactus">
              <a className="text-[1.25rem]">Contact Us</a>
            </Link>
          </li>
          <li className="my-4 px-[1.88rem]">
            <Link href="/privacy-and-policy">
              <a className="text-[1.25rem]">Privacy and Policy</a>
            </Link>
          </li>
          <li className="my-4 px-[1.88rem]">
            <Link href="/terms-and-conditions">
              <a className="text-[1.25rem]">Terms and Condition</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-[5rem] flex justify-center">
        {user ? (
          <button
            className="w-[15rem] py-[0.5625rem] text-white bg-[#A86549]"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link href="/login?destination=/">
            <a>
              <button className="w-[15rem] py-[0.5625rem] text-white bg-[#A86549]">
                Login
              </button>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
