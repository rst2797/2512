import { Product } from "../../../schema/product";
import { connection } from "../../../utils/database";
import authAdminMiddleware from "../../../middleware/authAdmin.js";

async function addProduct(req, res) {
  try {
    await connection();

    await Product(req.body)
      .save()
      .then((data) => {
        return res.status(200).json({
          error: false,
          success: true,
          message: "Product added successfully...",
          product: data,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          success: false,
          message: error?.message || "An error occurred!",
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}

export default authAdminMiddleware(addProduct);