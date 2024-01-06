import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/admin/order/Sidebar";
import AddProducts from "../../components/admin/AddProducts.jsx";
import { GrAdd } from "react-icons/gr";
import ProductCards from "../../components/admin/ProductCards.jsx";
import { useRouter } from "next/router";

const Products = ({ products }) => {
  const [addProduct, setAddProduct] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("user"))?._id !==
        "65856027c169c5523ff9462e" &&
      JSON.parse(localStorage.getItem("user"))?.role !== "ADMIN"
    ) {
      return router.push("/");
    }
  }, []);

  return (
    <div className="bg-[#F4E9DF] min-h-screen relative">
      <Sidebar />
      <div className="max-w-screen mx-auto">
        <div className="flex flex-col justify-center items-center p-4 ml-[15vw] md:p-8">
          <label className="font-sansita-regular py-4 flex justify-start">
            All Products
          </label>
          <ProductCards products={products} />
        </div>
      </div>
      <GrAdd
        onClick={() => setAddProduct(true)}
        className="fixed bottom-10 right-4 bg-[#A86549] text-[#F4E9DF] w-12 h-12 p-4 font-bold rounded-full drop-shadow-lg"
      />
      {addProduct && <AddProducts setAddProduct={setAddProduct} />}
    </div>
  );
};

export default Products;

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_API_BASE_URL}/api/get-all-products`
    );
    return {
      props: {
        products: res.data.products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
