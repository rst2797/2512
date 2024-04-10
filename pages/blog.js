import React from "react";
import Head from "next/head";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer";
import Carousel from "../components/Blog/Carousel";
import BlogCards from "../components/Blog/BlogCards.jsx";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import SectionSix from "../components/Home/SectionSix";
import axios from "axios";
import Link from "next/link";

const fetchBlogs = async () => {
  try {
    const blogs = await axios.get(
      `${process.env.NEXT_API_BASE_URL}/api/get-all-blogs`
    );
    // const blogs = await axios.get(`${process.env.NEXT_API_BASE_URL}/api/get-all-blogs`);
    if (blogs.data.success) {
      return blogs.data;
    }
    throw new Error(blogs.data.message);
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

const Blog = ({ blogs }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev !== 0 ? prev - 1 : 3));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev !== 3 ? prev + 1 : 0));
  };

  useEffect(() => {
  }, [activeSlide, blogs]);
  return (
    <main className="min-h-screen bg-[#f2eadf]">
      <Head>
        <title>2512 - Organic and Sustainable T-Shirts Blog</title>
        <meta
          name="description"
          content={
            "Explore our blog for the latest insights on organic and sustainable fashion. Stay updated with 2512's eco-friendly initiatives."
          }
        />
        <meta
          property="og:title"
          content="2512 - Organic and Sustainable T-Shirts Blog"
        />
        <meta
          property="og:description"
          content={
            "Explore our blog for the latest insights on organic and sustainable fashion. Stay updated with 2512's eco-friendly initiatives."
          }
        />
        <meta property="og:image" content="/icons/favicon.ico" />
        <meta property="og:url" content="https://www.2512.in/blog" />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/blog" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link
          rel="preload"
          href="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/blog/Mask+group+3.png"
          as="image"
          type="image/*"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-[.94rem] py-24 text-[#2F2E2D] bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/blog/Mask+group+3.png')]">
        <Carousel
          blogs={blogs}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
        <div className="flex flex-col justify-center text-white">
          <h1 className="font-sansita-regular text-center lg:text-start !text-3xl !tracking-widest pt-8 pb-4">
            {blogs.blogs[activeSlide].title}
          </h1>
          <div className="hidden lg:block">
            {blogs.blogs[activeSlide].blogsummary}
          </div>
          <div className="lg:hidden">
            <p className="text-lg text-center">
              As we step into 2024, the fashion industry continues to undergo a
              profound transformation, with sustainability taking center stage.
              This shift reflects a collective consciousness towards more
              responsible{" "}
            </p>
          </div>
          <Link href={`/blog/${blogs.blogs[activeSlide]._id}`}>
            <a>
              <div className="flex justify-center lg:justify-normal py-4">
                <button className="flex bg-[#F4E9DF] text-[#2F2E2D] w-fit rounded-lg font-bold text-xs py-2 px-4">
                  Continue Reading{" "}
                  <IoIosArrowRoundForward className="text-lg" />
                </button>
              </div>
            </a>
          </Link>
          <div className="lg:flex pt-12 hidden">
            <IoIosArrowRoundBack
              onClick={() => handlePrev()}
              className="text-4xl text-black bg-[#F4E9DF] p-2 mr-2 rounded-full"
            />
            <IoIosArrowRoundForward
              onClick={() => handleNext()}
              className="text-4xl text-black bg-[#F4E9DF] p-2 ml-2 rounded-full"
            />
          </div>
        </div>
        {/* <div className="flex flex-col justify-center text-white">
          <h1 className="font-sansita-regular text-center lg:text-start !text-3xl !tracking-widest pt-8 pb-4">
            SUSTAINABLE FASHION TRENDS 2024
          </h1>
          <div className="hidden lg:block">
            <p className="font-lato-regular !leading-7 pr-12 !font-[500]">
              As we step into 2024, the fashion industry continues to undergo a
              profound transformation, with <br /> sustainability taking center
              stage. This shift reflects a collective consciousness towards more{" "}
              <br />
              responsible choices and a commitment to a greener, more ethical
              future. In this blog, we explore <br /> the Sustainable Fashion
              Trends that are set to redefine your wardrobe in 2024, offering a{" "}
              <br /> harmonious blend of style, ethics, and environmental
              responsibility.
            </p>
            <ol className="list-decimal px-5 py-5 font-lato-regular !leading-7 text-justify !font-[500]">
              <li>
                Circular Fashion: Closing the Loop on Waste Circular fashion
                emerges as a transformative trend in the fashion landscape of
                2024, acting
              </li>
            </ol>
          </div>
          <div className="lg:hidden">
            <p className="text-lg text-center">
              As we step into 2024, the fashion industry continues to undergo a
              profound transformation, with sustainability taking center stage.
              This shift reflects a collective consciousness towards more
              responsible{" "}
            </p>
          </div>
          <div className="flex justify-center lg:justify-normal py-4">
            <button className="flex bg-[#F4E9DF] text-[#2F2E2D] w-fit rounded-lg font-bold text-xs py-2 px-4">
              Continue Reading <IoIosArrowRoundForward className="text-lg" />
            </button>
          </div>
          <div className="lg:flex pt-12 hidden">
            <IoIosArrowRoundBack
              onClick={() => handlePrev()}
              className="text-4xl text-black bg-[#F4E9DF] p-2 mr-2 rounded-full"
            />
            <IoIosArrowRoundForward
              onClick={() => handleNext()}
              className="text-4xl text-black bg-[#F4E9DF] p-2 ml-2 rounded-full"
            />
          </div>
        </div> */}
      </div>
      <BlogCards />
      <SectionSix />
      <Footer />
    </main>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const blogs = await fetchBlogs();
  return {
    props: {
      blogs,
    },
  };
};
