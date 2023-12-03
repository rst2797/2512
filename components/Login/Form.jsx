import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";

const Form = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required(<RiErrorWarningFill />),
    lastName: Yup.string().required(<RiErrorWarningFill />),
    email: Yup.string()
      .email(<RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    phone: Yup.string()
      .matches(/^[0-9]+$/, <RiErrorWarningFill />)
      .min(10)
      .max(10)
      .required(<RiErrorWarningFill />),
    message: Yup.string().required(<RiErrorWarningFill />),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      values = { ...values, name: values.firstName + " " + values.lastName };
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
        <label htmlFor="phone">Password:</label>
        <input
          type="password"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="bg-transparent border-b-2 border-white outline-none min-w-[100%]"
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="absolute right-0 top-6">{formik.errors.phone}</div>
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
