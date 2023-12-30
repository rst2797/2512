import React from "react";
import ReactStars from "react-rating-stars-component";

const Rating = ({ readOnly = true }) => {
  return (
    <ReactStars
      count={5}
      value={4.5}
      size={20}
      isHalf={true}
      edit={!readOnly}
      activeColor="#A86549"
    />
  );
};

export default Rating;
