import Stripe from "stripe"; // Import the configured Stripe instance

export default async function Payment(req, res) {
  const stripe = new Stripe(
    "sk_test_51McTGRSBgJHtGAFXWfHlUGCQzcrZPl09okkBH1on5MxJzytkILJir6eT8bv6ayJaH7VPH2fqJX5nUoZlbq3u1bpY00hl1UMjhO",
    {
      apiVersion: "2020-08-27",
    }
  );
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'paynow'],
        line_items: [
          {
            price_data: {
              currency: "INR",
              product_data: {
                name: "T-shirt",
              },
              unit_amount: req.body.amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:4545/success",
        cancel_url: "http://localhost:4545/viewcheckout",
      });

      console.log(session.url);
      res.status(200).send(session.url);
    } catch (error) {
      console.error("Error creating checkout session:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
