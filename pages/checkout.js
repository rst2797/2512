import React, { useEffect, useState } from "react";
import ProceedCheckout from "../components/view-checkout/ProceedCheckout";
import { useCart } from "react-use-cart";
import Navbar from "../components/common/header";
import Image from "next/image";
import Footer from "../components/common/footer";
import axios from "axios";

const Checkout = () => {
  const { items } = useCart();
  const [userData, setUserData] = useState(null);
  const [updatedItems, setUpdatedItems] = useState([]);
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
    console.log(items);
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

    console.log("Current Date:", formattedCurrentDate);
    console.log("Date 4 Days Later:", formattedFiveDaysLater);

    return formattedFiveDaysLater;
  };
  return (
    <main className="bg-[#F4E9DF] min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-[1450px] pt-24">
        <h1 className="font-sansita-regular pb-4 px-4 lg:px-0">Checkout</h1>
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
                  <tr className="text-start">
                    <td className="py-3">Delivery Address</td>
                    <td className="py-3">{userData?.address}</td>
                  </tr>
                </tbody>
              </table>
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
                  <Image src={ele.images[0]} alt="" width={80} height={100} />
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
                <Image src={ele.images[0]} alt="" width={120} height={150} />
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
                  <h4 className="text-xs font-semibold line-through">₹1399</h4>
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
      <Footer />
    </main>
  );
};

export default Checkout;
