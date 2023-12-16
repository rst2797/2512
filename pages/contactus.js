import React from "react";
import Form from "../components/Contact/Form";
import Navbar from "../components/common/header";

const Contact = () => {
  return (
    <main className="container bg-[#f2eadf] min-h-screen">
        <Navbar />
        <div className="px-[0.94rem]">
          <div className="pt-[6rem] pb-[3rem]">
            <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
              Contact Us
            </h1>
          </div>
          <Form />
          <div className="flex items-center justify-center my-4">
            <div className="bg-white h-[2px] w-[130px]" />
            <div className="font-semibold px-3">OR</div>
            <div className="bg-white h-[2px] w-[130px]" />
          </div>
          <div className="flex items-center flex-col my-4">
            <small>Reach out to us via email :</small>
            <small className="font-bold">contactus@2512.in</small>
          </div>
        </div>
    </main>
  );
};

export default Contact;
