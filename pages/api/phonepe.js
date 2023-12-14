import crypto from "crypto";
import axios from "axios";

const generateTID = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);
  const marchantPrefix = "T";
  const transactionID = `${marchantPrefix}${randomNum}${timestamp}`;
  return transactionID;
};

export default async function newPayment(req, res) {
  try {
    const data = {
      merchantId: process.env.NEXT_MARCHANT_ID,
      merchantTransactionId: generateTID(),
      merchantUserId: "MUID9EFW8E9F89EWF8C",
      name: req.body.name,
      amount: req.body.amount * 100,
      redirectUrl: `/viewcheckout`,
      redirectMode: "GET",
      mobileNumber: req.body.number,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + process.env.NEXT_SALT_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const response = await axios.post(
      URL,
      { request: payloadMain },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
      }
    );

    console.log(response.data);
    return res.redirect(
      response.data.data.instrumentResponse.redirectInfo.url
    );
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
}
