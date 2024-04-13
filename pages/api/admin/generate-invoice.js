// https://apiv2.shiprocket.in/v1/external/orders/print/invoice

import axios from "axios";

export default async function getInvoice(req, res) {
  try {
    const tokenRes = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: "discretestructure3@gmail.com",
        password: "P#Brs12!!",
      }
    );

    const authToken = tokenRes.data.token;

    const shipRes = await axios.post(
      `https://apiv2.shiprocket.in/v1/external/orders/print/invoice`,
      {
        ids: [req.body.id],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    // Return the fetched orders
    return res.status(200).json(shipRes.data);
  } catch (error) {
    // If there's an error, return a 403 status and the error message
    return res.status(403).json({ error: error.message });
  }
}
