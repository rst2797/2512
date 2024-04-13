import Order from "../../../schema/orders";
import { connection } from "../../../utils/database";

export default async function getOrders(req, res) {
  try {
    const orderId = req.query.slug;
    connection();
    const order = await Order.findById(orderId);
    res.status(200).json({
      error: false,
      success: true,
      order,
      message: "Orders found successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}