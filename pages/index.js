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
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/0O9A8802+1.png"
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
        <SectionSix />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const cachedProducts = await rediss.get("products");
  if (cachedProducts)
    return { props: { products: JSON.parse(cachedProducts).products } };
};
