// pages/api/auth/login.js

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../schema/user";
import { connection } from "../../utils/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { email, password } = req.body;
    await connection();

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: true,
        success: false,
        message: "User not found",
      });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: true,
        success: false,
        message: "Invalid password",
      });
    }

    // Sign JWT token
    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET, // Use environment variable for the secret key
      { expiresIn: "1h" }
    );

    // If everything is valid, return success along with the token
    return res.status(200).json({
      error: false,
      success: true,
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
