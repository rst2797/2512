import React, { useState } from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { RiErrorWarningFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { HiEye } from "react-icons/hi2";
import { HiEyeOff } from "react-icons/hi";

const Form = ({ phoneCodes }) => {
  const router = useRouter();
  const [hide, setHide] = useState(true);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(<RiErrorWarningFill />),
    lastName: Yup.string().required(<RiErrorWarningFill />),
    email: Yup.string()
      .email(<RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    phone: Yup.string()
      .matches(/^[0-9]+$/, <RiErrorWarningFill />)
      .min(10, <RiErrorWarningFill />)
      .max(10, <RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    password: Yup.string()
      .min(6, <RiErrorWarningFill />)
      .max(40, <RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phone: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { email, phone, password, countryCode } = values;
      values = {
        name: values.firstName + " " + values.lastName,
        email,
        phone,
        password,
        currency: phoneCodes.currency,
      };
      try {
        const res = await axios.post("/api/register", values);
        if (res.data.success) {
          toast.success(res.data.message);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);
          Cookies.set("token", JSON.stringify(res.data.token), {
            expires: 2,
          });
          router.push(`/profile/${res.data.user._id}`);
        } else {
          throw new Error(res.data.message);
        }
      } catch (error) {
        if (error.response.data.status)
          toast.error(error.response.data.message);
      }
    },
  });
  return (
    <div className="flex justify-center">
      <form onSubmit={formik.handleSubmit} className="px-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full my-4 lg:my-1 relative mr-4">
            <label className="font-semibold" htmlFor="firstName">
              First Name
            </label>
            <br />
            <input
              type="firstName"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="px-4 bg-transparent border-b-2 border-white outline-none bg-white rounded-lg py-2 min-w-full max-w-full"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div className="my-4 lg:my-1 relative">
            <label className="font-semibold" htmlFor="lastName">
              Last Name
            </label>
            <br />
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="px-4 bg-transparent border-b-2 border-white outline-none bg-white rounded-lg py-2 min-w-full max-w-full"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
                {formik.errors.lastName}
              </div>
            )}
          </div>
        </div>
        <div className="my-4 lg:my-1 relative">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="px-4 bg-transparent border-b-2 border-white outline-none bg-white rounded-lg py-2 min-w-[100%] max-w-full"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="my-4 lg:my-1 relative">
          <label className="font-semibold" htmlFor="phone">
            Phone
          </label>
          <br />
          <div className="flex">
            <select
              id="countryCode"
              name="countryCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.countryCode}
              className="font-semibold text-xs py-2 w-min rounded-lg mr-4"
            >
              {phoneCodes?.map((ele, index) => (
                <option key={index} value={ele.phoneCode}>
                  {ele.code}&nbsp;{ele.phoneCode}
                </option>
              ))}
            </select>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="9876543210"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="px-4 bg-transparent border-b-2 border-white outline-none bg-white rounded-lg py-2 w-[80%] max-w-full"
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
              {formik.errors.phone}
            </div>
          )}
        </div>

        <div className="my-4 lg:my-1 relative">
          <label className="font-semibold" htmlFor="password">
            Password:
          </label>
          <div className="relative">
            <input
              type={hide ? "password" : "text"}
              id="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="px-4 bg-transparent border-b-2 border-white outline-none bg-white rounded-lg py-2 min-w-[100%]"
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
            <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
              {formik.errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#A86549] w-full py-2 text-white font-semibold text-md my-3 lg:my-0 lg:mt-2 rounded-xl"
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
      </form>
    </div>
  );
};

export default Form;
