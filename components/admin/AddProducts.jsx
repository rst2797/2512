import { IoCloseSharp } from "react-icons/io5";
import ProductForm from "./AddProductForm.jsx"
import React from "react";
import "animate.css";
const AddProducts = ({setAddProduct}) => {
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-[#3b3b3b8c] z-50">
      <div className="bg-white max-h-[90vh] overflow-y-auto lg:overflow-y-hidden  lg:h-[90vh] lg:w-[30vw] px-4 py-2 lg:py-6 rounded-lg animate__animated animate__zoomIn">
        <div className="flex justify-between items-center">
            <h2 className="font-sansita-regular !text-xl lg:!text-3xl">Add Product</h2>
            <IoCloseSharp onClick={()=>setAddProduct(false)} className="text-2xl cursor-pointer"/>
        </div>
        <div className="">
            <ProductForm setAddProduct={setAddProduct} />
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
