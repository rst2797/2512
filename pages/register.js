import React from "react";
import GoogleLogin from "react-google-login";
import Form from "../components/Register/Form";
import Navbar from "../components/common/header";

const Login = () => {
  return (
    <main>
      <div className="container bg-[#f2eadf] min-h-screen">
        <Navbar />
        <div className="px-[0.94rem] pt-[4.5rem]">
          <div className="pb-6">
            <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
              Register
            </h1>
          </div>
          <Form />
          <div className="flex items-center justify-center my-4">
            <div className="bg-white h-[2px] w-[130px]" />
            <div className="font-semibold px-3">OR</div>
            <div className="bg-white h-[2px] w-[130px]" />
          </div>
          <div className="flex justify-center google-btn pb-8">
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Sign in with Google"
              onSuccess={null}
              onFailure={null}
              cookiePolicy={"single_host_origin"}
              style={{ width: "330px" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
