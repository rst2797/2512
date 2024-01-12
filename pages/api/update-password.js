import bcrypt from "bcrypt";
import { User } from "../../schema/user";
import { connection } from "../../utils/database";
import authMiddleware from "../../middleware/auth";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { password } = req.body;
    const { email } = req.user;
    await connection();

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: true,
        success: false,
        message: "User not found",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password in the database
    await User.updateOne({ email }, { $set: { password: hashedPassword } });

    return res.status(200).json({
      error: false,
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
export default authMiddleware(handler);
