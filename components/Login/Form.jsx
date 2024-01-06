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
import { ThreeDots } from "react-loader-spinner";

const Form = ({ successRedirection }) => {
  const [hide, setHide] = useState(true);
  const [login, setLogin] = useState(false);
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
        setLogin(true);
        const response = await axios.post("/api/login", values);

        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", JSON.stringify(response.data.token));
          Cookies.set("token", JSON.stringify(response.data.token), {
            expires: 2,
          });
          toast.success(response.data.message);
          console.log(
            response.data.user._id === "65856027c169c5523ff9462e",
            response.data.user.role === "ADMIN"
          );
          if (
            response.data.user._id === "65856027c169c5523ff9462e" &&
            response.data.user.role === "ADMIN"
          ) {
            return router.push("/admin/orders");
          } else {
            router.push("" + successRedirection);
          }
        } else {
          toast.error(response.data.message);
          setLogin(false);
        }
      } catch (error) {
        setLogin(false);
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="px-2 flex flex-col items-center"
    >
      <div className="lg:min-h-[42px] w-full lg:w-auto lg:max-w-[100%] my-4 relative">
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
          className="bg-white outline-none min-w-full lg:min-w-[32rem] max-w-full rounded-lg py-2 px-4"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="absolute right-1 top-9">{formik.errors.email}</div>
        )}
      </div>

      <div className="lg:min-h-[42px] w-full lg:w-auto lg:max-w-[100%] my-4 relative">
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
            className="bg-white outline-none min-w-full lg:min-w-[32rem] rounded-lg py-2 px-4"
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
      <div className="w-full lg:w-[32rem]">
        <Link href="/forget-password">
          <a className="text-[#A86549] underline flex justify-end font-semibold">
            Forgot Password?{" "}
          </a>
        </Link>
      </div>
      <button
        type="submit"
        className="bg-[#A86549] w-full lg:w-[32rem] flex justify-center py-3 text-white font-semibold text-md my-3 rounded-lg overflow-y-hidden"
      >
        {login ? (
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
          "Continue"
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
        <div className="font-semibold px-3">New to 2512?</div>
        <div className="bg-white h-[2px] w-[130px]" />
      </div>
      <div className="my-3 w-full lg:w-[32rem]">
        <Link href="/register">
          <a>
            <span className="font-bold text-center block rounded-lg bg-white py-3">
              Create your account{" "}
            </span>
          </a>
        </Link>
      </div>
    </form>
  );
};

export default Form;