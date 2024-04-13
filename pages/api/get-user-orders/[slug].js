import axios from "axios";
import authMiddleware from "../../../middleware/auth";
import { User } from "../../../schema/user";
import { connection } from "../../../utils/database";

async function getUserOrders(req, res) {
  try {
    const userId = req.query.slug;
    const token = req.body.token;

    // Authenticate with Shiprocket API
    const tokenRes = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: "discretestructure3@gmail.com",
        password: "P#Brs12!!",
      }
    );

    // Fetch orders using the token
    const shipRes = await axios.get(
      "https://apiv2.shiprocket.in/v1/external/orders",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRes.data.token}`,
        },
      }
    );

    await connection();

    const user = await User.findById(userId);

    // Filter Shiprocket orders based on userId
    const filteredOrders = shipRes?.data?.data.filter(
      (order) => order.customer_email === user?.email
    );

    // Uncomment these lines if you're using a database connection and Mongoose
    // connection();
    // const orders = await Order.find({ user: userId });

    res.status(200).json({
      error: false,
      success: true,
      orders: filteredOrders,
      message: "Orders found successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}

export default authMiddleware(getUserOrders);
