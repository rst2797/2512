import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useRouter } from "next/router";

const Rating = ({ overallRating }) => {
  // const [rating, setRating] = useState(0);
  // const [isEditable, setIsEditable] = useState(true);
  // const router = useRouter();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const user = JSON.parse(localStorage.getItem("user"));

  //       if (user) {
  //         const response = await axios.post(`/api/get-rating`, {
  //           productId: window.location.href.split("/collection/")[1],
  //           userId: user._id,
  //         });

  //         if (response.data.success && response.data.ratings) {
  //           setIsEditable(false);
  //           setRating(response.data.ratings.value);
  //         } else {
  //           setIsEditable(true);
  //         }
  //       } else {
  //         setIsEditable(true);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching rating:", error);
  //       setIsEditable(true);
  //     }
  //   };

  //   fetchData();
  // }, [productId]);

  // const handleRatingChange = (value) => {
  //   const user = JSON.parse(localStorage.getItem("user"));

  //   if (user) {
  //     axios
  //       .post("/api/product-rating", {
  //         productId: window.location.href.split("/collection/")[1],
  //         userId: user._id,
  //         value,
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //         setIsEditable(false);
  //         setRating(response.data.ratings.value);
  //       })
  //       .catch((error) => {
  //         console.error("Error storing rating:", error);
  //       });
  //   } else {
  //     router.push(`/login?destination=/collection/${productId}`);
  //   }
  // };

  const [rate, setRate] = useState(overallRating);
  const [render, setRender] = useState(false);

  useEffect(() => {
    console.log(rate, overallRating);
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
          // onChange={handleRatingChange}
        />
      )}
    </>
  );
};

export default Rating;
