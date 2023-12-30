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
        <div className="2xl:grid grid-cols-3">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/auth.png"
            alt=""
            width={200}
            height={500}
          />
          <div className="px-[0.94rem] col-span-2 2xl:px-20 pt-[4.5rem]">
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
            <div className="flex justify-center google-btn pb-8 lg:hidden">
              <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Sign in with Google"
                onSuccess={null}
                onFailure={null}
                cookiePolicy={"single_host_origin"}
                style={{ width: "330px" }}
              />
            </div>
            <div className="text-center lg:hidden">
              <Link href="/register">
                <a>
                  <span className="opacity-50">
                    Already have an account?&nbsp;
                  </span>
                  <span className="text-blue-500 font-bold opacity-100">
                    Login here!
                  </span>
                </a>
              </Link>
            </div>
            <div className="my-3 px-48">
              <Link href="/login?destination=/">
                <a>
                  <span className="font-bold text-center hidden lg:block rounded-xl bg-white py-2">Login</span>
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
