import React from "react";
import GoogleLogin from "react-google-login";
import Form from "../components/Contact/Form";
import Navbar from "../components/common/header";
import Link from "next/link";
import Image from "next/image";
import countryData from "country-data";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/common/footer";

const getCountryCodes = () => {
  const countries = countryData.countries.all;
  const countryList = countries.map((country) => ({
    name: country.name,
    code: country.alpha2,
    phoneCode: country.countryCallingCodes[0],
    currency: country.currencies[0],
  }));

  return countryList;
};

const Register = () => {
  const [phoneCodes, setPhoneCodes] = useState(getCountryCodes());
  useEffect(() => {}, []);
  return (
    <main>
      <div className="container bg-[#f2eadf] min-h-screen">
        <Navbar />
        <div className="2xl:grid grid-cols-3">
          <div className="hidden lg:block">
            <Image
              src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/auth.png"
              alt=""
              width={450}
              height={750}
            />
          </div>
          <div className="px-[0.94rem] col-span-2 2xl:px-20 pt-[4.5rem]">
            <div className="pb-6">
              <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
                Contact Us
              </h1>
            </div>
            <Form phoneCodes={phoneCodes} />
            <div className="flex items-center justify-center">
              <div className="bg-white lg:bg-black h-[1px] w-[200px]" />
              <div className="font-semibold px-3">OR</div>
              <div className="bg-white lg:bg-black h-[1px] w-[200px]" />
            </div>
            <div className="my-2 lg:px-48 text-center">
              <p className="font-semibold text-md">
                Reach out to us via email:
              </p>
              <p className="text-xl font-semibold">contactus@2512.in</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Register;
