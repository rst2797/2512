import axios from "axios";

async function generateAWB(orderId, token) {

  const raw = JSON.stringify({
    shipment_id: orderId,
    courier_id: "",
    status: "",
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: raw,
    redirect: "follow",
  };

  const res = await fetch(
    "https://apiv2.shiprocket.in/v1/external/courier/assign/awb",
    requestOptions
  );
  const deserializedResp = await res.json(); // Await here

  return deserializedResp;
}

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

    const awb = await generateAWB(orderId, tokenRes.data.token); // Await here

    return res.status(200).json(awb);
  } catch (error) {
    // Handle errors
    console.error("Error fetching orders:", error);
    return res.status(403).json({ error: error.message });
  }
}

export default createShipmment;
