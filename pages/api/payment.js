import Razorpay from "razorpay";

export default async function Payment(req, res) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.PAYMENT_KEY,
      key_secret: process.env.PAYMENT_SECRET,
    });
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).json({
        error: true,
        success: false,
        message: "Error in creating payment",
      });
    }
    return res.json({
      error: false,
      success: true,
      message: "Payment created successfully...",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      success: false,
      message: "Error in creating payment",
    });
  }
}
