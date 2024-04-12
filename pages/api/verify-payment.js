import authMiddleware from "../../middleware/auth";
import crypto from "crypto"

const verification = (req, res) => {
  const { order_id, payment_id } = req.body;
  const razorpay_signature = req.headers["x-razorpay-signature"];

  // Pass yours key_secret here
  const key_secret = "5SpIMVNda1SIAb5bfokJHd66";

  // STEP 8: Verification & Send Response to User

  // Creating hmac object
  let hmac = crypto.createHmac("sha256", key_secret);

  // Passing the data to be hashed
  hmac.update(order_id + "|" + payment_id);

  // Creating the hmac in the required format
  const generated_signature = hmac.digest("hex");

  if (razorpay_signature === generated_signature) {
    res.json({ success: true, message: "Payment has been verified" });
  } else res.json({ success: false, message: "Payment verification failed" });
};

export default verification;
