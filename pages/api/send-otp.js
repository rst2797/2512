// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
import Twilio from "twilio";
export default function sendOtp(req, res) {
  const accountSid = "AC283789c90fa5e9e4d3fff4102debf008";
  const authToken = "6c3620f91f30f290a568e4f27b676647";
  const verifySid = "VAfd51ac5d14d6f158cc022dcfb588f0ba";
  const client = Twilio(accountSid, authToken);

  const { customer } = req.body;
  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: customer, channel: "sms" })
    .then((verification) => res.json(verification.status))
}
