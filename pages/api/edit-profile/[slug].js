import { User } from "../../../schema/user";
import { connection } from "../../../utils/database";

export default async function updateProfile(req, res) {
  try {
    await connection();

    // Ensure user is authenticated and retrieve user ID from the authentication process
    const userId = req.query.slug;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    Object.assign(user, req.body);

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
