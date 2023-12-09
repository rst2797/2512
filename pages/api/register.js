import Joi from "joi";
import bcrypt from "bcrypt";
import { User } from "../../schema/user.js";
import { connection } from "../../utils/database";

export default async function Register(req, res) {
  try {
    const { name, email, phone, postalCode, password, address } = req.body;
    await connection();

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
      postalCode: Joi.string().required(),
      password: Joi.string().min(6).required(),
      address: Joi.string().required(),
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
      const user = new User({ name, email, phone, postalCode, password: hashedPassword, address });
      await user.save();
      return res.status(200).json({
        error: false,
        success: true,
        message: "success",
        user,
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
