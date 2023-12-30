import React from "react";
import Form from "../components/forgetPassword/Form.jsx";
import Navbar from "../components/common/header";

const Login = ({ successRedirection }) => {
  return (
    <main>
      <div className="container bg-[#f2eadf] min-h-screen">
        <Navbar />
        <div className=" px-[0.94rem] 2xl:px-20 pt-[6rem]">
          <div className="pb-6">
            <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
              Forget Password
            </h1>
          </div>
          <Form successRedirection={successRedirection} />
        </div>
      </div>
    </main>
  );
};

export default Login;
