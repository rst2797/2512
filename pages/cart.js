import Image from "next/image";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Navbar from "../components/common/header";
import Checkout from "../components/Cart/Checkout.jsx";
import Head from "next/head";
import { useCart } from "react-use-cart";
import { useEffect } from "react";
import Link from "next/link";

const Cart = () => {
  const { items, isEmpty } = useCart();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(Cookie.get("user")));
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
      <div className="bg-[#e2dad7] w-full lg:w-3/4 xl:w-2/3 mx-auto h-screen">
        <Navbar />
        <div className="p-6 pt-[4rem]">
          <div className="flex justify-between items-center py-4">
            <h1 className="font-sansita-regular !text-[3rem] !font-[100] mb-4">
              Cart
            </h1>
            <Link href="/shop/tshirt">
              <a className="text-xs underline cursor-pointer">Close</a>
            </Link>
          </div>
          {isEmpty ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {items.map((ele) => (
                <Product key={ele.id} item={ele} disableRemove={false} />
              ))}
            </>
          )}
        </div>
      </div>
      {!isEmpty && (
        <>
          {user ? (
            <Checkout items={items} user={user} />
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
      )}
    </div>
  );
};

export default Cart;

export function Product({ item, disableRemove }) {
  const { items, updateItemQuantity, getItem } = useCart();

  const [quantity, setQuantity] = useState(getItem(item.id).quantity);
  useEffect(() => {
    updateItemQuantity(item.id, quantity);
  }, [quantity]);

  return (
    <div className="flex justify-between border-b border-white pb-4 mb-4">
      <Image src={item.images[0]} alt="" width={70} height={100} />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-lato-regular !text-[1rem]">{item.name}</h2>
          <span className="font-lato-regular !text-[.75rem]">Size: Medium</span>
        </div>
        {!disableRemove && <QuntityCount quantity={quantity} setQuantity={setQuantity} />}
        {disableRemove && <span className="font-lato-regular !text-[.75rem]">Quantity: {quantity}</span>}
      </div>
      <Price
        id={item.id}
        actualPrice={item.actualPrice}
        offPercentage={item.offPercentage}
        disableRemove={disableRemove}
      />
    </div>
  );
}
function Price({ id, actualPrice, offPercentage, disableRemove }) {
  const { removeItem, getItem } = useCart();
  const { price, quantity } = getItem(id);
  const [totalPrice, setTotalPrice] = useState(price * quantity);
  useEffect(() => {
    setTotalPrice(null);
    setTotalPrice(price * quantity);
  }, [quantity, price]);
  const removeProduct = () => {
    removeItem(id);
  };
  return (
    <div className="flex flex-col justify-between text-right">
      {!disableRemove && (
        <span className="flex justify-end" onClick={removeProduct}>
          <IoMdClose className="opacity-25" />
        </span>
      )}
      <span className="flex flex-col">
        <h3>₹{totalPrice}</h3>
        <small className="!text-[.75rem] ml-[0.75rem] font-lato-regular">
          <span className="line-through">{actualPrice}</span>{" "}
          <span className="font-semibold text-[#49AC56]">
            {offPercentage}OFF
          </span>
        </small>
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
    <div className="flex items-center bg-white border-2 border-[#A86549] w-fit">
      <button
        disabled={quantity < 2}
        onClick={decreaseQuantity}
        className="text-[#A86549] py-1 px-2  text-xs opacity-75"
      >
        -
      </button>
      <span className="text-[#A86549] text-xs opacity-75">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className="text-[#A86549] py-1 px-2  text-xs opacity-75"
      >
        +
      </button>
    </div>
  );
}
