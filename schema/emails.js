import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export const Emails = mongoose.models.Emails || mongoose.model("Emails", emailSchema);
