import React from "react";
import Head from "next/head";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer";
import Carousel from "../components/Blog/Carousel";

const Blog = () => {
  return (
    <main className="min-h-screen bg-[#f2eadf]">
      <Head>
        <title>2512 - Organic and Sustainable T-Shirts Blog</title>
        <meta
          name="description"
          content="Explore our blog for the latest insights on organic and sustainable fashion. Stay updated with 2512's eco-friendly initiatives."
        />
        <meta
          property="og:title"
          content="2512 - Organic and Sustainable T-Shirts Blog"
        />
        <meta
          property="og:description"
          content="Explore our blog for the latest insights on organic and sustainable fashion. Stay updated with 2512's eco-friendly initiatives."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://www.2512.in/blog" />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="px-[.94rem] lg:px-20 py-24 text-[#2F2E2D]">
        <Carousel />
      </div>
      <Footer />
    </main>
  );
};

export default Blog;
