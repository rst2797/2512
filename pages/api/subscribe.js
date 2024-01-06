import { Emails } from "../../schema/emails";
import { connection } from "../../utils/database";

export default async function Subscribe(req, res) {
  try {
    const { email } = req.body;
    await connection();
    const isEmailExist = await Emails.findOne({ email });
    if (!isEmailExist) {
      const emailObj = new Emails({
        email,
      });
      const result = await emailObj.save();
      return res.status(200).json({
        error: false,
        success: true,
        message: "Subscribed to newsletter...",
        result,
      });
    } else {
      throw new Error("An user already subscribed with this email!");
    }
  } catch (error) {
    return res.status(403).json({
      error: true,
      success: false,
      message: error.message, // Use error.message to get the error message
    });
  }
}
