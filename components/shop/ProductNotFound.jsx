import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductNotFound = () => {
  const [time, setTime] = useState(5);
  const router = useRouter();
  const timeoutId = setTimeout(() => {
    if (time === 0) {
      console.log("Navigate to home");
      router.push("/");
      return;
    }
    setTime(time - 1);
  }, 1000);
  //   useEffect(() => {
  //     if (time === 0) clearTimeout(timeoutId);
  //   }, [time]);
  return (
    <div className="relative">
      <h1 className="font-bold text-center capitalize flex items-center justify-center h-screen">
        404 | The product you&apos;re asking for is not available at the moment
      </h1>
      <small className="font-bold absolute bottom-0">Redirect to home in {time} seconds</small>
    </div>
  );
};

export default ProductNotFound;
