import React, { useState } from "react";
import Head from "next/head";
import ProductNotFound from "../../components/shop/ProductNotFound";
import ProductDetail from "../../components/shop/ProductDetail.jsx";
import axios from "axios";
import { memo } from "react";
import { rediss } from "../../utils/redis";

const TShirt = ({ slug }) => {
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

  
  const url = window.location.href.split("/");
  const id = url[url.length - 1];
  const product = products.filter((item) => item._id === id)[0];
  return (
    <main className="bg-[#f2eadf]">
      <Head>
        <title>{`${product.breadcrumb} - 2512 Wardrobe Essentials`}</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${product.breadcrumb} - 2512 Wardrobe Essentials`}
        />
        <meta property="og:description" content={`${product.description}`} />
        <meta
          property="og:url"
          content="https://www.2512.in/sustainability"
        />{" "}
        <meta property="og:image" content="/icons/favicon.ico" />
        <meta name="description" content={`${product.description}`} />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/sustainability" />{" "}
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      {product ? <ProductDetail product={product} /> : <ProductNotFound />}
    </main>
  );
};
export default TShirt;

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
export async function getServerSideProps({ query }) {
  const cachedProduct = await rediss.get(query.slug);
  const parsedProduct = await JSON.parse(cachedProduct);
  if (parsedProduct) {
    const updatedProduct = { ...parsedProduct, size: "S" };
    return {
      props: {
        product: { ...updatedProduct, id: parsedProduct._id, slug: query.slug },
      },
    };
  }
  const res = await axios.get(
    `${process.env.NEXT_API_BASE_URL}/api/get-product/${query.slug}`
  );
  const product = {
    ...res.data.product,
    imageKey: [...res.data.product.images],
  };
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

  const updatedProduct = { ...product, size: "S", images };
  // await rediss.set(query.slug, JSON.stringify(updatedProduct));
  return {
    props: {
      product: { ...updatedProduct, id: product._id, slug: query.slug },
    },
  };
}
