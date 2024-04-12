import React from "react";
import Form from "../components/Contact/Form";
import Navbar from "../components/common/header";
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
        <div className="flex flex-col lg:flex-row justify-around items-center h-full px-4 lg:px-32 pt-24 lg:pt-40">
          {/* Left Section */}
          <div className="lg:w-[40%]">
            <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
              Contact Us
            </h1>
            <Form phoneCodes={phoneCodes} />
          </div>
          {/* Divider */}
          <div className="lg:flex flex-col items-center justify-center ml-16 hidden">
            <div className="border-r border-black h-48 w-0 lg:w-1 lg:mx-4"></div>
            <span className="font-semibold mt-8 lg:mt-0">OR</span>
            <div className="border-r border-black h-48 w-0 lg:w-1 lg:mx-4"></div>
          </div>
          {/* Right Section */}
          <div className="lg:w-[40%]">
            <div className="text-center flex justify-center items-center">
              <div>
                <p className="font-semibold text-md">Reach out to us via:</p>
                <p className="text-md lg:text-xl font-bold">
                  contactus@2512.in | (+91) 9691826952
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="font-semibold">Address</div>
            </div>
            <div className="flex justify-center">
              <p className="text-center font-bold text-md lg:text-xl lg:w-[65%]">
                Gram Bhanwarasala, Sanwer Road, Indore 452001
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Register;
