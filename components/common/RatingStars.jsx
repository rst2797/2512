import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useRouter } from "next/router";

const Rating = ({ overallRating }) => {
  const [rate, setRate] = useState(overallRating);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRate(overallRating);
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, [rate, overallRating]);
  return (
    <>
      {render && (
        <ReactStars
          count={5}
          value={rate}
          size={20}
          isHalf={true}
          edit={false}
          activeColor="#A86549"
        />
      )}
    </>
  );
};

export default Rating;
