import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";
import register from "../../utils/apiCalls/registerUser";

const Form = () => {
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
    postalCode: Yup.string().required(<RiErrorWarningFill />),
    address: Yup.string().required(<RiErrorWarningFill />),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    postalCode: "",
    address: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const { email, phone, password, postalCode, address } = values;
      values = {
        name: values.firstName + " " + values.lastName,
        email,
        phone,
        password,
        postalCode,
        address,
      };
      try{
        register(values)
      }catch(error){
        console.log(error)
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="px-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="min-h-[42px] w-full my-4 relative mr-4">
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="firstName"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="bg-transparent border-b-2 border-white outline-none min-w-[50%] max-w-full"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="absolute right-0 top-6">
              {formik.errors.firstName}
            </div>
          )}
        </div>
        <div className="min-h-[42px] my-4 relative">
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className="bg-transparent border-b-2 border-white outline-none min-w-[50%] max-w-full"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="absolute right-0 top-6">
              {formik.errors.lastName}
            </div>
          )}
        </div>
      </div>
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
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          type="phone"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="bg-transparent border-b-2 border-white outline-none min-w-[100%] max-w-full"
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="absolute right-0 top-6">{formik.errors.phone}</div>
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
      <div className="min-h-[42px] my-4 relative">
        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="postalCode"
          id="postalCode"
          name="postalCode"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postalCode}
          className="bg-transparent border-b-2 border-white outline-none min-w-[100%]"
        />
        {formik.touched.postalCode && formik.errors.postalCode && (
          <div className="absolute right-0 top-6">
            {formik.errors.postalCode}
          </div>
        )}
      </div>
      <div className="min-h-[42px] my-4 relative">
        <label htmlFor="address">Address:</label>
        <input
          type="address"
          id="address"
          name="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          className="bg-transparent border-b-2 border-white outline-none min-w-[100%]"
        />
        {formik.touched.address && formik.errors.address && (
          <div className="absolute right-0 top-6">{formik.errors.address}</div>
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
