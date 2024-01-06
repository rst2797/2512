// pages/api/sales-analytics.js
import Order from "../../../schema/orders"; // Update the path to your order schema
import { connection } from "../../../utils/database";

export default async function handler(req, res) {
  try {
    // Connect to the database
    await connection();

    // Fetch delivered orders
    const deliveredOrders = await Order.find({
      status: "delivered",
    });

    res.status(200).json(deliveredOrders);
  } catch (error) {
    console.error("Error fetching delivered orders:", error);
    res.status(500).json({
      error: true,
      message: "An error occurred while fetching delivered orders",
    });
  }
}
