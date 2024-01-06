import authAdminMiddleware from "../../../middleware/authAdmin";
import Order from "../../../schema/orders";
import { connection } from "../../../utils/database";

async function updateOrderStatus(req, res) {
  try {
    connection();

    const { orderId, status } = req.body; // Assuming you pass the new status in the request body


    // Find the order by ID and update its status
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: { status } },
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
      message: "Order status updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
export default authAdminMiddleware(updateOrderStatus);
