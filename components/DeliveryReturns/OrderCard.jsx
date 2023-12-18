import Image from "next/image";
import React, { useEffect } from "react";
import { LuPackageCheck } from "react-icons/lu";

const OrderCard = ({ orders }) => {
  // const orders = [
  //   {
  //     id: 1,
  //     name: "Mindful Living",
  //     image: "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/products/mindful-living.JPG",
  //     size: "Medium",
  //     quantity: "1",
  //     status: "Delivered",
  //     date: "On Wed, 8 Nov",
  //     price: "₹979",
  //     actualPrice: "₹1399",
  //     delivered: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Cultivate Simple Joy",
  //     image: "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/products/cultivate-simple-joy.JPG",
  //     size: "Medium",
  //     quantity: "1",
  //     status: "Expected Delivery",
  //     date: "On Wed, 17 Nov",
  //     price: "₹979",
  //     actualPrice: "₹1399",
  //     delivered: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Cultivate Simple Joy",
  //     image: "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/products/cultivate-simple-joy.JPG",
  //     size: "Medium",
  //     quantity: "1",
  //     status: "Delivered",
  //     date: "On Wed, 7 Nov",
  //     price: "₹979",
  //     actualPrice: "₹1399",
  //     delivered: true,
  //   },
  // ];

  useEffect(() => {
    console.log(orders);
  }, []);
  return (
    <div className="px-[.94rem]">
      {orders?.map((order) => (
        <div key={order.id} className="py-[.94rem] border-b-2 border-white">
          {order.items.map((ele) => (
            <div key={ele.id}>
              <div className="flex items-center py-2">
                <LuPackageCheck className="text-[#A86549] w-[1.5rem] h-[1.5rem] mr-2" />
                <span>
                  <h2 className="font-lato-regular !text-[1rem] text-[#2F2E2D] !font-semibold">
                    {ele.status}
                  </h2>
                  <h2 className="font-lato-regular !text-[1rem] text-[#2F2E2D] !font-[300]">
                    {ele.date}
                  </h2>
                </span>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <Image
                    src={ele.images[0]}
                    alt={ele.name}
                    width={80}
                    height={100}
                    className="p-2"
                  />
                  <div className="px-8 flex flex-col justify-center">
                    <h3 className="text-[#2F2E2D] font-lato-regular !text-[1rem] font-semibold ">
                      {ele.name}
                    </h3>
                    <h4>
                      <span className="font-semibold">Size:&nbsp;</span>
                      {ele.size}
                    </h4>
                    <h4>
                      <span className="font-semibold">Quantity:&nbsp;</span>
                      {ele.quantity}
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col justify-center px-3 text-right">
                  <h2 className="font-bold text-[1.125rem]">{ele.price}</h2>
                  <h5 className="line-through text-[0.75rem]">
                    {ele.actualPrice}
                  </h5>
                </div>
              </div>
              <div className="flex justify-between py-2">
                <button
                  disabled={!ele.delivered}
                  className={`w-[9.6875rem] h-[2.5rem] text-white font-bold bg-[#A86549] ${
                    !ele.delivered && "opacity-50"
                  }`}
                >
                  Return
                </button>
                <button
                  disabled={!ele.delivered}
                  className={`w-[9.6875rem] h-[2.5rem] text-white font-bold bg-[#A86549] ${
                    !ele.delivered && "opacity-50"
                  }`}
                >
                  Exchange Size
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
