import React from "react";
import Head from "next/head";
import ProductNotFound from "../../components/shop/ProductNotFound";
import ProductDetail from "../../components/shop/ProductDetail.jsx";
import axios from "axios";
import { memo } from "react";

const TShirt = ({ product }) => {
  return (
    <main>
      <Head>
        <title>Classic Black Tees for Men - 2512 Wardrobe Essentials</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Classic Black Tees for Men - 2512 Wardrobe Essentials"
        />
        <meta
          property="og:description"
          content="Elevate your style with our expanded male black tee collection. Discover timeless simplicity and comfort. Explore the 2512 wardrobe essentials. #2512Fashion #MensStyle"
        />
        <meta property="og:url" content="https://www.2512.in/sustainability" />{" "}
        {/*Need to update dynamically */}
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Elevate your style with our expanded male black tee collection. Discover timeless simplicity and comfort. Explore the 2512 wardrobe essentials. #2512Fashion #MensStyle"
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/sustainability" />{" "}
        {/*Need to update dynamically */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {product ? <ProductDetail product={product} /> : <ProductNotFound />}
    </main>
  );
};
export default memo(TShirt);

export async function getServerSideProps({ query }) {
  const res = await axios.get(`http://localhost:4545/api/get-product/${query.slug}`)
  const product = res.data.product;
  return {
    props: {
      product: {...product, id: product._id},
    },
  };
}