import Joi from "joi";
import bcrypt from "bcrypt";
import { User } from "../../schema/user.js";
import { connection } from "../../utils/database";
import Order from "../../schema/orders.js";

export default async function Register(req, res) {
  try {
    const { userId, items, totalAmount, paymentMethod } = req.body;

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
