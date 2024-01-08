import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const EditableRating = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [isEditable, setIsEditable] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
          const response = await axios.post(`/api/get-rating`, {
            productId: window.location.href.split("/collection/")[1],
            userId: user._id,
          });

          if (response.data.success && response.data.ratings) {
            setIsEditable(false);
            setRating(response.data.ratings.value);
          } else {
            setIsEditable(true);
          }
        } else {
          setIsEditable(true);
        }
      } catch (error) {
        console.error("Error fetching rating:", error);
        setIsEditable(true);
      }
    };

    fetchData();
  }, [productId, rating]);

  const handleRatingChange = (value) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      axios
        .post("/api/product-rating", {
          productId: window.location.href.split("/collection/")[1],
          userId: user._id,
          value,
        })
        .then((response) => {
          setIsEditable(false);
          setRating(response.data.ratings.value);
          toast.success("Hurray! Product Rated Successfully...");
        })
        .catch((error) => {
          console.error("Error storing rating:", error);
        });
    } else {
      router.push(`/login?destination=/collection/${productId}`);
    }
  };

  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 2000);
  }, [render]);
  return (
    <>
      {render && (
        <ReactStars
          count={5}
          value={rating}
          size={20}
          isHalf={true}
          edit={isEditable}
          activeColor="#A86549"
          onChange={handleRatingChange}
        />
      )}
    </>
  );
};

export default EditableRating;
