import Order from "../../../schema/orders";
import { User } from "../../../schema/user";
import { connection } from "../../../utils/database";

export default async function getOrders(req, res) {
  try {
    const { orderId, userId } = req.body;
    connection();
    const order = await Order.findById(orderId);
    const user = await User.findById(userId);
    res.status(200).json({
      error: false,
      success: true,
      order,
      user,
      message: "Orders found successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
