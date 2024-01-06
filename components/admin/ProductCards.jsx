import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Rating from "../common/RatingStars";
import TrashBtn from "../admin/TrashBtn";
import { FaTrashCan } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from 'sweetalert2'

const ProductCards = ({ products }) => {
  const [productState, setProductState] = useState(products);
  const handleDelete = async (productId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `http://localhost:4545/api/admin/delete-product?product_id=${productId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            if (res.data.success) {
              setProductState((prevState) => {
                return prevState.filter((prod) => prod._id !== productId);
              });
            }
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-y-4 lg:gap-x-10 lg:gap-y-16">
      {productState?.map((ele) => (
        <div
          className="w-fit bg-white rounded-xl hover:drop-shadow-lg relative overflow-hidden"
          key={ele._id}
        >
          <Image
            src={ele.images[0]}
            alt={ele.breadcrumb}
            width={350}
            height={400}
            className="rounded-t-xl"
          />
          <div className="absolute top-3 right-4">
            <TrashBtn handleDelete={handleDelete} productId={ele._id} />
          </div>
          <div className="px-4">
            <h2 className="font-sansita-regular !text-[1rem] !leading-[1rem] pt-[.25rem]">
              {ele.name}
            </h2>
            <div className="flex items-center">
              <p className="font-lato-regular !font-semibold !text-[1rem] !leading-[1.5rem]">
                ₹{ele.price}
              </p>
              <p className="font-lato-regular !font-semibold !text-[.7rem] !leading-[1.5rem] px-1 line-through">
                ₹{ele.actualPrice}
              </p>
              <p className="font-lato-regular !font-bold !text-[.7rem] text-[#FF0909] !leading-[1.5rem]">
                {ele.offPercentage} OFF
              </p>
            </div>
            <div className="flex items-center font-semibold py-1 text-xs">
              <span className="pt-1"> 4.3 </span>
              <Rating />
              <span className="pt-1"> 664 Ratings</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
