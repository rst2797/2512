import React, { useEffect, useState } from "react";
import Head from "next/head";
import ProductNotFound from "../../components/shop/ProductNotFound";
import ProductDetail from "../../components/shop/ProductDetail.jsx";
import axios from "axios";
import { memo } from "react";
// import { rediss } from "../../utils/redis";

const TShirt = ({ id }) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    axios.get(`/api/get-product/${id}`).then((res) => {
      setProduct(res.data.product);
    });
  }, []);
  useEffect(()=>{}, [product])
  return (
    <main className="bg-[#f2eadf]">
      {product && (
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
          <link
            rel="canonical"
            href="https://www.2512.in/sustainability"
          />{" "}
          <link rel="icon" href="/icons/favicon.ico" />
        </Head>
      )}
      {product ? <ProductDetail product={product} /> : <ProductNotFound />}
    </main>
  );
};
export default memo(TShirt);

const getPresignedUrls = async (key, file) => {
  try {
    const res = await axios.get(
      `https://www.2512.in/api/get-profile-picture-signedurl/${key}/${file}`
    );

    return res.data.url;
  } catch (error) {
    console.error("Error getting presigned URL:", error);
    throw error;
  }
};
export async function getServerSideProps({ query }) {
  // const cachedProduct = await rediss.get(query.slug);
  // const parsedProduct = await JSON.parse(cachedProduct);
  // if (parsedProduct) {
  //   const updatedProduct = { ...parsedProduct, size: "S" };
  //   return {
  //     props: {
  //       product: { ...updatedProduct, id: parsedProduct._id },
  //     },
  //   };
  // }
  // const res = await axios.get(
  //   `https://www.2512.in/api/get-product/${query.slug}`
  // );
  // const product = {
  //   ...res.data.product,
  //   imageKey: [...res.data.product.images],
  // };
  // console.log(product);
  // let images = [];

  // await Promise.all(
  //   product.images.map(async (img) => {
  //     if (img.includes("https://s3")) {
  //       images.push(img);
  //     } else {
  //       const presigned = await getPresignedUrls("products-image", img);
  //       images.push(presigned);
  //     }
  //   })
  // );

  // const updatedProduct = { ...product, size: "S", images };
  // // await rediss.set(query.slug, JSON.stringify(updatedProduct));
  // return {
  //   props: {
  //     product: { ...updatedProduct, id: product._id },
  //   },
  // };
  return {
    props: {
      id: query.slug,
    },
  };
}
