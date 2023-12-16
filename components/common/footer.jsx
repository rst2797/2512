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
    <footer className="bg-[#f2eadf] lg:bg-[#a66347] w-full py-8">
      <div className="container">
        <div className="flex justify-center">
          <Image
            src="/icons/2512_RGB 2.png"
            alt="2512 | PACCHIS BARAH"
            className="!pt-2"
            width={75}
            height={55}
          />
        </div>
        <div className="text-[#a66347] lg:text-[#f2eadf] flex justify-center py-8">
          <Link href="https://instagram.com/pacchisbarah?igshid=MTNiYzNiMzkwZA==">
            <a>
              <FaInstagram className="bg-white p-2 border-2 border-[#a66347] text-5xl mx-2" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100092235251751&mibextid=LQQJ4d">
            <a>
              <FaFacebook className="bg-white p-2 border-2 border-[#a66347] text-5xl mx-2" />
            </a>
          </Link>
          <Link href="https://pin.it/3NeEGst">
            <a>
              <FaPinterest className="bg-white p-2 border-2 border-[#a66347] text-5xl mx-2" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/@PacchisBarah">
            <a>
              <FaYoutube className="bg-white p-2 border-2 border-[#a66347] text-5xl mx-2" />
            </a>
          </Link>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <Link href="/auth">
              <a className="text-black font-semibold no-underline text-right border-b-2 border-white pb-2">
                My Account
              </a>
            </Link>
            <Link href="/home/delivery-returns" className="py-4">
              <a className="text-black font-semibold no-underline text-right pt-2">
                Delivery & Return
              </a>
            </Link>
            <Link href="/contact" className="py-4">
              <a className="text-black font-semibold no-underline text-right">
                Contact Us
              </a>
            </Link>
            <Link href="#" className="py-4">
              <a className="text-black font-semibold no-underline text-right">
                Blog
              </a>
            </Link>
          </div>
          <div className="border-l-2 border-white h-32" />

          <div className="flex flex-col">
            <Link href="/our-story">
              <a className="text-black font-semibold pb-2 no-underline border-b-2 border-white pr-14">
                About Us
              </a>
            </Link>
            <Link href="/our-story">
              <a className="text-black font-semibold no-underline pt-2">
                Our Story
              </a>
            </Link>
            <Link href="/sustainability">
              <a className="text-black font-semibold no-underline">
                Sustainability
              </a>
            </Link>
            <Link href="/kanso">
              <a className="text-black font-semibold no-underline">Kanso</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
