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
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Review and checkout your sustainable fashion picks at www.2512.in. Secure your style journey with 2512's eco-conscious choices. Elevate your wardrobe responsibly. #2512Fashion #SecureCheckout"
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#F4E9DF] w-full lg:w-3/4 xl:w-2/3 2xl:w-full 2xl:px-20  mx-auto min-h-screen">
        <Navbar />
        <div className="p-6 2xl:p-0 2xl:pt-[4rem] pt-[4rem] mx-auto max-w-[1450px]">
          <div className="flex justify-between items-center py-4">
            <h1 className="font-sansita-regular !text-[3rem] !font-[100] mb-4">
              Cart
            </h1>
          </div>
          {isEmpty ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="grid grid-cols-3 gap-12 justify-between py-4">
              <div className="col-span-2 ">
                {items.map((ele) => (
                  <Product key={ele.id} item={ele} disableRemove={false} />
                ))}
              </div>
              <>
                {user ? (
                  <Checkout items={items} />
                ) : (
                  <Link href="/login?destination=/cart">
                    <a className="absolute bottom-0 left-0 right-0 py-[1rem] px-[0.94rem]">
                      <button className="w-full py-[0.5625rem] font-bold text-white bg-[#A86549]">
                        Login to checkout
                      </button>
                    </a>
                  </Link>
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

export function Product({ item, disableRemove }) {
  const { items, updateItemQuantity, getItem, removeItem } = useCart();

  const [quantity, setQuantity] = useState(getItem(item.id).units);
  useEffect(() => {
    updateItemQuantity(item.id, quantity);
  }, [quantity]);
  const removeProduct = (id) => {
    removeItem(id);
  };

  return (
    <div className="relative flex bg-white rounded-xl p-2 mb-4">
      <Image
        src={item.images[0]}
        alt="Sustainable and Organic Cloths"
        width={250}
        height={280}
        className="rounded-xl"
      />
      <div className="flex flex-col justify-center px-4">
        <div>
          <h2 className="font-sansita-regular !text-[2rem]">{item.name}</h2>
          <span className="font-lato-regular !font-semibold pt-2 !text-[1rem]">
            Size: {item.size}
          </span>
        </div>
        <span className="font-lato-regular !text-[1rem] !font-semibold pb-2">
          Color: {"White"}
        </span>
        <QuntityCount quantity={quantity} setQuantity={setQuantity} />
        <span className="font-lato-regular !font-extrabold py-2 !text-[1.5rem]">
          ₹{item.price}
        </span>
        <div className="flex items-center leading-3">
          <span className="font-lato-regular !font-extrabold !text-[1rem] pr-2 line-through">
            {item.actualPrice}
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
