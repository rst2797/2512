import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { LuPackageCheck } from "react-icons/lu";

const OrderCard = ({ orders }) => {
  return (
    <div className="px-[.94rem] min-h-screen flex flex-col items-center">
      {orders.length ? (
        orders?.map((order) => (
          <div
            key={order.id}
            className="p-[.4rem] my-4 rounded-lg w-[80vw] lg:w-fit bg-white"
          >
            {order.items.map((ele) => (
              <div key={ele.id}>
                {/* <div className="flex items-center">
                  <span>
                    <h2 className="font-lato-regular !text-[1rem] text-[#2F2E2D] !font-semibold">
                      {ele.status}
                    </h2>
                    <h2 className="font-lato-regular !text-[1rem] text-[#2F2E2D] !font-[300]">
                      {ele.date}
                    </h2>
                  </span>
                </div> */}
                <div className="flex justify-between">
                  <div className="flex flex-col lg:flex-row py-4">
                    <div className="">
                      <Image
                        src={ele.images[0]}
                        alt={ele.name}
                        width={180}
                        height={200}
                        className="p-2 rounded-lg"
                      />
                    </div>
                    <div className="px-8 flex flex-col justify-center">
                      <div className="flex items-center text-xl w-full pb-2 border-b-[1px] border-black">
                        <LuPackageCheck className="text-[#A86549]" />
                        <h2 className="text-lg font-semibold text-[#2F2E2D] px-2 capitalize">
                          {order.status}
                        </h2>
                      </div>
                      <div className="flex justify-between lg:w-[800px]">
                        <div className="">
                          <h3 className="text-[#2F2E2D] font-lato-regular !text-[1rem] mt-2 font-semibold ">
                            {ele.name}
                          </h3>
                          <div className="flex items-center py-2 text-[#2F2E2D]">
                            <h2 className="font-bold text-[.85rem] pr-1">
                              ₹{order.totalAmount}
                            </h2>
                          </div>
                          <div className="flex justify-between w-[10rem] lg:w-[12rem] pt-12 lg:pt-0 py-4">
                            <h4 className="text-[.65rem]">
                              <span className="font-semibold ">
                                Size:&nbsp;
                              </span>
                              {ele.size}
                            </h4>
                            <h4 className="text-[.65rem] px-16 lg:px-0">
                              <span className="font-semibold">
                                Color:&nbsp;
                              </span>
                              White
                            </h4>
                            <h4 className="text-[.65rem]">
                              <span className="font-semibold">
                                Quantity:&nbsp;
                              </span>
                              {ele.quantity}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col lg:justify-between gap-1 py-4">
                          <button className="bg-[#A86549] text-white font-semibold text-xs py-[.5rem] px-[2rem] rounded-lg">
                            Exchange
                          </button>
                          <button className="bg-[#A86549] text-white font-semibold text-xs py-[.5rem] px-[2rem] rounded-lg">
                            Return
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-4 lg:mt-4">
                        <button className="bg-[#EADAC8] py-[.5rem] px-[2rem] lg:px-[3rem] text-xs font-semibold rounded-lg">
                          Buy Again
                        </button>
                        <Link href={`/collection/${ele._id}`}>
                          <a className="bg-[#EADAC8] py-[.5rem] px-[2rem] lg:px-[3rem] text-xs font-semibold rounded-lg">
                            {" "}
                            View Product
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-between py-2">
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
                </div> */}
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <h2 className="font-lato-regular text-center">
            Empty history, full potential. Future orders await your sustainable
            story.<span className="animate-ping mx-4">🚀</span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
