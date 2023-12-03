import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer.jsx";
import SectionOne from "../components/Story/SectionOne.jsx";
import SectionTwo from "../components/Story/SectionTwo";
import SectionThree from "../components/Story/SectionThree";
import SectionFour from "../components/Story/SectionFour";
import SectionFive from "../components/Story/SectionFive";

const Story = () => {
  return (
    <main>
      <Head>
        <title>
          Embark on Our Journey | Explore the Story Behind 2512&apos;s
          Sustainable Fashion
        </title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Embark on Our Journey | Explore the Story Behind 2512's Sustainable Fashion"
        />
        <meta
          property="og:description"
          content="Dive into the narrative behind www.2512.in – where sustainability meets style. Explore our story, unveiling the ethos of our organic, gender-inclusive fashion brand."
        />
        <meta property="og:url" content="https://www.2512.in/our-story" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Dive into the narrative behind www.2512.in – where sustainability meets style. Explore our story, unveiling the ethos of our organic, gender-inclusive fashion brand."
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/our-story" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container min-h-screen bg-[#f2eadf] relative">
        <SectionOne>
          <Navbar />
        </SectionOne>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <Footer />
      </div>
    </main>
  );
};

export default Story;
