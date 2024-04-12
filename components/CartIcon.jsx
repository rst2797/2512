import { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { MdDeleteForever } from "react-icons/md";

const CartDropdown = () => {
  const [showCart, setShowCart] = useState(false);
  const { isEmpty, totalUniqueItems, items, removeItem, getItem } = useCart();

  const removeProduct = (id) => {
    removeItem(id);
  };

  return (
    <div className="relative group">
      <span
        className="text-[1.25rem] relative cursor-pointer"
        onMouseEnter={() => setShowCart(true)}
        onMouseLeave={() => setShowCart(false)}
      >
        {!isEmpty && (
          <span className="absolute right-2 top-0 text-xs bg-[#A86549] text-white rounded-full w-4 h-4 text-center">
            {totalUniqueItems}
          </span>
        )}
        <IoBagOutline size={25} className="lg:mx-4" />
      </span>

      {showCart && (
        <div
          onMouseEnter={() => setShowCart(true)}
          onMouseLeave={() => setShowCart(false)}
          className="absolute max-h-[80vh] overflow-y-auto top-full right-0 w-72 bg-white border border-gray-200 shadow-lg rounded-lg p-4 z-10 custom-scrollbar"
        >
          {items.length ? (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex mb-4 border-b pb-2">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={60}
                    height={90}
                    className="w-16 h-16 mr-4"
                  />
                  <div className="ml-2">
                    <h3 className="font-bold text-ellipsis w-48 overflow-hidden whitespace-nowrap">
                      {item.name}
                    </h3>

                    <div className="flex items-center">
                      <small className="font-bold mt-2">
                        Price: {item.price}
                      </small>
                      <small className="font-bold ml-2 mt-2">
                        <QuntityCount item={item} />
                      </small>
                      <MdDeleteForever
                        className="text-red-500 ml-2 mt-2"
                        onClick={() => removeProduct(item?._id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="sticky -bottom-4 left-0 right-0 py-2 bg-white pb-6">
                <span className="block text-center text-xs bg-white">
                  <Link href="/cart">
                    <a className="block w-full py-2 rounded-md bg-[#A86549] text-white">
                      View Full Cart
                    </a>
                  </Link>
                </span>
              </div>
            </>
          ) : (
            <small>Your cart is empty</small>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;

function QuntityCount({ item }) {
  const { updateItemQuantity, getItem } = useCart();

  function decreaseQuantity() {
    updateItemQuantity(item.id, item.quantity - 1);
  }
  function increaseQuantity() {
    updateItemQuantity(item.id, item.quantity + 1);
  }

  return (
    <div className="flex items-center bg-white border-2 border-[#A86549] w-fit rounded-md">
      <button
        disabled={item?.quantity < 2}
        onClick={decreaseQuantity}
        className="text-[#A86549] px-1  text-xs opacity-75"
      >
        -
      </button>
      <span className="text-[#A86549] px-2 text-xs opacity-75 border-x-[1px]">
        {getItem(item.id).units}
      </span>
      <button
        onClick={increaseQuantity}
        className="text-[#A86549] px-1  text-xs opacity-75"
      >
        +
      </button>
    </div>
  );
}
