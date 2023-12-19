import Order from "../../schema/orders";
import { connection } from "../../utils/database";

export default async function updateOrderStatus(req, res) {
  try {
    connection();

    const { id, status } = req.body; // Assuming you pass the new status in the request body

    // Find the order by ID and update its status
    if (status) {
      const updatedOrder = await Order.findByIdAndUpdate(
        id,
        { $set: { payment_status: status } },
        { new: true }
      );

      if (!updatedOrder) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }

      res.status(200).json({
        success: true,
        order: updatedOrder,
        message: "Payment status updated successfully",
      });
    } else {
      const deletedOrder = await Order.findByIdAndDelete(id);

      if (!deletedOrder) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Failed payment order deleted successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
