import mongoose from "mongoose";

export const User =
  mongoose.models.User ||
  mongoose.model("User", {
    role: {
      type: String,
      required: true,
      default: "USER"
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  });
