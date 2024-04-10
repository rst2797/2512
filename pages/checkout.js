import React, { useEffect, useState } from "react";
import ProceedCheckout from "../components/view-checkout/ProceedCheckout";
import { useCart } from "react-use-cart";
import Navbar from "../components/common/header";
import Image from "next/image";
import Footer from "../components/common/footer";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  postalCode: Yup.string().required("Postal Code is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  addressLine2: Yup.string(),
  landmark: Yup.string(),
});

const initialValues = {
  postalCode: "",
  addressLine1: "",
  addressLine2: "",
  landmark: "",
};

const Checkout = () => {
  const { items } = useCart();
  const [userData, setUserData] = useState(null);
  const [updatedItems, setUpdatedItems] = useState([]);
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
    Promise.all(
      items.map((item) => {
        if (item.imageKey) {
          axios
            .get(
              `${process.env.NEXT_API_BASE_URL}/api/get-profile-picture-signedurl/products-image/${item.imageKey[0]}`
            )
            .then((res) => {
              setUpdatedItems((prev) => [
                ...prev,
                { ...item, images: [res.data.url] },
              ]);
            });
        } else {
          setUpdatedItems((prev) => [...prev, { ...item }]);
        }
      })
    );
  }, []);
  const estimatedDate = () => {
    // Get the current date
    const currentDate = new Date();

    // Calculate the date 4 days later
    const fiveDaysLater = new Date(currentDate);
    fiveDaysLater.setDate(currentDate.getDate() + 4);

    // Format the date as a string (31 Dec 2023)
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedCurrentDate = currentDate.toLocaleDateString(
      "en-US",
      options
    );
    const formattedFiveDaysLater = fiveDaysLater.toLocaleDateString(
      "en-US",
      options
    );
    return formattedFiveDaysLater;
  };

  const handlePostalCodeChange = (event) => {
    const newPostalCode = event.target.value;
    setPostalCode(newPostalCode);

    fetchAddressDetails(newPostalCode);
  };

  const fetchAddressDetails = async (postalCode) => {
    try {
      const response = await axios.get(`/api/get-address`, { postalCode });
      const address = response.predictions[0].description;
      console.log(address);
      setAddress(address);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };
  const router = useRouter();
  const handleSubmit = (values) => {
    const { postalCode, addressLine1, addressLine2, landmark } = values;
    router.push(
      `/viewcheckout?postal_code=${postalCode}&addressline1=${addressLine1}&addressline2=${addressLine2 === "" ? null : addressLine2}&landmark=${landmark === "" ? null : landmark}`
    );
  };
  return (
    <main className="bg-[#F4E9DF] min-h-screen">
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mx-auto max-w-[1450px] pt-24">
              <h1 className="font-sansita-regular pb-4 px-4 lg:px-0">
                Checkout
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 px-4 lg:px-0">
                <div className="col-span-2">
                  {/* Delivery Detail */}
                  <div className="bg-white p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold">Delivery Details</h3>
                    <table className="w-1/2 font-semibold">
                      <tbody>
                        <tr className="text-start">
                          <td className="py-3">Full Name</td>
                          <td className="py-3">{userData?.name}</td>
                        </tr>
                        <tr className="text-start">
                          <td className="py-3">Mobile No.</td>
                          <td className="py-3">{userData?.phone}</td>
                        </tr>
                        <tr className="text-start">
                          <td className="py-3">Email ID</td>
                          <td className="py-3">{userData?.email}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <table className="font-semibold border-t border-black">
                        <tbody>
                          <tr className="text-start">
                            <td className="py-3 pr-10">Postal Code</td>
                            <td className="py-3">
                              <Field
                                type="text"
                                name="postalCode"
                                placeholder="Postal Code"
                                className={`border-b border-black outline-none placeholder:text-sm ${
                                  errors.postalCode && touched.postalCode
                                    ? "border-red-500"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name="postalCode"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </td>
                          </tr>
                          <tr className="text-start">
                            <td className="py-3 pr-10">Address Line 1</td>
                            <td className="py-3">
                              <Field
                                as="textarea"
                                name="addressLine1"
                                placeholder="Address Line 1"
                                rows={1}
                                cols={22}
                                className={`border-b border-black outline-none placeholder:text-sm ${
                                  errors.addressLine1 && touched.addressLine1
                                    ? "border-red-500"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name="addressLine1"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </td>
                          </tr>
                          <tr className="text-start">
                            <td className="py-3 pr-10">Address Line 2</td>
                            <td className="py-3">
                              <Field
                                as="textarea"
                                name="addressLine2"
                                placeholder="Address Line 2 (Optional)"
                                rows={1}
                                cols={22}
                                className="border-b border-black outline-none placeholder:text-sm"
                              />
                            </td>
                          </tr>
                          <tr className="text-start">
                            <td className="py-3 pr-10">Landmark</td>
                            <td className="py-3">
                              <Field
                                type="text"
                                name="landmark"
                                placeholder="Landmark (Optional)"
                                className="border-b border-black outline-none placeholder:text-sm"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* <button
                        type="submit"
                        className="btn btn-primary mt-4 bg-[#A86549] px-4 py-2 my-4 font-bold text-sm text-[white] rounded-lg"
                      >
                        Save
                      </button> */}
                    </div>
                  </div>

                  {/* Delivery Estimation */}
                  <div className="bg-white p-6 rounded-xl my-4">
                    <h3 className="text-2xl font-semibold py-2">
                      Delivery Estimates
                    </h3>
                    {updatedItems.map((ele) => (
                      <div
                        className="flex items-center justify-between lg:w-[40%] border-b-[1px] py-2"
                        key={ele.id}
                      >
                        <Image
                          src={ele.images[0]}
                          alt=""
                          width={80}
                          height={100}
                        />
                        <p className="font-semibold">
                          Estimated Delivery by {estimatedDate()}{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Proceed card */}
                <div className="hidden lg:block">
                  <ProceedCheckout items={items} />
                </div>
              </div>

              {/* Order Summary */}
              <div className="px-6 py-2 my-2 ">
                <h3 className="font-lato-regular !text-2xl !font-semibold">
                  Order Summary{" "}
                </h3>
                {updatedItems.map((ele) => (
                  <div
                    className="flex justify-between items-center border-b-[1px] border-[#0000005a] my-2"
                    key={ele.id}
                  >
                    <div className="flex items-center lg:w-[40%] border-b-[1px] py-2">
                      <Image
                        src={ele.images[0]}
                        alt=""
                        width={120}
                        height={150}
                      />
                      <div className="px-4">
                        <h3 className="font-sansita-regular !text-xl lg:!text-2xl">
                          {ele.name}
                        </h3>
                        <div className="font-lato-regular !font-semibold pt-2 !text-[1rem]">
                          Size: {ele.size}
                        </div>
                        <div className="font-lato-regular !text-[1rem] !font-semibold pb-2">
                          Color: {"White"}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-lato-regular !font-semibold">
                        ₹{ele.price}
                      </h2>
                      <div className="flex items-center">
                        <h4 className="text-xs font-semibold line-through">
                          ₹1399
                        </h4>
                        <h5 className="text-xs text-[#FF0909] font-bold pl-2 whitespace-nowrap">
                          30% OFF
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="block lg:hidden">
                  <ProceedCheckout items={items} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <Footer />
    </main>
  );
};

export default Checkout;
