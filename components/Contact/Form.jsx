import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { RiErrorWarningFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const Form = ({ phoneCodes }) => {
  const [selectedPhoneCode, setSelectedPhoneCode] = useState("+91");
  const router = useRouter();
  const validationSchema = Yup.object({
    name: Yup.string().required(<RiErrorWarningFill />),
    email: Yup.string()
      .email(<RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    phone: Yup.string().required(<RiErrorWarningFill />),
    message: Yup.string().required(<RiErrorWarningFill />),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (values.message[0] === " ") {
          throw new Error("Invalid message!!!");
        } else {
          values = {
            ...values,
            phone: `${selectedPhoneCode} ${values.phone}`,
          };
          const response = await axios.post(`/api/contact-us`, values);
          if (response.data.success) {
            axios.post(`/api/contact-us-mail`, {
              customerName: values.name,
              email: values.email,
            });
          }
          toast.success(response.data.message);
          resetForm();
        }
      } catch (error) {
        // Handle errors from both the try-catch block and axios request
        toast.error(error.message);
      }
    },
  });

  return (
    <div className="w-full">
      <form onSubmit={formik.handleSubmit} className="lg:px-2">
        <div className="w-full my-4 lg:my-1 relative">
          <label className="font-semibold" htmlFor="name">
            Your Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="py-2 px-4 bg-transparent border-b-2 border-white outline-none bg-white rounded-xl lg:py-2 min-w-full max-w-full"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="absolute top-9 right-2">{formik.errors.name}</div>
          )}
        </div>
        <div className="my-4 relative">
          <label className="font-semibold" htmlFor="phone">
            Mobile number
          </label>
          <br />
          <div className="flex">
            <select
              className="font-semibold text-xs py-2 w-min rounded-xl lg:mr-4 text-center"
              name="phoneCode"
              onChange={(e) => setSelectedPhoneCode(e.target.value)}
            >
              <option>IN&nbsp;+91</option>
              {phoneCodes?.map((ele, index) => (
                <option key={index}>
                  {ele.code}&nbsp;{ele.phoneCode}
                </option>
              ))}
            </select>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Mobile number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="py-2 px-4 ml-2 bg-transparent border-b-2 border-white outline-none bg-white rounded-xl lg:py-2 w-full max-w-full"
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className="absolute top-9 right-2">{formik.errors.phone}</div>
          )}
        </div>
        <div className="my-4 relative">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Adress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="py-2 px-4 bg-transparent border-b-2 border-white outline-none bg-white rounded-xl lg:py-2 min-w-[100%] max-w-full"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="absolute top-9 right-2">{formik.errors.email}</div>
          )}
        </div>

        <div className="my-4 relative">
          <label className="font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            type="message"
            id="message"
            name="message"
            placeholder="Type here..."
            rows={3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="resize-none py-2 px-4 bg-transparent border-b-2 border-white outline-none bg-white rounded-xl lg:py-2 min-w-[100%]"
          />
          {formik.touched.message && formik.errors.message && (
            <div className="absolute top-9 right-2">
              {formik.errors.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#A86549] w-full py-2 text-white font-semibold text-md rounded-xl"
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
