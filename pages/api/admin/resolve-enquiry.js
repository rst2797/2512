import { Product } from "../../../schema/product";
import { connection } from "../../../utils/database";
import authAdminMiddleware from "../../../middleware/authAdmin";
import { Contact } from "../../../schema/enquiries";

async function resolveEnquiry(req, res) {
  try {
    await connection();

    const enquiryId = req.query.enquiry_id;

    if (!enquiryId) {
      return res.status(400).json({
        success: false,
        message: "Enquiry ID is required for deletion.",
      });
    }

    const deletedEnquiry = await Contact.deleteOne({ _id: enquiryId });

    if (deletedEnquiry.deletedCount === 1) {
      return res.status(200).json({
        error: false,
        success: true,
        message: "Enquiry deleted successfully.",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found or already deleted.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}

export default authAdminMiddleware(resolveEnquiry);
