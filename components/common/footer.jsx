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
    <footer className="bg-[#f2eadf] lg:bg-[#a66347] lg:h-[16rem] lg:flex items-center w-full py-8 lg:px-12">
      <div className="container lg:flex">
        <div className="flex lg:hidden justify-center">
          <Image
            src="/icons/2512_RGB 2.png"
            alt="2512 | PACCHIS BARAH"
            className="!pt-2"
            width={75}
            height={55}
          />
        </div>
        <div className="hidden lg:flex justify-center">
          <Image
            src="/icons/2512_RGB-2 2.png"
            alt="2512 | PACCHIS BARAH"
            className="!pt-2 "
            width={350}
            height={150}
          />
        </div>
        <div className="lg:pt-6 lg:pl-0">
          <div className="hidden lg:block max-w-full text-justify mx-4 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s
          </div>
          <div className="text-[#a66347] lg:text-[#f2eadf] flex justify-center lg:justify-start py-8 lg:py-2">
            <Link href="https://instagram.com/pacchisbarah?igshid=MTNiYzNiMzkwZA==">
              <a>
                <FaInstagram className="bg-white lg:bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
              </a>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100092235251751&mibextid=LQQJ4d">
              <a>
                <FaFacebook className="bg-white lg:bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
              </a>
            </Link>
            <Link href="https://pin.it/3NeEGst">
              <a>
                <FaPinterest className="bg-white lg:bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/@PacchisBarah">
              <a>
                <FaYoutube className="bg-white lg:bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col lg:pt-6 text-sm">
            <Link href="/auth">
              <a className="text-black lg:text-white font-semibold no-underline text-right lg:text-left border-b-2 border-white pb-2">
                My Account
              </a>
            </Link>
            <Link href="/home/delivery-returns" className="py-4">
              <a className="text-black lg:text-white font-semibold no-underline text-right lg:text-left pt-2">
                Delivery & Return
              </a>
            </Link>
            <Link href="/contactus" className="py-4">
              <a className="text-black lg:text-white font-semibold no-underline text-right lg:text-left">
                Contact Us
              </a>
            </Link>
            <Link href="/blog" className="py-4">
              <a className="text-black lg:text-white font-semibold no-underline text-right lg:text-left">
                Blog
              </a>
            </Link>
          </div>
          <div className="border-l-2 lg:border-none border-white h-32" />

          <div className="flex flex-col lg:pl-4 lg:pt-6 text-sm">
            <Link href="/our-story">
              <a className="text-black lg:text-white font-semibold pb-2 no-underline border-b-2 border-white pr-14">
                About Us
              </a>
            </Link>
            <Link href="/our-story">
              <a className="text-black lg:text-white font-semibold no-underline pt-2">
                Our Story
              </a>
            </Link>
            <Link href="/sustainability">
              <a className="text-black lg:text-white font-semibold no-underline">
                Sustainability
              </a>
            </Link>
            <Link href="/kanso">
              <a className="text-black lg:text-white font-semibold no-underline">
                Kanso
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col pl-12">
        <p className="font-semibold text-center lg:text-left w-[80%]  text-white">
          Subscribe to our newsletter below and never miss the latest product or
          an exclusive offer.
        </p>
        <form action="" className="pt-8">
        <input type="text" className="border-b-2 border-white bg-transparent placeholder:text-white placeholder:text-xs py-1" placeholder="Enter your email address" />
        <button className="bg-[#F4E9DF] rounded-md text-xs py-[0.625rem] px-[1.625rem] mx-8 font-bold">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
