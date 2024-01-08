import { Rating } from "../../schema/rating";
import { connection } from "../../utils/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connection();

    const { productId, userId, value } = req.body;

    // Validate the request payload
    if (!productId || !userId || !value) {
      return res.status(400).json({ success: false, message: "Invalid request payload" });
    }

    // Create a new rating instance
    const newRating = new Rating({
      productId,
      userId,
      value,
    });

    // Save the rating to the database
    await newRating.save();

    return res.status(201).json({ success: true, message: "Rating stored successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred while storing the rating",
    });
  }
}
