import Image from "next/image";
import React from "react";

const BlogCards = () => {
  return (
    <div className="mx-12 mb-6">
      <h2 className="text-center font-sansita-regular text-[#2F2E2D] py-4">
        More Blogs
      </h2>
      <div className="grid grid-cols-2 gap-12">
        {[1, 2, 3, 4, 5, 6].map((ele) => (
          <div
            className="bg-[#A86549] text-white flex items-center p-2 rounded-xl"
            key={ele}
          >
            <Image
              src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/blog/Mask+group+1.png"
              alt=""
              width={220}
              height={250}
            />
            <h2 className="font-sansita-regular !text-3xl px-6 !leading-10">
              The Impact of Fast Fashion: <br /> Why Slow and Sustainable
              Clothing Matters?
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
