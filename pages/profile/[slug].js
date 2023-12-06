import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/header";
import ProfileOptions from "../../components/Profile/ProfileOptions.jsx";
import Footer from "../../components/common/footer.jsx";
import Image from "next/image";
// import { fetchGraphQLData } from "../utils/graphql/query";
const Profile = () => {
  //   const [close, setClose] = useState(false);
  //   const [products, setProducts] = useState(false);

  //   useEffect(() => {
  //       const fetchData = async () => {
  //         const query = `
  //           {
  //             products(first: 10) {
  //               edges {
  //                 node {
  //                   handle
  //                   id
  //                   description
  //                   title
  //                   tags
  //                   status
  //                   variants(first: 10) {
  //                     edges {
  //                       node {
  //                         availableForSale
  //                         compareAtPrice
  //                         id
  //                         displayName
  //                         createdAt
  //                         price
  //                         title
  //                         sku
  //                       }
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         `;

  //         try {
  //           const data = await fetchGraphQLData(query);
  //           setProducts(data.products.edges);
  //         } catch (error) {
  //           // Handle error
  //         }
  //       };

  //       fetchData();
  //     }, [products]);
  return (
    <main className="container min-h-screen bg-[#f2eadf] relative px-[.94rem]">
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
        <meta property="og:url" content="https://www.2512.in/profile/darshan" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/profile/darshan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pt-24 flex flex-col items-center justify-center">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/profile.JPG"
          alt=""
          width={100}
          height={100}
          className="rounded-full"
        />
        <h3 className="font-sansita-regular !text-[1.5rem] pt-[.88rem] text-[#2F2E2D]">
          Juliya Benz
        </h3>
      </div>
      <ProfileOptions />
      <Footer />
    </main>
  );
};

export default Profile;
