import React from "react";
import Navbar from "../components/common/header";
import Link from "next/link";

const Registration = () => {
  return (
    <main>
      <div className="bg-[#f2eadf] overflow-y-auto h-screen">
        <Navbar />
        <div className="container  px-[0.94rem]   2xl:px-20 pt-[6rem]">
          <div>
            <div className="pb-6">
              <h1 className="font-sansita-regular font-extrabold text-4xl text-center pb-8">
                Create Account
              </h1>
              <p className="px-12 text-center">
                Unlock Your World: Join Us and Create Your Account Today!
              </p>
            </div>
            <Link href="/register">
              <a>
                <button
                  type="submit"
                  className="bg-[#A86549] w-full py-2 text-[#EADAC8] font-semibold text-xl my-3"
                >
                  Create an account
                </button>
              </a>
            </Link>
            <div className="flex items-center justify-center my-4">
              <div className="bg-white h-[2px] w-[130px]" />
              <div className="font-semibold px-3">OR</div>
              <div className="bg-white h-[2px] w-[130px]" />
            </div>
            <Link href="/login?destination=/">
              <a>
                <button
                  type="submit"
                  className="bg-[#EADAC8] w-full py-2 text-[#A86549] font-semibold text-xl my-3"
                >
                  Login Here
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Registration;
