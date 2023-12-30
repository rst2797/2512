import axios from "axios";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer.jsx";
import SectionTwo from "../../components/Category/SectionTwo.jsx";
import SectionOne from "../../components/Collection/SectionOne.jsx";
import SectionThree from "../../components/Category/SectionThree.jsx";
import { rediss } from "../../utils/redis";

const Home = ({ products }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products && products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  return (
    <main>
      <Head>
        <title>Stylish Fashion: Elevate Your Style with 2512</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Stylish Fashion: Elevate Your Style with 2512"
        />
        <meta
          property="og:description"
          content="Explore Stylish fashion at www.2512.in – where style meets sustainability. Discover our curated collection, including timeless black tees. Elevate your wardrobe with 2512. #2512Fashion #MensStyle"
        />
        <meta property="og:url" content="https://www.2512.in/collection" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Explore Stylish fashion at www.2512.in – where style meets sustainability. Discover our curated collection, including timeless black tees. Elevate your wardrobe with 2512. #2512Fashion #MensStyle"
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container bg-[#f2eadf] relative">
        <SectionOne products={products}>
          <Navbar />
        </SectionOne>
        <Footer />
      </div>
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const cachedData = await rediss.get("products");
    const parsedCache = JSON.parse(cachedData);
    if (!parsedCache) {
      const res = await axios.get(
        `${process.env.NEXT_API_BASE_URL}/api/get-all-products`
      );
      await rediss.set("products", JSON.stringify(res.data));
      return {
        props: {
          products: res.data.products,
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
