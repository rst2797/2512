import authMiddleware from "../../middleware/auth.js";
import { User } from "../../schema/user.js";
import { connection } from "../../utils/database";

async function getUser(req, res) {
  try {
    const { id } = req.body;
    await connection();

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: ture,
        success: false,
        message: "User not found!!",
      });
    }
    return res.status(200).json({
      error: false,
      success: true,
      message: "success",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}

export default authMiddleware(getUser)