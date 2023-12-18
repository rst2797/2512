import Order from "../../../schema/orders";
import { connection } from "../../../utils/database";

export default async function getUserOrders(req, res) {
  try {
    const userId = req.query.slug;
    connection();
    const orders = await Order.find({user: userId});
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
