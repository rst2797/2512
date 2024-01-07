import React from "react";
import GoogleLogin from "react-google-login";
import Form from "../components/Register/Form";
import Navbar from "../components/common/header";
import Link from "next/link";
import Image from "next/image";
import countryData from "country-data";
import { useEffect } from "react";
import { useState } from "react";

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
        <div className="lg:grid lg:grid-cols-3">
          <div className="hidden xl:block h-screen overflow-y-hidden">
            <Image
              src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/auth.png"
              alt=""
              width={400}
              height={900}
              className="object-cover"
            />
          </div>
          <div className="px-[0.94rem] lg:col-span-2 2xl:px-20 pt-[4.5rem]">
            <div className="pb-6">
              <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
                Create Account
              </h1>
            </div>
            <Form phoneCodes={phoneCodes} />
            <div className="flex items-center justify-center my-4 lg:my-0">
              <div className="bg-white lg:bg-black h-[2px] w-[150px]" />
              <div className="font-semibold px-3 lg:hidden">OR</div>
              <div className="font-semibold px-3 hidden lg:block">
                Already a customer?
              </div>
              <div className="bg-white lg:bg-black h-[2px] w-[150px]" />
            </div>
            {/* <div className="flex justify-center google-btn pb-8 lg:hidden">
              <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Sign in with Google"
                onSuccess={null}
                onFailure={null}
                cookiePolicy={"single_host_origin"}
                style={{ width: "330px" }}
              />
            </div> */}
            <div className="lg:my-3 flex justify-center w-full">
              <Link href="/login?destination=/">
                <a className="font-bold text-center rounded-lg w-[55%] bg-white py-2">
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
