import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeCollage = () => {
  return (
    <div className="relative overflow-hidden">
      <p className="text-center text-black z-50 absolute top-1/2 left-0 w-screen font-semibold text-xl">
        <Link href="">
            <a className="underline">
                Kanso
            </a>
        </Link> <br/>
        Shop 100% Organic Cotton Tees
      </p>
      <div className="h-screen block lg:hidden">
        <Image
          src="/images/collage/April 8 (2).png"
          alt=""
          layout="fill"
          className="h-full"
        />
      </div>

      <div className="pt-[4.2rem] overflow-hidden justify-center lg:justify-between hidden lg:flex">
        <span className="inline-block">
          <Image
            src="/images/collage/April 8 (1).png"
            alt=""
            width={600}
            height={800}
          />
        </span>
        <span className="h-screen overflow-hidden">
          <div style={{ height: "100vh" }}>
            <Image
              src="/images/collage/April 8 (2).png"
              alt=""
              width={600}
              height={800}
            />
          </div>
        </span>
        <span className="inline-block">
          <Image
            src="/images/collage/April 8 (3).png"
            alt=""
            width={600}
            height={800}
          />
        </span>
      </div>
    </div>
  );
};

export default HomeCollage;
