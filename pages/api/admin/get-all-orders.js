import Order from "../../../schema/orders";
import { connection } from "../../../utils/database";

export default async function getOrders(req, res) {
  try {
    connection();
    const orders = await Order.find();
    res.status(200).json({
      error: false,
      success: true,
      orders,
      message: "Orders found successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
