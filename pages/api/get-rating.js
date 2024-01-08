// pages/api/ratings-by-user.js
import { Rating } from "../../schema/rating";
import { connection } from "../../utils/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connection();

    // Assuming you pass the user ID and product ID as query parameters
    const { userId, productId } = req.body;
    if (!userId) {
      return res.status(200).json({
        ratings: undefined,
        success: true,
      });
    }

    // Fetch ratings by user ID and product ID
    const ratings = await Rating.find({ userId, productId });

    return res.status(200).json({ success: true, ratings: ratings[0] });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
