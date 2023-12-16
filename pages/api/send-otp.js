// pages/api/send-otp.js
import twilio from "twilio";

const accountSid = "AC283789c90fa5e9e4d3fff4102debf008";
const authToken = "6c3620f91f30f290a568e4f27b676647";
const client = twilio(accountSid, authToken);

const generateOTP = () => {
  const digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
};
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phoneNumber } = JSON.parse(req.body);

    const otp = generateOTP();
    try {
      await client.messages.create({
        to: phoneNumber,
        from: 9691174714,
        body: `Your OTP is: ${otp}`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending OTP:", error);
      res.status(500).json({ success: false, error: "Error sending OTP" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
