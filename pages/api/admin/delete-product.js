import { Product } from "../../../schema/product";
import { connection } from "../../../utils/database";
import authAdminMiddleware from "../../../middleware/authAdmin";

async function deleteProduct(req, res) {
  try {
    await connection();

    const productId = req.query.product_id;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required for deletion.",
      });
    }

    const deletedProduct = await Product.deleteOne({ _id: productId });

    if (deletedProduct.deletedCount === 1) {
      return res.status(200).json({
        error: false,
        success: true,
        message: "Product deleted successfully.",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not found or already deleted.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}

export default authAdminMiddleware(deleteProduct);
