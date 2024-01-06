// pages/api/sales-analytics.js
import mongoose from "mongoose";
import Order from "../../../schema/orders"; // Update the path to your order schema
import { connection } from "../../../utils/database";

export default async function handler(req, res) {
  try {
    const { year, targetedSales } = req.query;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Convert dates to MongoDB format
    const isoStartDate = (month) =>
      new Date(`${year}-${month}-01`).toISOString();
    const isoEndDate = (month) => {
      const endDate = new Date(`${year}-${month}-01`);
      endDate.setMonth(endDate.getMonth() + 1);
      return endDate.toISOString();
    };

    // Fetch orders for all months in the provided year
    await connection();
    const salesData = await Promise.all(
      months.map(async (month) => {
        const orders = await Order.find({
          createdAt: {
            $gte: isoStartDate(month),
            $lt: isoEndDate(month),
          },
          status: "delivered",
        });

        // Calculate total sales for the month
        const totalSalesForMonth = orders.reduce(
          (total, order) => total + order.totalAmount,
          0
        );

        return [month, totalSalesForMonth];
      })
    );

    res.status(200).json(salesData);
  } catch (error) {
    console.error("Error fetching sales analytics data:", error);
    res.status(500).json({
      error: true,
      message: "An error occurred while fetching sales analytics data",
    });
  }
}
