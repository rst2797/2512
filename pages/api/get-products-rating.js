import { Rating } from "../../schema/rating";
import { connection } from "../../utils/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connection();

    const { productIds } = req.body;

    const ratings = [];

    for (const productId of productIds) {
      const productRatings = await Rating.find({ productId });
      const totalRatings = productRatings.length;
      const totalRatingValue = productRatings.reduce(
        (sum, rating) => sum + rating.value,
        0
      );

      const averageRating = totalRatingValue / totalRatings;

      ratings.push({
        [productId]: { averageRating: averageRating || 0, totalRatings },
      });
    }

    return res.status(200).json({
      success: true,
      ratings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
