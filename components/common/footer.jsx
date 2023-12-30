import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./Logo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f2eadf] lg:bg-[#a66347] lg:h-auto lg:flex flex-col justify-center w-full lg:px-12">
      <div className=" mx-auto max-w-[1450px] pb-8">
        <div className="container lg:flex">
          <div className="flex flex-col">
            <div className="w-1/2">
              <Image
                src="/icons/2512_RGB-2 2.png"
                alt="2512 | PACCHIS BARAH"
                className="!pt-2 "
                width={150}
                height={150}
              />
            </div>
            <div className="flex justify-between">
              <div className="max-w-full text-justify mx-4 px-4 text-white text-lg">
                Discover conscious fashion at PacchisBarah – your sustainable,
                gender-inclusive organic clothing brand. Minimal design and
                maximum impact. Shop now on mobile & web at www.2512.in
              </div>
              <div className="flex justify-around w-full">
                <div className="flex flex-col text-sm ml-24">
                  <Link href="/auth">
                    <a className="text-[#2F2E2D] lg:text-white font-medium text-sm pb-3 no-underline text-right lg:text-left border-b-[1px] border-white">
                      My Account
                    </a>
                  </Link>
                  <Link href="/home/delivery-returns" className="py-4">
                    <a className="text-[#2F2E2D] lg:text-white font-medium text-sm py-2 no-underline text-right lg:text-left pt-2">
                      Delivery & Return
                    </a>
                  </Link>
                  <Link href="/contactus" className="py-4">
                    <a className="text-[#2F2E2D] lg:text-white font-medium text-sm py-2 no-underline text-right lg:text-left">
                      Contact Us
                    </a>
                  </Link>
                  <Link href="/blog" className="py-4">
                    <a className="text-[#2F2E2D] lg:text-white font-medium text-sm py-2 no-underline text-right lg:text-left">
                      Blog
                    </a>
                  </Link>
                </div>
                <div className="border-l-2 lg:border-none border-white h-32" />

                <div className="flex flex-col lg:pl-4 text-sm">
                  <Link href="/our-story">
                    <a className="text-[#2F2E2D] lg:text-white font-medium text-sm pb-3 no-underline border-b-[1px] border-white mr-20 pr-14">
                      About Us
                    </a>
                  </Link>
                  <Link href="/our-story">
                    <a className="text-[#2F2E2D] lg:text-white font-medium text-sm py-2 no-underline pt-2">
                      Our Story
                    </a>
                  </Link>
                  <Link href="/sustainability">
                    <a className="text-[#2F2E2D] lg:text-white font-medium text-sm py-2 no-underline">
                      Sustainability
                    </a>
                  </Link>
                  <Link href="/kanso">
                    <a className="text-[#2F2E2D] lg:text-white font-medium text-sm py-2 no-underline">
                      Kanso
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex flex-col pl-12">
                <h2 className="text-lg text-white font-semibold">
                  JOIN THE COMMUNITY
                </h2>
                <p className="font-semibold text-center lg:text-left w-full text-md text-white">
                  Subscribe to our newsletter below and never miss the latest
                  product or an exclusive offer.
                </p>
                <form action="" className="pt-3">
                  <input
                    type="text"
                    className="border-b-[1px] border-white bg-transparent placeholder:text-white placeholder:text-xs py-1"
                    placeholder="Enter your email address"
                  />
                  <button className="bg-[#F4E9DF] rounded-md text-xs py-[0.625rem] px-[1.625rem] my-2 font-bold">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-white py-2 flex items-center justify-between">
        <p className="text-xs text-white font-semibold px-4">
          The content of this site is copyright-protected and is the property of
          2512.
        </p>
        <div className="text-[#a66347] lg:text-[#f2eadf] flex justify-center lg:justify-start pr-14">
          <Link href="https://instagram.com/pacchisbarah?igshid=MTNiYzNiMzkwZA==">
            <a target="_blank">
              <FaInstagram className="bg-white lg:bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100092235251751&mibextid=LQQJ4d">
            <a target="_blank">
              <FaFacebook className="bg-white lg:bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
            </a>
          </Link>
          <Link href="https://pin.it/3NeEGst">
            <a target="_blank">
              <FaPinterest className="bg-white lg:bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/@PacchisBarah">
            <a target="_blank">
              <FaYoutube className="bg-white lg:bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
