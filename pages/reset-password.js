import React from "react";
import Form from "../components/ResetPass/Form.jsx";
import Navbar from "../components/common/header";
import Image from "next/image";

const ResetPass = ({token}) => {
  return (
    <main>
      <div className="container bg-[#f2eadf] min-h-screen ">
        <Navbar />
        <div className="pt-[4rem]">
          <div className="2xl:grid grid-cols-3">
            <div className="hidden lg:block h-[92vh] overflow-y-hidden">
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
                  Reset Password
                </h1>
              </div>
              <Form token={token} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPass;

export const getServerSideProps = async (context) => {
  const { token } = context.query;
  return {
    props: { token },
  };
};
