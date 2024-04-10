import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { useRouter } from "next/router";
import Cookies from "cookies";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer";

const Order = ({ totalPrice, orderId, userId, token, deliveryAddress }) => {
  const router = useRouter();
  const shipOrder = async () => {
    const userResponse = await axios.get(`/api/admin/get-user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    userResponse.data.user = {
      ...userResponse.data.user,
      postalCode: deliveryAddress.postal_code,
      address: `${deliveryAddress.addressline1} - ${deliveryAddress.addressline1} - ${deliveryAddress.landmark}`,
    };
    const orderResponse = await axios.get(`/api/admin/get-order/${orderId}`);

    const shippingDetails = {
      order: orderResponse.data.order,
      user: userResponse.data.user,
      totalPrice,
      postalCode: deliveryAddress.postal_code,
      addressline1: deliveryAddress.addressline1,
      addressline2: deliveryAddress.addressline2,
      landmark: deliveryAddress.landmark,
    };

    return await axios.post("/api/ship-order", shippingDetails).then(() => {
      axios.post(`/api/order-confirmation`, {
        email: userResponse.data.user.email,
        customerName: userResponse.data.user.name,
      });
      router.push(`/order-history/${userId}?newOrder=true`);
    });
  };
  useEffect(() => {
    if (!token) {
      router.push("/login?destination=/shop/tshirt");
    }
    shipOrder();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-[#F4E9DF]">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          strokeColor="#A86549"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h1 className="font-bold text-[#2F2E2D] text-center font-sansita-regular !text-xl">
          Hang Tight <br /> While 2512 Creating Your Shipment...
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Order;

export const getServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const serializedToken = cookies.get("token");
  const token = serializedToken?.split("%22")[1];
  const { query } = context;

  return {
    props: {
      city: "",
      state: "",
      country: "",
      orderId: context.query.slug[0],
      userId: context.query.slug[1],
      totalPrice: context.query.slug[2],
      token: token ?? false,
      deliveryAddress: { query },
    },
  };
};
