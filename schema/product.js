import mongoose from "mongoose";

export const Product =
  mongoose.models.Product ||
  mongoose.model("Product", {
    name: {
      type: String,
      required: true,
    },
    breadcrumb: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    actualPrice: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offPercentage: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    numberOfRatings: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  });
