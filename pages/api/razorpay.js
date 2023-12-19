import Razorpay from "razorpay";
import shortid from "shortid";
const razorpay = new Razorpay({
  key_id: process.env.PAYMENT_KEY,
  key_secret: process.env.PAYMENT_SECRET,
});

async function handler(req, res) {
  const { amount, currency, userId, productId } = req.body;
  const payment_capture = 1;
  const totalAmount = amount * 100;
  const options = {
    amount: totalAmount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      paymentFor: "2512 | TShirts",
      userId,
      productId,
    },
  };
  const rzpay = await razorpay.orders.create(options);
  return res.json(rzpay);
}
export default handler;
