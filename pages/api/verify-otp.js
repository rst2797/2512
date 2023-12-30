import Twilio from "twilio"

export default async function handler(req, res) {
  const accountSid = "AC283789c90fa5e9e4d3fff4102debf008";
  const authToken = "6c3620f91f30f290a568e4f27b676647";
  const verifySid = "VAfd51ac5d14d6f158cc022dcfb588f0ba";
  const client = Twilio(accountSid, authToken);
  
  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: "+919691174714", channel: "sms" })
    .then((verification) => console.log(verification.status))
    .then(() => {
      readline.question("Please enter the OTP:", (otpCode) => {
        client.verify.v2
          .services(verifySid)
          .verificationChecks.create({ to: "+919691174714", code: otpCode })
          .then((verification_check) => console.log(verification_check.status))
          .then(() => readline.close());
      });
    });
  }
  