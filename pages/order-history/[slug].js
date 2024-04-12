import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer";
import Order from "../../components/DeliveryReturns/OrderCard.jsx";
import axios from "axios";
import Cookies from "cookies";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DeliveryReturns = ({ orders, success, newOrder }) => {
  const [user, setUser] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (newOrder) {
      toast.success("Order Placed Successfully...");
    }
    if (!success) {
      router.push("/login?destination=/");
    }
    setUser(localStorage.getItem("user"));
  }, []);
  return (
    <div className="bg-[#f2eadf] ">
      <main className="mx-auto max-w-[1450px]">
        <div className="pt-[.94rem] relative lg:px-20">
          {success && (
            <>
              <Head>
                <title>
                  Sustainable & Stylish Clothing | 2512: Organic
                  Gender-Inclusive Fashion
                </title>
                <meta property="og:type" content="website" />
                <meta
                  property="og:title"
                  content="Sustainable & Stylish Clothing | 2512: Organic Gender-Inclusive Fashion"
                />
                <meta
                  property="og:description"
                  content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
                />
                <meta property="og:url" content="https://www.2512.in/" />
                <meta property="og:image" content="/icons/favicon.ico" />
                <meta
                  name="description"
                  content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
                />
                <meta
                  property="twitter:creator"
                  content="1225 | PACCHIS BARAH"
                />
                <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

                <link rel="icon" href="/icons/favicon.ico" />
                <link rel="canonical" href="https://www.2512.in/" />
                <link rel="icon" href="/icons/favicon.ico" />
              </Head>
              <Navbar />
              <h1 className="font-sansita-regular !text-[2rem] lg:!text-[2.5rem] pb-[.94rem] px-[7rem] pt-16 text-[#2F2E2D] !font-[700]">
                Order History
              </h1>
              <Order orders={orders} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryReturns;

const getPresignedUrl = async (key, image) => {
  try {
    const res = await axios.get(
      `https://www.2512.in/api/get-profile-picture-signedurl/${key}/${image}`
    );
    return res.data.url;
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    throw error;
  }
};

export const getServerSideProps = async (context) => {
  try {
    const cookies = new Cookies(context.req, context.res);
    const temp = cookies.get("token");
    const token = temp?.split("%22")[1];

    const userId = context.query.slug;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const res = await axios.get(
      `https://www.2512.in/api/get-user-orders/${userId}`,
      { headers, withCredentials: true }
    );

    if (res.data.success) {
      const ordersWithPresignedUrls = await Promise.all(
        res.data.orders.map(async (order) => {
          const ordersWithPresignedImages = await Promise.all(
            order.items.map(async (item) => {
              if (
                item.images[0].includes("https://s3") &&
                item.images[0].includes("x-id=GetObject")
              ) {
                const presignedUrl = await getPresignedUrl(
                  item.images[0]
                    .split("web.pacchisbarah.profile-pictures/")[1]
                    .split("?")[0]
                    .split("/")[0],
                  item.images[0]
                    .split("web.pacchisbarah.profile-pictures/")[1]
                    .split("?")[0]
                    .split("/")[1]
                );
                item.images[0] = presignedUrl;
              }
              return item;
            })
          );
          return { ...order, items: ordersWithPresignedImages };
        })
      );

      return {
        props: {
          orders: ordersWithPresignedUrls,
          success: true,
          newOrder: context.query?.newOrder ?? false,
        },
      };
    } else {
      return {
        props: {
          success: false,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        success: false,
      },
    };
  }
};
