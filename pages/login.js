import React from "react";
import GoogleLogin from "react-google-login";
import Form from "../components/Login/Form";
import Navbar from "../components/common/header";
import Link from "next/link";
import Image from "next/image";

const Login = ({ successRedirection }) => {
  return (
    <main>
      <div className="container bg-[#f2eadf] min-h-screen ">
        <Navbar />
        <div className="pt-[4rem]">
          <div className="2xl:grid grid-cols-3">
            <div className="hidden 2xl:block h-[92vh] overflow-y-hidden">
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/auth.png"
                alt=""
                width={400}
                height={800}
                className="object-cover"
              />
            </div>
            <div className="px-[0.94rem] col-span-2 2xl:px-20 pt-[4.5rem]">
              <div className="pb-6">
                <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
                  Login
                </h1>
              </div>
              <Form successRedirection={successRedirection} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

export function getServerSideProps(context) {
  return {
    props: {
      successRedirection: context.query.destination,
    },
  };
}
