import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";

const Form = () => {
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
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
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
          className="bg-transparent border-b-2 border-white outline-none min-w-[100%] max-w-full"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="absolute right-0 top-6">{formik.errors.email}</div>
        )}
      </div>

      <div className="min-h-[42px] my-4 relative">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="bg-transparent border-b-2 border-white outline-none min-w-[100%]"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="absolute right-0 top-6">{formik.errors.password}</div>
        )}
      </div>
      <button
        type="submit"
        className="bg-[#A86549] w-full py-2 text-white font-semibold text-xl my-3"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
