import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer";
import Checkout from "../components/Cart/Checkout.jsx";
import Head from "next/head";
import { useCart } from "react-use-cart";
import { useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Cart = () => {
  const { items, isEmpty } = useCart();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="relative">
      <Head>
        <title>Your 2512 Cart: Secure Checkout for Sustainable Style</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Your 2512 Cart: Secure Checkout for Sustainable Style"
        />
        <meta
          property="og:description"
          content="Review and checkout your sustainable fashion picks at www.2512.in. Secure your style journey with 2512's eco-conscious choices. Elevate your wardrobe responsibly. #2512Fashion #SecureCheckout"
        />
        <meta property="og:url" content="https://www.2512.in/cart" />
        <meta property="og:image" content="/icons/favicon.ico" />
        <meta
          name="description"
          content="Review and checkout your sustainable fashion picks at www.2512.in. Secure your style journey with 2512's eco-conscious choices. Elevate your wardrobe responsibly. #2512Fashion #SecureCheckout"
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/cart" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="bg-[#F4E9DF] w-full lg:w-3/4 xl:w-2/3 2xl:w-full 2xl:px-20 min-h-screen">
        <Navbar />
        <div className="p-3 lg:p-6 2xl:p-0 2xl:pt-[4rem] pt-[4rem] mx-auto max-w-[1450px]">
          <div className="flex justify-between items-center py-4">
            <h1 className="font-sansita-regular !text-[3rem] !font-[100] mb-4">
              Cart
            </h1>
          </div>
          {isEmpty ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 justify-between py-4">
              <div className="lg:col-span-2">
                {items.map((ele) => (
                  <Product key={ele.id} item={ele} disableRemove={false} />
                ))}
              </div>
              <>
                {user ? (
                  <Checkout items={items} />
                ) : (
                  <div className="bg-white rounded-xl h-[96%] relative mb-2 mx-2 flex flex-col justify-center items-center">
                    <h2 className="text-center font-bold text-2xl px-4 ">
                      Snap! You need to login to proceed
                    </h2>
                    <Link href="/login?destination=/cart">
                      <a className="py-[1rem] px-[0.94rem]">
                        <button className="px-4 py-[0.5625rem] font-bold text-white rounded-lg bg-[#A86549]">
                          Login to checkout
                        </button>
                      </a>
                    </Link>
                  </div>
                )}
              </>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

export function Product({ item }) {
  const { items, updateItemQuantity, getItem, removeItem } = useCart();
  const [image, setImage] = useState("/");

  const [quantity, setQuantity] = useState(getItem(item.id).units);
  useEffect(() => {
    updateItemQuantity(item.id, quantity);
    if (item.imageKey) {
      if (item.imageKey[0].includes("https://s3")) {
        setImage(item.images[0]);
      } else {
        axios
          .get(
            `{process.env.NEXT_API_BASE_URL}/api/get-profile-picture-signedurl/products-image/${item.imageKey[0]}`
          )
          .then((res) => {
            setImage(res.data.url);
          });
      }
    } else {
      setImage(item.images[0]);
    }
  }, [quantity]);
  const removeProduct = (id) => {
    removeItem(id);
  };

  return (
    <div className="relative flex bg-white rounded-xl p-2 mb-4">
      <div className="flex justify-center items-center max-w-[40%] lg:max-w-full">
        <Image
          src={image}
          alt="Sustainable and Organic Cloths"
          width={250}
          height={280}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center px-4">
        <div>
          <h2 className="font-sansita-regular !text-xl lg:!text-[2rem]">
            {item.name}
          </h2>
          <span className="font-lato-regular !font-semibold pt-2 !text-[1rem]">
            Size: {item.size}
          </span>
        </div>
        <span className="font-lato-regular capitalize !text-[1rem] !font-semibold pb-2">
          Color: {item.color}
        </span>
        <span className="flex items-center">
          <span className="font-semibold">Quantity: &nbsp; </span>
          <QuntityCount quantity={quantity} setQuantity={setQuantity} />
        </span>
        <span className="font-lato-regular !font-extrabold py-2 !text-[1.5rem]">
          ₹{item.price}
        </span>
        <div className="flex items-center leading-3">
          <span className="font-lato-regular !font-extrabold !text-[.75rem] pr-2 line-through">
            ₹{item.actualPrice}
          </span>
          <span className="text-xs text-[#FF0909] font-bold">
            {item.offPercentage} OFF
          </span>
        </div>
      </div>
      <span
        className="absolute right-3 top-3"
        onClick={() => removeProduct(item.id)}
      >
        <IoMdClose className="opacity-25 text-2xl" />
      </span>
    </div>
  );
}
function QuntityCount({ quantity, setQuantity }) {
  function decreaseQuantity() {
    setQuantity(quantity - 1);
  }
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="flex items-center bg-white border-2 border-[#A86549] w-fit rounded-md py-1">
      <button
        disabled={quantity < 2}
        onClick={decreaseQuantity}
        className="text-[#A86549] px-2  text-xs opacity-75"
      >
        -
      </button>
      <span className="text-[#A86549] px-3 text-xs opacity-75 border-x-[1px]">
        {quantity}
      </span>
      <button
        onClick={increaseQuantity}
        className="text-[#A86549] px-2  text-xs opacity-75"
      >
        +
      </button>
    </div>
  );
}
