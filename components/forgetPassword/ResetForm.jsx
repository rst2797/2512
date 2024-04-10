import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import resetPassword from "../../pages/api/controller/resetPassword";

const Form = ({ token }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const validationSchema = Yup.object({
    password: Yup.string().required(<RiErrorWarningFill />),
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
        const response = await axios.post("/api/reset-password", values);

        if (response.data.success) {
          toast.success(response.data.message);
          router.push("" + successRedirection);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(response.data.message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="px-2">
      <div className="min-h-[42px] my-4 relative">
        <label htmlFor="password">New Password</label>
        <br />
        <div className="relative">
          <input
            type={hidePassword ? "password" : "text"}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="bg-transparent border-b-2 border-white outline-none min-w-[100%] max-w-full"
          />
          <div
            className="absolute right-6 top-0 cursor-pointer"
            onClick={() => setHidePassword(!hidePassword)}
          >
            {hidePassword ? <HiEye /> : <HiEyeOff />}
          </div>
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="absolute right-0 top-6">{formik.errors.password}</div>
        )}
      </div>
      <div className="min-h-[42px] my-4 relative">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <div className="relative">
          <input
            type={hideConfirmPassword ? "password" : "text"}
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="bg-transparent border-b-2 border-white outline-none min-w-[100%] max-w-full"
          />
          <div
            className="absolute right-6 top-0 cursor-pointer"
            onClick={() => setHideConfirmPassword(!hideConfirmPassword)}
          >
            {hideConfirmPassword ? <HiEye /> : <HiEyeOff />}
          </div>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="absolute right-0 top-6">
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="bg-[#A86549] w-full py-2 text-white font-semibold text-xl my-3"
      >
        Reset Password
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
  );
};

export default Form;
