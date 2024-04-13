import axios from "axios";

async function cancelShipRocketOrder(req, res) {
  try {
    const { orderId } = req.body;

    const tokenRes = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: "discretestructure3@gmail.com",
        password: "P#Brs12!!",
      }
    );

    const shipRes = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/orders/cancel",
      { ids: [orderId] },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRes.data.token}`,
        },
      }
    );

    return res.status(200).json(shipRes.data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching orders:", error);
    return res.status(403).json({ error: error.message });
  }
}

export default cancelShipRocketOrder;
