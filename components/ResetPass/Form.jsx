import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
import Link from "next/link";

const ResetPasswordForm = ({ token }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [resettingPassword, setResettingPassword] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, <RiErrorWarningFill />)
      .max(40, <RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required(<RiErrorWarningFill />),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setResettingPassword(true);

        axios.post(
          `/api/update-password`,
          {
            password: values.password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then(res=>{
            console.log(res.data)
            toast.success(res.data.message);
        })

        // Redirect to login or any other page
        router.push("/login?destination=/");
      } catch (error) {
        setResettingPassword(false);
        console.error("Error resetting password:", error);
        toast.error("Error resetting password. Please try again.");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="px-2 flex flex-col items-center"
    >
      <div className="lg:min-h-[42px] w-full lg:w-auto lg:max-w-[100%] my-4 relative">
        <label htmlFor="password">New Password:</label>
        <div className="relative">
          <input
            type={hidePassword ? "password" : "text"}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="New Password"
            className="bg-white outline-none min-w-full lg:min-w-[32rem] rounded-lg py-2 px-4"
          />
          {hidePassword ? (
            <HiEye
              className="absolute top-3 right-6"
              onClick={() => setHidePassword(false)}
            />
          ) : (
            <HiEyeOff
              className="absolute top-3 right-6"
              onClick={() => setHidePassword(true)}
            />
          )}
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="absolute right-1 top-9">{formik.errors.password}</div>
        )}
      </div>

      <div className="lg:min-h-[42px] w-full lg:w-auto lg:max-w-[100%] my-4 relative">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <div className="relative">
          <input
            type={hideConfirmPassword ? "password" : "text"}
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Confirm Password"
            className="bg-white outline-none min-w-full lg:min-w-[32rem] rounded-lg py-2 px-4"
          />
          {hideConfirmPassword ? (
            <HiEye
              className="absolute top-3 right-6"
              onClick={() => setHideConfirmPassword(false)}
            />
          ) : (
            <HiEyeOff
              className="absolute top-3 right-6"
              onClick={() => setHideConfirmPassword(true)}
            />
          )}
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="absolute right-1 top-9">
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#A86549] w-full lg:w-[32rem] flex justify-center py-3 text-white font-semibold text-md my-3 rounded-lg overflow-y-hidden"
      >
        {resettingPassword ? (
          <div className="max-h-[1.5rem]">
            <ThreeDots
              visible={true}
              height="30"
              width="30"
              color="#ffff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          "Reset Password"
        )}
      </button>

      <div className="p-4">
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          style={{ marginBottom: "1rem" }}
        />
      </div>
      <div className="flex items-center justify-center my-4">
        <div className="bg-white h-[2px] w-[130px]" />
        <div className="font-semibold px-3">Remember your password?</div>
        <div className="bg-white h-[2px] w-[130px]" />
      </div>
      <div className="my-3 w-full lg:w-[32rem]">
        <Link href="/login">
          <a>
            <span className="font-bold text-center block rounded-lg bg-white py-3">
              Login
            </span>
          </a>
        </Link>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
