import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer.jsx";
import SectionOne from "../components/Sustainability/SectionOne.jsx";
import SectionTwo from "../components/Sustainability/SectionTwo.jsx";
import SectionThree from "../components/Sustainability/SectionThree.jsx";

const Story = () => {
  return (
    <main>
      <Head>
        <title>Sustainability at 2512: Ethical Fashion Choices</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sustainability at 2512: Ethical Fashion Choices"
        />
        <meta
          property="og:description"
          content="Discover sustainability at www.2512.in – where fashion meets responsibility. Explore our ethical choices in organic, gender-inclusive fashion. Join us in making a positive impact. #2512Fashion #EthicalStyle"
        />
        <meta property="og:url" content="https://www.2512.in/sustainability" />
        <meta property="og:image" content="/icons/favicon.ico" />
        <meta
          name="description"
          content="Discover sustainability at www.2512.in – where fashion meets responsibility. Explore our ethical choices in organic, gender-inclusive fashion. Join us in making a positive impact. #2512Fashion #EthicalStyle"
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/sustainability" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link
          rel="preload"
          href="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/sustainability/Mask+group.png"
          as="image"
          type="image/*"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container min-h-screen bg-[#f2eadf] relative">
        <SectionOne>
          <Navbar />
        </SectionOne>
        <SectionTwo />
        {/* <SectionThree /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Story;
