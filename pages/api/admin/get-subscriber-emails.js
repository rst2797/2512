import authAdminMiddleware from "../../../middleware/authAdmin";
import { Emails } from "../../../schema/emails";
import { connection } from "../../../utils/database";

async function getSubscribedEmails(req, res) {
  try {
    await connection();
    const emails = await Emails.find();
    res.status(200).json({
      error: false,
      success: true,
      emails,
      message: "Emails found successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
export default authAdminMiddleware(getSubscribedEmails);
