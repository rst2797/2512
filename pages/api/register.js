import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../schema/user.js";
import { connection } from "../../utils/database";

export default async function Register(req, res) {
  try {
    const { name, email, phone, password } = req.body;
     connection();
    
    const loginSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "Please provide a valid email address",
        "any.required": "Email is required",
      }),
      phone: Joi.string().required(),
      password: Joi.string().min(6).required(),
    });
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: true,
        success: false,
        message: error.details[0].message,
      });
    }
    
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        phone,
        password: hashedPassword,
      });
      await user.save();
      
      const token = jwt.sign(
        {
          email: email,
        },
        "2512SUSTAINABLECLOTHSPACCHIS12",
        { expiresIn: "2d" }
      );
      
      return res.status(200).json({
        error: false,
        success: true,
        message: "success",
        user,
        token,
      });
    } else {
      return res.status(403).json({
        error: true,
        success: false,
        message: "An User already exist with this email!!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
