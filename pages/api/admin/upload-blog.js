import authAdminMiddleware from "../../../middleware/authAdmin";
import { Blogs } from "../../../schema/blogs";
import { connection } from "../../../utils/database";

async function uploadBlog(req, res) {
  try {
    connection();

    const {
      title,
      bloghtml,
      blogsummary,
      alt,
      featureMedia,
      metaTitle,
      metaDescription,
    } = req.body;

    const blogData = new Blogs({
      title,
      bloghtml,
      blogsummary,
      alt,
      image: featureMedia,
      metaTitle,
      metaDescription,
    });

    const savedBlog = await blogData.save();
    res.status(200).json({
      error: false,
      success: true,
      blog: savedBlog,
      message: "Blog Uploaded successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
export default authAdminMiddleware(uploadBlog);
