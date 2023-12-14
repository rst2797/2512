import { Product } from "../../../schema/product.js";
import { connection } from "../../../utils/database.js";

export default async function getProduct(req, res) {
  try {
    await connection();
    const id = req.query.slug

    const product = await Product.findById(id);
    return res.status(200).json({
      error: false,
      success: true,
      message: "Successfully found product...", 
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred while fetching products!",
    });
  }
}
