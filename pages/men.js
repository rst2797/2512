import Head from "next/head";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer.jsx";
import SectionOne from "../components/Category/SectionOne.jsx";
import SectionTwo from "../components/Category/SectionTwo.jsx";
import SectionThree from "../components/Category/SectionThree.jsx";

const Home = () => {
  return (
    <main>
      <Head>
        <title>Men&apos;s Fashion: Elevate Your Style with 2512</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Men's Fashion: Elevate Your Style with 2512"
        />
        <meta
          property="og:description"
          content="Explore men's fashion at www.2512.in – where style meets sustainability. Discover our curated collection, including timeless black tees. Elevate your wardrobe with 2512. #2512Fashion #MensStyle"
        />
        <meta property="og:url" content="https://www.2512.in/men" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Explore men's fashion at www.2512.in – where style meets sustainability. Discover our curated collection, including timeless black tees. Elevate your wardrobe with 2512. #2512Fashion #MensStyle"
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/men" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container bg-[#f2eadf] relative">
        <SectionOne>
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
