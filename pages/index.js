import Head from "next/head";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer.jsx";
import SectionOne from "../components/Home/SectionOne.jsx";
import SectionTwo from "../components/Home/SectionTwo.jsx";
import SectionThree from "../components/Home/SectionThree.jsx";
import SectionFour from "../components/Home/SectionFour.jsx";
import SectionFive from "../components/Home/SectionFive.jsx";
import SectionSix from "../components/Home/SectionSix.jsx";
import SectionSeven from "../components/Home/SectionSeven.jsx";
import { fetchGraphQLData } from "../utils/graphql/query";
const Home = () => {
  const [close, setClose] = useState(false);
  const [products, setProducts] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
        const query = `
          {
            products(first: 10) {
              edges {
                node {
                  handle
                  id
                  description
                  title
                  tags
                  status
                  variants(first: 10) {
                    edges {
                      node {
                        availableForSale
                        compareAtPrice
                        id
                        displayName
                        createdAt
                        price
                        title
                        sku
                      }
                    }
                  }
                }
              }
            }
          }
        `;
  
        try {
          const data = await fetchGraphQLData(query);
          setProducts(data.products.edges);
        } catch (error) {
          // Handle error
        }
      };
  
      fetchData();
    }, [products]);
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
      </Head>
      <div className="container min-h-screen bg-[#f2eadf] relative">
        {!close && (
          <div className="container sticky top-2 left-0 right-0 z-50 w-full drop-shadow-md text-[#A86549] px-[0.94rem]">
            <Marquee
              pauseOnHover
              className="backdrop-sepia px-6 py-4 rounded-md font-semibold"
            >
              Free shipping all over India!!!
            </Marquee>
            {/* <span
                className="absolute right-4 top-2 text-2xl"
                onClick={() => setClose(true)}
              >
                <IoClose />
              </span> */}
          </div>
        )}
        <Navbar position={!close ? 20 : 4} />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
