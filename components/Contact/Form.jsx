import React from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { RiErrorWarningFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";

const Form = ({ phoneCodes }) => {
  const router = useRouter();
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
    onSubmit: async (values) => {
      const { email, phone, password, postalCode, address } = values;
      values = {
        name: values.firstName + " " + values.lastName,
        email,
        phone,
        password,
        postalCode,
        address,
        currency: phoneCodes.currency,
      };
      try {
        const res = await axios.post("/api/register", values);
        if (res.success) {
          toast.success(res.message);
          localStorage.setItem("user", JSON.stringify(res.user));
          localStorage.setItem("token", res.token);
          Cookies.set("token", JSON.stringify(response.data.token), {
            expires: 2,
          });
          router.push(`/profile/${res.user._id}`);
        } else {
          throw res.message;
        }
      } catch (error) {
        console.log("Error caught:-  ", error);
        toast.error(error);
      }
    },
  });
  return (
    <div className="flex justify-center">
      <div className="w-[70%]">
        <form onSubmit={formik.handleSubmit} className="px-2">
          <div className="w-full my-4 lg:my-1 relative mr-4">
            <label className="font-semibold" htmlFor="firstName">
              Your Name
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
              className="px-4 bg-transparent border-b-2 border-white outline-none lg:bg-white rounded-xl lg:py-2 min-w-full max-w-full"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div className="my-4 relative">
            <label className="font-semibold" htmlFor="phone">
              Mobile number
            </label>
            <br />
            <div className="flex">
              <select className="font-semibold text-xs py-2 w-min rounded-xl mr-4">
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
                className="px-4 bg-transparent border-b-2 border-white outline-none lg:bg-white rounded-xl lg:py-2 w-full max-w-full"
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
                {formik.errors.phone}
              </div>
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
              className="px-4 bg-transparent border-b-2 border-white outline-none lg:bg-white rounded-xl lg:py-2 min-w-[100%] max-w-full"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="my-4 relative">
            <label className="font-semibold" htmlFor="address">
              Message
            </label>
            <textarea
              type="address"
              id="address"
              name="address"
              placeholder="Type here..."
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className="resize-none px-4 bg-transparent border-b-2 border-white outline-none lg:bg-white rounded-xl lg:py-2 min-w-[100%]"
            />
            {formik.touched.address && formik.errors.address && (
              <div className="absolute right-0 top-6 lg:top-9 lg:right-2">
                {formik.errors.address}
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
    </div>
  );
};

export default Form;
