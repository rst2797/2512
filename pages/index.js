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
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      _id: "657adf3a9bf64e606dfb4719",
      name: "Organic Cotton Embroidered Unisex T-shirt Live In The Moment | Round Neck | White",
      breadcrumb: "Live in Moment Tee",
      images: [
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_White/1.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_White/2.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_White/3.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_White/4.jpeg",
      ],
      actualPrice: "1399",
      price: "1799",
      offPercentage: "30%",
      rating: "4.7",
      numberOfRatings: "129",
      color: "white",
      category: "TShirt",
      quantity: "1",
      selling_price: "1799",
      sku: "LiveInTheMoment-W-2512",
      units: "1",
      description:
        "Crafted from 100% organic cotton, our tee is incredibly soft and gentle on your skin. The relaxed fit is perfect for any occasion, whether you're lounging at home or out and about. And because it's gender neutral, it's a versatile addition to any wardrobe. The embroidery Live in the moment is a meaningful message for each of us to focus on the present rather than being anxious about the future.",
      care: [
        "Gentle machine or hand wash for best results.",
        "machine wash at room temperature (30°c)",
        "wash with like colours",
        "air dry, saves energy too!",
      ],
      material: ["200 GSM single jersey", "GOTS CERTIFIED 100% Organic Cotton"],
    },
    {
      id: 2,
      _id: "657adfdc9bf64e606dfb471a",
      name: "Organic Cotton Embroidered Unisex T-shirt Mindful Living | Round Neck | Rust Colour",
      breadcrumb: "Mindful Living Tee",
      images: [
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_RUST/1.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_RUST/2.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_RUST/3.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_RUST/4.jpeg",
      ],
      price: "1799",
      actualPrice: "1799",
      offPercentage: "30%",
      rating: "4.7",
      numberOfRatings: "129",
      color: "rust",
      category: "TShirt",
      quantity: "1",
      selling_price: "1799",
      sku: "MindfulLiving-R-2512",
      units: "1",
      description:
        "Crafted from 100% organic cotton, our tee is incredibly soft and gentle on your skin. The relaxed fit is perfect for any occasion, whether you're lounging at home or out and about. And because it's gender neutral, it's a versatile addition to any wardrobe. Mindful Living embroidered on the earthy tones in this tee is a message towards making more conscious choices, one day, one product at a time.",
      care: [
        "Gentle machine or hand wash for best results.",
        "machine wash at room temperature (30°c)",
        "wash with like colours",
        "air dry, saves energy too!",
      ],
      material: ["200 GSM single jersey", "GOTS CERTIFIED 100% Organic Cotton"],
    },
    {
      id: 3,
      _id: "657ae02f9bf64e606dfb471b",
      name: "Organic Cotton Embroidered Unisex T-shirt Cultivate Simple Joys | Round Neck | Black",
      breadcrumb: "Cultivate Simple Joy Tee",
      images: [
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_Black/Embroidered_Black/1.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_Black/Embroidered_Black/2.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_Black/Embroidered_Black/3.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/Embroidered_Black/Embroidered_Black/4.jpeg",
      ],
      price: "1799",
      actualPrice: "1399",
      offPercentage: "30%",
      rating: "4.7",
      numberOfRatings: "129",
      color: "black",
      category: "TShirt",
      quantity: "1",
      selling_price: "1799",
      sku: "CultivateSimpleJoy-B-2512",
      units: "1",
      description:
        "Crafted from 100% organic cotton, our tee is incredibly soft and gentle on your skin. The relaxed fit is perfect for any occasion, whether you're lounging at home or out and about. And because it's gender neutral, it's a versatile addition to any wardrobe. But what really sets our tee apart is the beautiful embroidery that says 'Cultivate Simple Joys.' This message is a reminder to slow down and appreciate the little things in life, bringing a sense of peace and positivity to your day.",
      care: [
        "Gentle machine or hand wash for best results.",
        "machine wash at room temperature (30°c)",
        "wash with like colours",
        "air dry, saves energy too!",
      ],
      material: ["200 GSM single jersey", "GOTS CERTIFIED 100% Organic Cotton"],
    },
    {
      id: 4,
      _id: "657ae05c9bf64e606dfb471c",
      name: "Organic Cotton Motif Relaxed Fit T-shirt Unisex -Round neck - White",
      breadcrumb: "White Motif Tee",
      images: [
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_WHITE_(3)/1.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_WHITE_(3)/2.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_WHITE_(3)/3.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_WHITE_(3)/4.jpeg",
      ],
      price: "1799",
      actualPrice: "1799",
      offPercentage: "30%",
      rating: "4.7",
      numberOfRatings: "129",
      color: "white",
      category: "TShirt",
      quantity: "1",
      selling_price: "1799",
      sku: "Motif-W-2512",
      units: "1",
      description:
        "Our relaxed fit motif tee - the ultimate addition to your conscious wardrobe! Made from 100% GOTS certified organic cotton, this tee is not only incredibly soft and comfortable, but also eco-conscious. Using 88% less water and 62% less energy than regular cotton, our tee is kind to the environment. Embrace sustainable style with every wear.",
      care: [
        "Gentle machine or hand wash for best results.",
        "machine wash at room temperature (30°c)",
        "wash with like colours",
        "air dry, saves energy too!",
      ],
      material: ["200 GSM single jersey", "GOTS CERTIFIED 100% Organic Cotton"],
    },
    {
      id: 5,
      _id: "657ae09c9bf64e606dfb471d",
      name: "Organic Cotton Motif Relaxed Fit T-shirt Unisex -Round neck - Rust",
      breadcrumb: "Rust Motif Tee",
      images: [
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_RUST_001/1.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_RUST_001/2.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_RUST_001/3.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_RUST_001/4.jpeg",
      ],
      price: "1799",
      actualPrice: "1399",
      offPercentage: "30%",
      rating: "4.7",
      numberOfRatings: "129",
      color: "rust",
      category: "TShirt",
      quantity: "1",
      selling_price: "1799",
      sku: "Motif-R-2512",
      units: "1",
      description:
        "Our relaxed fit motif tee - the ultimate addition to your conscious wardrobe! Made from 100% GOTS certified organic cotton, this tee is not only incredibly soft and comfortable, but also eco-conscious. Using 88% less water and 62% less energy than regular cotton, our tee is kind to the environment. Embrace sustainable style with every wear.",
      care: [
        "Gentle machine or hand wash for best results.",
        "machine wash at room temperature (30°c)",
        "wash with like colours",
        "air dry, saves energy too!",
      ],
      material: ["200 GSM single jersey", "GOTS CERTIFIED 100% Organic Cotton"],
    },
    {
      id: 6,
      _id: "657ae0c39bf64e606dfb471e",
      name: "Organic Cotton Motif Relaxed Fit T-shirt Unisex -Round neck - Black",
      breadcrumb: "Black Beauty Motif Tee",
      images: [
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_BLACK_(2)/1.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_BLACK_(2)/2.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_BLACK_(2)/3.jpeg",
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/launched-images/MOTIF_BLACK_(2)/4.jpeg",
      ],
      price: "1799",
      actualPrice: "1399",
      offPercentage: "30%",
      rating: "4.7",
      numberOfRatings: "129",
      color: "black",
      category: "T-shirt",
      quantity: "1",
      selling_price: "1799",
      sku: "Motif-B-2512",
      units: "1",
      description:
        "Our relaxed fit motif tee - the ultimate addition to your conscious wardrobe! Made from 100% GOTS certified organic cotton, this tee is not only incredibly soft and comfortable, but also eco-conscious. Using 88% less water and 62% less energy than regular cotton, our tee is kind to the environment. Embrace sustainable style with every wear.",
      care: [
        "Gentle machine or hand wash for best results.",
        "machine wash at room temperature (30°c)",
        "wash with like colours",
        "air dry, saves energy too!",
      ],
      material: ["200 GSM single jersey", "GOTS CERTIFIED 100% Organic Cotton"],
    },
  ]);
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
        <meta
          property="og:image"
          content="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/our-story/story_1.png"
        />
        <meta
          name="description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="canonical" href="https://www.2512.in/" />
        <link rel="icon" href="/icons/favicon.ico" />
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
        {/* <SectionSix /> */}
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
export async function getServerSideProps() {
  try {
    const cachedData = await rediss.get("products");
    const parsedCache = JSON.parse(cachedData);

    if (!parsedCache) {
      const res = await axios.get(
        `${process.env.NEXT_API_BASE_URL}/api/get-all-products`
      );

      const products = await Promise.all(
        res.data.products.map(async (product) => {
          let images = [];

          await Promise.all(
            product.images.map(async (img) => {
              if (img.includes("https://s3")) {
                images.push(img);
              } else {
                const presigned = await getPresignedUrls("products-image", img);
                images.push(presigned);
              }
            })
          );

          return { ...product, images };
        })
      );

      // await rediss.set("products", JSON.stringify({ products }));

      return {
        props: {
          products,
        },
      };
    }

    return {
      props: {
        products: parsedCache.products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
