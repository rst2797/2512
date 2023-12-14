import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer.jsx";
import SectionOne from "../../components/Collection/SectionOne.jsx";
import SectionTwo from "../../components/Category/SectionTwo.jsx";
import SectionThree from "../../components/Category/SectionThree.jsx";
import axios from "axios";

const Home = ({products}) => {
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
        <SectionTwo />
        <SectionThree />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:4545/api/get-all-products");
  console.log(res.data);
  return {
    props: {
      products: res.data.products,
    },
  };
};
