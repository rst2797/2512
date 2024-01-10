import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    axios
      .post("/api/subscribe", {
        email: e.target.email.value,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <footer className="bg-[#a66347] h-auto flex flex-col justify-center w-full lg:px-12">
      <div className="mx-auto max-w-[1450px] pb-8">
        <div className="container lg:flex">
          <div className="flex flex-col">
            <div className="lg:w-1/2 flex justify-center lg:block">
              <Image
                src="/icons/2512_RGB-2 2.png"
                alt="2512 | PACCHIS BARAH"
                className="!pt-2 "
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="max-w-full lg:w-[45%] lg:text-start text-center mx-4 px-4 text-white text-lg">
                Discover conscious fashion at PacchisBarah – your sustainable,
                gender-inclusive organic clothing brand. Minimal design and
                maximum impact. Shop now on mobile & web at www.2512.in
              </div>
              <div className="flex justify-around py-12 lg:py-0 px-4 lg:px-0 w-full">
                <div className="flex flex-col lg:text-lg lg:ml-4">
                  <Link href="/auth">
                    <a className="text-white lg:text-lg text-sm pb-3 no-underline text-center lg:text-left border-b-[1px] border-white">
                      My Account
                    </a>
                  </Link>
                  <Link href="/home/delivery-returns" className="py-4">
                    <a className="text-white lg:text-lg text-sm py-2 no-underline text-center lg:text-left pt-2">
                      Delivery & Return
                    </a>
                  </Link>
                  <Link href="/contactus" className="py-4">
                    <a className="text-white lg:text-lg text-sm py-2 no-underline text-center lg:text-left">
                      Contact Us
                    </a>
                  </Link>
                  <Link href="/blog" className="py-4">
                    <a className="text-white lg:text-lg text-sm py-2 no-underline text-center lg:text-left">
                      Blog
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:pl-4 lg:text-lg">
                  <Link href="/our-story">
                    <a className="text-white lg:text-lg text-sm pb-3 no-underline border-b-[1px] lg:w-[130px] w-[100px] text-center lg:text-start border-white">
                      About Us
                    </a>
                  </Link>
                  <Link href="/our-story">
                    <a className="text-white lg:text-lg text-sm py-2 no-underline pt-2">
                      Our Story
                    </a>
                  </Link>
                  <Link href="/sustainability">
                    <a className="text-white lg:text-lg text-sm py-2 no-underline">
                      Sustainability
                    </a>
                  </Link>
                  <Link href="/kanso">
                    <a className="text-white lg:text-lg text-sm py-2 no-underline">
                      Kanso
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:text-lg">
                  <Link href="/our-story">
                    <a className="text-white lg:text-lg text-sm pb-3 no-underline border-b-[1px] lg:w-[180px] border-white lg:mr-12">
                      Customer Policies
                    </a>
                  </Link>
                  <Link href="/terms-and-conditions" className="py-4">
                    <a className="text-white lg:text-lg text-sm py-2 no-underline text-center lg:text-left">
                      Terms & Conditions
                    </a>
                  </Link>
                  <Link href="/privacy-and-policy">
                    <a className="text-white lg:text-lg text-sm py-2 no-underline">
                      Privacy Policy
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-xl text-white font-semibold">
                  JOIN THE COMMUNITY
                </h2>
                <p className="lg:font-semibold text-center lg:text-left w-full text-sm lg:text-md text-white">
                  Subscribe to our newsletter below and never miss the latest
                  product or an exclusive offer.
                </p>
                <form
                  action=""
                  className="flex flex-col lg:block pt-3"
                  onSubmit={(e) => {
                    handleSubscribe(e);
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    className="border-b-[1px] text-white border-white bg-transparent lg:placeholder:text-start placeholder:text-center placeholder:text-white placeholder:text-xs py-1"
                    placeholder="Enter your email address"
                  />
                  <button
                    type="submit"
                    className="bg-[#F4E9DF] rounded-md text-xs py-[0.625rem] px-[1.625rem] my-2 mx-1 font-bold"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:border-t-[1px] border-white py-2 flex flex-col-reverse lg:flex-row items-center justify-between">
        <p className="text-lg text-center lg:text-start lg:text-xs text-white font-thin lg:font-semibold px-4 border-t-[1px] lg:border-none">
          The content of this site is copyright-protected and is the property of
          2512.
        </p>
        <div className="text-[#f2eadf] flex justify-center lg:justify-start lg:pr-14">
          <Link href="https://instagram.com/pacchisbarah?igshid=MTNiYzNiMzkwZA==">
            <a target="_blank">
              <FaInstagram className="bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100092235251751&mibextid=LQQJ4d">
            <a target="_blank">
              <FaFacebook className="bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
            </a>
          </Link>
          <Link href="https://pin.it/3NeEGst">
            <a target="_blank">
              <FaPinterest className="bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/@PacchisBarah">
            <a target="_blank">
              <FaYoutube className="bg-transparent p-2 border-2 border-[#a66347] text-5xl lg:text-4xl mx-2" />
            </a>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          style={{ marginBottom: "1rem", width: "fit-content" }}
        />
      </div>
    </footer>
  );
};

export default Footer;