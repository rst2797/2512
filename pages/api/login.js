import Joi from "joi";
import mongoose from "mongoose";
import { connection } from "../../utils/database";

export default async function ppcContact(req, res) {
  try {
    await connection()
    const User =
      mongoose.models.User ||
      mongoose.model("User", {
        email: String,
        password: String,
      });

    // Validation Schema
    const loginSchema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
          "string.email": "Please provide a valid email address",
          "any.required": "Email is required",
        }),
      password: Joi.string()
        .min(6)
        .required(),
    });

    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: true,
        success: false,
        message: error.details[0].message,
      });
    }

    // Connect to MongoDB
    const { email, password } = req.body;
    const user = new User({ email, password });

    // Save user to MongoDB
    await user.save();

    // Find the saved user (this is just an example)
    const foundUser = await User.findOne({ email: "darshboyat@gmail.com" });

    // Do something with foundUser (handle success)
    res.status(200).json({
      error: false,
      success: true,
      message: "success",
      email,
      password,
      foundUser,
    });
  } catch (error) {
return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  } finally {
    // Close the MongoDB connection
    // mongoose.connection.close();
  }
}
