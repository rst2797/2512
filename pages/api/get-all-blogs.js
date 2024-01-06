import { Blogs } from "../../schema/blogs";
import { connection } from "../../utils/database";

export default async function getBlogs(req, res) {
  try {
    connection();
    const blogs = await Blogs.find();
    res.status(200).json({
      error: false,
      success: true,
      blogs,
      message: "Blogs found successfully...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
