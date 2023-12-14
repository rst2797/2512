import React from "react";
import GoogleLogin from "react-google-login";
import Form from "../components/Login/Form";
import Navbar from "../components/common/header";
import Link from "next/link";

const Login = ({ successRedirection }) => {
  return (
    <main>
      <div className="container bg-[#f2eadf] min-h-screen">
        <Navbar />
        <div className="px-[0.94rem] pt-[6rem]">
          <div className="pb-6">
            <h1 className="font-sansita-regular font-extrabold text-4xl text-center">
              Login
            </h1>
          </div>
          <Form successRedirection={successRedirection} />
          <div className="flex items-center justify-center my-4">
            <div className="bg-white h-[2px] w-[130px]" />
            <div className="font-semibold px-3">OR</div>
            <div className="bg-white h-[2px] w-[130px]" />
          </div>
          <div className="flex justify-center gap-4 google-btn pb-8">
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID"
              onSuccess={null}
              onFailure={null}
              cookiePolicy={"single_host_origin"}
            />
          </div>
            <div className="text-center py-4">
              <Link href="/register">
                <a>
                  <span className="opacity-50">Don&apos;t have an account?&nbsp;</span>
                  <span className="text-blue-500 font-bold opacity-100">
                    Register here!
                  </span>
                </a>
              </Link>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

export function getServerSideProps(context) {
  console.log(context);
  return {
    props: {
      successRedirection: context.query.destination,
    },
  };
}
