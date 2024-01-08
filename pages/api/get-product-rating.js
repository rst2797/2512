import { Rating } from "../../schema/rating";
import { connection } from "../../utils/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connection();

    const { productId } = req.body;

    const ratings = await Rating.find({ productId });

    if (!ratings || ratings.length === 0) {
      return res.status(200).json({
        success: true,
        averageRating: 0,
        totalRatings: 0,
      });
    }

    const totalRatings = ratings.length;
    const totalRatingValue = ratings.reduce((sum, rating) => sum + rating.value, 0);

    const averageRating = (totalRatingValue / totalRatings); // Calculate average out of 5

    return res.status(200).json({
      success: true,
      averageRating,
      totalRatings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
