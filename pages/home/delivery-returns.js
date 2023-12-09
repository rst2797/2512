import React from "react";
import BreadCrumb from "../../components/common/BreadcrumbArray";
import Head from "next/head";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer";

const Detail = () => {
  const details = [
    {
      id: 1,
      title: "Returns and Exchange",
      subtitle: "You can return /exchange your orders",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, magna vitae aliquam, odio  pretium mauris, quis iaculis leo neque a mi. Nunc maximus erat felis, blandit egestas nibh semper eget. Fusce tincidunt nisi et dolor venenatis viverra. Pellentesque fermentum fringilla dapibus. Aliquam tincidunt imperdiet dolor, vitae iaculis tortor sagittis ac.A",
    },
    {
      id: 2,
      title: "Delivery",
      subtitle: "Expected delivery of your orders",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, magna vitae aliquam, odio  pretium mauris, quis iaculis leo neque a mi. Nunc maximus erat felis, blandit egestas nibh semper eget. Fusce tincidunt nisi et dolor venenatis viverra. Pellentesque fermentum fringilla dapibus. Aliquam tincidunt imperdiet dolor, vitae iaculis tortor sagittis ac.A",
    },
    {
      id: 3,
      title: "Cancellation of Order",
      subtitle: "Terms of cancellation of your order",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, magna vitae aliquam, odio  pretium mauris, quis iaculis leo neque a mi. Nunc maximus erat felis, blandit egestas nibh semper eget. Fusce tincidunt nisi et dolor venenatis viverra. Pellentesque fermentum fringilla dapibus. Aliquam tincidunt imperdiet dolor, vitae iaculis tortor sagittis ac.A",
    },
  ];
  return (
    <main className="px-[.94rem] min-h-screen bg-[#f2eadf]">
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
      </Head>
      <Navbar />
      <div className="px-[.94rem] text-[#2F2E2D]">
        <BreadCrumb name="Home" category="Delivery Returns & Exchanges" />
        {details.map((ele) => (
          <div className="" key={ele.id}>
            <h1 className="font-sansita-regular !text-[1.5rem] py-0">
              {ele.title}
            </h1>
            <h5 className="pb-[.62rem] border-b-2 border-white !text-[0.875rem] font-semibold font-lato-regular">
              {ele.subtitle}
            </h5>
            <p className="py-[1.88rem] font-sansita-regular !font-thin !text-[0.75rem] !leading-[100%] text-[#2F2E2D]">
              {ele.brief}
            </p>
          </div>
        ))}
      </div>
      <Footer/>
    </main>
  );
};

export default Detail;