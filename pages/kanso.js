import React from "react";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer";
import SectionOne from "../components/Kanso/SectionOne.jsx";
import SectionTwo from "../components/Kanso/SectionTwo.jsx";
import SectionThree from "../components/Kanso/SectionThree.jsx";
import Head from "next/head";
const Kanso = () => {
  return (
    <>
      <Head>
        <title>Kanso Collection: Timeless Simplicity by 2512</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kanso Collection: Timeless Simplicity by 2512"
        />
        <meta
          property="og:description"
          content="Experience Kanso at www.2512.in – where simplicity meets sophistication. Explore our latest collection, blending timeless design with modern style. Elevate your wardrobe. #2512Fashion #KansoCollection"
        />
        <meta property="og:url" content="https://www.2512.in/kanso" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Experience Kanso at www.2512.in – where simplicity meets sophistication. Explore our latest collection, blending timeless design with modern style. Elevate your wardrobe. #2512Fashion #KansoCollection"
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/kanso" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <SectionOne>
          <Navbar />
        </SectionOne>
        <SectionTwo />
        <SectionThree />
        <Footer />
      </main>
    </>
  );
};

export default Kanso;
