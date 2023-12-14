import Order from "../../schema/orders.js";
import {connection} from "../../utils/database.js"

export default async function PlaceOrder(req, res) {
  try {
    const { userId, items, totalAmount, paymentMethod } = req.body;

    await connection()
    const order = new Order({
      user: userId,
      items,
      totalAmount,
      paymentMethod,
    });
    await order.save();
    return res.status(200).json({
      error: false,
      success: true,
      message: "Successfully placed order...",
      orderId: order._id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
