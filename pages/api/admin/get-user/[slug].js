import { User } from "../../../../schema/user";
import { connection } from "../../../../utils/database";

export default async function getUser(req, res) {
  try {
    const id = req.query.slug
    await connection();

    const user = await User.findById(id);
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
