import Razorpay from "razorpay";
import shortid from "shortid";
const razorpay = new Razorpay({
  key_id: "rzp_test_uTiONXbSXdfqHV",
  key_secret: "5SpIMVNda1SIAb5bfokJHd66",
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
