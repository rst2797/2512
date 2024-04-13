import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer.jsx";
import SectionOne from "../components/Home/SectionOne.jsx";
import SectionTwo from "../components/Home/SectionTwo.jsx";
import SectionFour from "../components/Home/SectionFour.jsx";
import SectionFive from "../components/Home/SectionFive.jsx";
import SectionSix from "../components/Home/SectionSix.jsx";
import { rediss } from "../utils/redis";
import axios from "axios";
const Home = ({ products }) => {
  return (
    <main>
      <Head>
        <title>
          Sustainable & Stylish Clothing | 2512: Organic Gender-Inclusive
          Fashion
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
        <meta
          property="og:image"
          content="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/our-story/story_1.png"
        />
        <meta
          name="description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="canonical" href="https://www.2512.in/" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link
          rel="preload"
          href="/images/collage/home.png"
          as="image"
          type="image/*"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container lg:mx-0 min-h-screen bg-[#f2eadf] relative">
        <Navbar position={true} />
        <SectionOne />
        <SectionTwo products={products} />
        <SectionFour />
        <SectionFive />
        {/* <SectionSix /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;

const getPresignedUrls = async (key, file) => {
  try {
    const res = await axios.get(
      `https://www.2512.in/api/get-profile-picture-signedurl/${key}/${file}`
    );

    return res.data.url;
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    throw error;
  }
};
export async function getServerSideProps() {
  try {
    const cachedData = await rediss.get("products");
    const parsedCache = JSON.parse(cachedData);

    if (!parsedCache) {
      const res = await axios.get(`https://www.2512.in/api/get-all-products`);

      const products = await Promise.all(
        res.data.products.map(async (product) => {
          let images = [];

          await Promise.all(
            product.images.map(async (img) => {
              if (img.includes("https://s3")) {
                images.push(img);
              } else {
                const presigned = await getPresignedUrls("products-image", img);
                images.push(presigned);
              }
            })
          );

          return { ...product, images };
        })
      );

      await rediss.set("products", JSON.stringify({ products }));

      return {
        props: {
          products,
        },
      };
    }

    return {
      props: {
        products: parsedCache.products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
