import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [hide, setHide] = useState(true);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(<RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
  });

  const initialValues = {
    email: "",
  };

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/forget-password", values);
        
        if (response.data.success) {
          toast.success("Reset password link has been sent to email...");
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
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="bg-transparent border-b-2 border-white outline-none min-w-[100%] max-w-full p-2 rounded-md"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="absolute right-0 top-6">{formik.errors.email}</div>
        )}
      </div>
      <button
        type="submit"
        className="bg-[#A86549] w-full py-2 text-white font-semibold text-xl my-3 rounded-md"
      >
        Submit
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
