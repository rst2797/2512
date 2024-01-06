import Joi from "joi";
import { connection } from "../../utils/database";
import { Contact } from "../../schema/enquiries.js";

export default async function Register(req, res) {
  try {
    const { name, email, phone, message } = req.body;
    await connection();

    const contactObj = Joi.object({
      name: Joi.string().required(),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
          "string.email": "Please provide a valid email address",
          "any.required": "Email is required",
        }),
      phone: Joi.string().required(),
      message: Joi.string().required(),
    });
    const { error } = contactObj.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: true,
        success: false,
        message: error.details[0].message,
      });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });
    await contact.save();

    return res.status(200).json({
      error: false,
      success: true,
      message: "Enquiry added successfully...",
      contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
