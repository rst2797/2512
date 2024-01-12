import { Blogs } from "../../schema/blogs";
import { connection } from "../../utils/database";

export default async function getBlogs(req, res) {
  try {
    connection();
    const blog = await Blogs.findById(req.query.blogId);
    if (blog) {
      return res.status(200).json({
        error: false,
        success: true,
        blog,
        message: "Blogs found successfully...",
      });
    } else {
      throw new Error("Blog not found!!");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
