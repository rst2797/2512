import { User } from "../../schema/user.js";
import { connection } from "../../utils/database";

export default async function getUser(req, res) {
  try {
    const {id} = req.body;
    await connection();

    // console.log(id);
    const user = await User.findById(id);
    return res.status(200).json({
      error: false,
      success: true,
      message: "success",
      user,
    });
    // if (user) {
    //   return res.status(200).json({
    //     error: false,
    //     success: true,
    //     message: "success",
    //     user,
    //   });
    // } else {
    //   return res.status(403).json({
    //     error: true,
    //     success: false,
    //     message: "An User already exist with this email!!",
    //   });
    // }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
