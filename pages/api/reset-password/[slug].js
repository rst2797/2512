import { User } from "../../../schema/user";
import { connection } from "../../../utils/database";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function resetPassword(req, res) {
  try {
    await connection();

    const { newPassword } = req.body;
    const token = req.query.slug;

    // Verify the JWT token to get the email
    const decodedToken = jwt.verify(token, "2512SUSTAINABLECLOTHSPACCHIS12");

    // Find the user by email
    const user = await User.findOne({ email: decodedToken.email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $set: { password: hashedPassword } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      user: updatedUser,
      message: "Password reset successful",
    });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired",
      });
    }

    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}

