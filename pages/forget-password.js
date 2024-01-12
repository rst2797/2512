import React from "react";
import Form from "../components/forgetPassword/Form.jsx";
import Navbar from "../components/common/header";
import Image from "next/image";

const ForgetPass = () => {
  return (
    <main>
      <div className="container bg-[#f2eadf] min-h-screen">
        <Navbar />
        <div className="2xl:grid grid-cols-3">
          <div className="hidden lg:block h-screen overflow-y-hidden">
            <Image
              src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/auth.png"
              alt=""
              width={400}
              height={800}
              className="object-cover"
            />
          </div>
          <div className="px-[0.94rem] col-span-2 2xl:px-20 pt-[4.5rem] h-screen flex flex-col justify-center">
            <div className="pb-6 w-[70%]">
              <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
                Forget Password
              </h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgetPass;
