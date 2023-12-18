import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    blogsummary: {
      type: String,
    },
    bloghtml: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/web/Blog/New+Project+(5).png",
    },
    alt: { type: String },
    metaTitle: { type: String, default: "Sustainable Clothing - 2512 blog" },
    metaDescription: {
      type: String,
      default:
        "Explore eco-friendly fashion trends in our 2512 blog. Join us for a greener, conscious approach to sustainable clothing. ",
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
