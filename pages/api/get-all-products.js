import { Product } from "../../schema/product.js";
import { connection } from "../../utils/database.js";

export default async function getAllProducts(req, res) {
  try {
    await connection();

    const products = await Product.find();
    return res.status(200).json({
      error: false,
      success: true,
      message: "Successfully found products...",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred while fetching products!",
    });
  }
}
