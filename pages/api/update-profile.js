import { User } from "../../schema/user";
import { connection } from "../../utils/database";

export default async function updateUserStatus(req, res) {
  try {
    await connection();

    const { userId, profile } = req.query;

    // Find the user by ID and update its profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profile: `${userId}_${profile}` },
      { new: true } // Set { new: true } to return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: updatedUser,
      message: "Profile updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
