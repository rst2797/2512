// pages/api/auth/login.js

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../schema/user";
import { connection } from "../../utils/database";

const generateResetToken = (userEmail) => {
  const secret = process.env.RESET_TOKEN_SECRET;
  const expiresIn = "1h"; // Token validity period

  const resetToken = jwt.sign({ email: userEmail }, secret, { expiresIn });

  return resetToken;
};

import nodemailer from "nodemailer";

const sendResetEmail = (userEmail, resetToken) => {
  const transporter = nodemailer.createTransport({
    // Set up your email transporter configuration
    // ...
  });

  const resetLink = `${process.env.NEXT_API_BASE_URL}/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: "your@email.com",
    to: userEmail,
    subject: "Password Reset",
    html: `Click <a href="${resetLink}">here</a> to reset your password.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return {error: true, success: false, error}
    } else {
      return {error: false, success: true, info: info.response}
    }
  });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { email } = req.body;
    return res
      .status(200)
      .json(sendResetEmail(email, generateResetToken(email)));
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
