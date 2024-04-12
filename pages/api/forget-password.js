import { resetPassword } from "../../utils/template.js";
import { sendMail } from "../../utils/mailer.js";
import jwt from "jsonwebtoken";
import axios from "axios";

const generateResetToken = (userEmail) => {
  const secret = "2512SUSTAINABLECLOTHSPACCHIS12";
  const expiresIn = "1h";

  const resetToken = jwt.sign({ email: userEmail }, secret, { expiresIn });

  return resetToken;
};

async function handleContactUsRequest(email, customerName) {
  const resetToken = generateResetToken(email);
  const resetLink = `https://www.2512.in/reset-password?token=${resetToken}`;
  return new Promise(async (resolve, reject) => {
    try {
      const payload = {
        to: email,
        subject: "Forget Password | Pacchis Barah",
        html: resetPassword(customerName, resetLink),
      };
      await sendMail(payload);
      resolve(true);
    } catch (error) {
      reject({
        error: error?.message || "Email not sent!",
      });
    }
  });
}
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { email } = req.body;
    axios
      .post(`https://www.2512.in/api/get-user-with-email`, {
        email,
      })
      .then((userRes) => {
        handleContactUsRequest(email, userRes.data.user.name).then(
          (emailResp) => {
            return res.status(200).json({
              success: true,
              error: false,
            });
          }
        );
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
