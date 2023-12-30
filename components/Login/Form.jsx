import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";
import { HiEye } from "react-icons/hi2";
import { HiEyeOff } from "react-icons/hi";
import axios from "axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useState } from "react";
import Link from "next/link";
import login from "../../pages/api/controller/loginUser";
import GoogleLogin from "react-google-login";

const Form = ({ successRedirection }) => {
  const [hide, setHide] = useState(true);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(<RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    password: Yup.string()
      .min(6, <RiErrorWarningFill />)
      .max(40, <RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/login", values);

        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", JSON.stringify(response.data.token));
          Cookies.set("token", JSON.stringify(response.data.token), {
            expires: 2,
          });
          toast.success(response.data.message);
          router.push("" + successRedirection);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="px-2 flex flex-col items-center"
    >
      <div className="min-h-[42px] max-w-[100%] my-4 relative">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email Address"
          className="bg-white outline-none min-w-[32rem] max-w-full rounded-lg py-2 px-4"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="absolute right-1 top-9">{formik.errors.email}</div>
        )}
      </div>

      <div className="min-h-[42px] max-w-[100%] my-4 relative">
        <label htmlFor="password">Password:</label>
        <div className="relative">
          <input
            type={hide ? "password" : "text"}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            className="bg-white outline-none min-w-[32rem] rounded-lg py-2 px-4"
          />
          {hide ? (
            <HiEye
              className="absolute top-3 right-6"
              onClick={() => setHide(false)}
            />
          ) : (
            <HiEyeOff
              className="absolute top-3 right-6"
              onClick={() => setHide(true)}
            />
          )}
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="absolute right-1 top-9">{formik.errors.password}</div>
        )}
      </div>
      <div className="w-[32rem]">
        <Link href="/forget-password">
          <a className="text-[#A86549] underline flex justify-end font-semibold">
            Forgot Password?{" "}
          </a>
        </Link>
      </div>
      <button
        type="submit"
        className="bg-[#A86549] w-[32rem] py-3 text-white font-semibold text-md my-3 rounded-lg"
      >
        Continue
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
        <div className="font-semibold px-3">New to 2512?</div>
        <div className="bg-white h-[2px] w-[130px]" />
      </div>
      <div className="my-3 w-[32rem]">
        <Link href="/register">
          <a>
            <span className="font-bold text-center hidden lg:block rounded-xl bg-white py-2">
              Create your account{" "}
            </span>
          </a>
        </Link>
      </div>
    </form>
  );
};

export default Form;
