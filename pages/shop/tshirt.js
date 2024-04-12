import axios from "axios";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer.jsx";
import SectionOne from "../../components/Collection/SectionOne.jsx";
// import { rediss } from "../../utils/redis";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  async function fetchProduct() {
    try {
      const cachedData = "null";
      const parsedCache = JSON.parse(cachedData);

      if (!parsedCache) {
        const res = await axios.get(`https://2512.in/api/get-all-products`);

        const products = await Promise.all(
          res.data.products.map(async (product) => {
            let images = [];

            await Promise.all(
              product.images.map(async (img) => {
                if (img.includes("https://s3")) {
                  images.push(img);
                } else {
                  const presigned = await getPresignedUrls(
                    "products-image",
                    img
                  );
                  images.push(presigned);
                }
              })
            );

            return { ...product, images };
          })
        );

        // await rediss.set("products", JSON.stringify({ products }));

        return {
          products,
        };
      }

      return {
        products: parsedCache.products,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        products: [],
      };
    }
  }
  useEffect(() => {
    fetchProduct().then((data) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <main>
      <Head>
        <title>Stylish Fashion: Elevate Your Style with 2512</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Stylish Fashion: Elevate Your Style with 2512"
        />
        <meta
          property="og:description"
          content="Explore Stylish fashion at www.2512.in – where style meets sustainability. Discover our curated collection, including timeless black tees. Elevate your wardrobe with 2512. #2512Fashion #MensStyle"
        />
        <meta property="og:url" content="https://www.2512.in/collection" />
        <meta property="og:image" content="/icons/favicon.ico" />
        <meta
          name="description"
          content="Explore Stylish fashion at www.2512.in – where style meets sustainability. Discover our curated collection, including timeless black tees. Elevate your wardrobe with 2512. #2512Fashion #MensStyle"
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/collection" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="container bg-[#f2eadf] relative">
        <SectionOne products={products}>
          <Navbar />
        </SectionOne>
        <Footer />
      </div>
    </main>
  );
};

export default Home;

const getPresignedUrls = async (key, file) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_API_BASE_URL}/api/get-profile-picture-signedurl/${key}/${file}`
    );

    return res.data.url;
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    throw error;
  }
};
// export async function getServerSideProps() {
//   try {
//     const cachedData = "null";
//     const parsedCache = JSON.parse(cachedData);

//     if (!parsedCache) {
//       const res = await axios.get(
//         `${process.env.NEXT_API_BASE_URL}/api/get-all-products`
//       );

//       const products = await Promise.all(
//         res.data.products.map(async (product) => {
//           let images = [];

//           await Promise.all(
//             product.images.map(async (img) => {
//               if (img.includes("https://s3")) {
//                 images.push(img);
//               } else {
//                 const presigned = await getPresignedUrls("products-image", img);
//                 images.push(presigned);
//               }
//             })
//           );

//           return { ...product, images };
//         })
//       );

//       // await rediss.set("products", JSON.stringify({ products }));

//       return {
//         props: {
//           products,
//         },
//       };
//     }

//     return {
//       props: {
//         products: parsedCache.products,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         products: [],
//       },
//     };
//   }
// }
