import authAdminMiddleware from "../../../middleware/authAdmin";
import { Contact } from "../../../schema/enquiries";
import { connection } from "../../../utils/database";

async function getEnquiries(req, res) {
  try {
    await connection();
    const Contacts = await Contact.find();
    res.status(200).json({
      error: false,
      success: true,
      Contacts,
      message: "Contacts found successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
export default authAdminMiddleware(getEnquiries);
