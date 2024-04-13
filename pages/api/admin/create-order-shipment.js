import axios from "axios";

async function createShipmment(req, res) {
  try {
    const { orderId } = req.body;

    const tokenRes = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: "discretestructure3@gmail.com",
        password: "P#Brs12!!",
      }
    );

    const awb = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/courier/assign/awb",
      {
        shipment_id: "522825937",
        courier_id: "",
        status: "",
      },
      {
        headers: {
          Authorization: `Bearer ${tokenRes}`,
        },
      }
    );
    const shipRes = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/courier/generate/pickup",
      { shipment_id: [orderId] },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRes.data.token}`,
        },
      }
    );

    return res.status(200).json(awb.data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching orders:", error);
    return res.status(403).json({ error: error.message });
  }
}

export default createShipmment;
