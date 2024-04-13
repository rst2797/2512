import axios from "axios";

async function getOrders(req, res) {
  try {
    // Authenticate with Shiprocket API
    const tokenRes = await axios.post("https://apiv2.shiprocket.in/v1/external/auth/login", {
      email: "discretestructure3@gmail.com",
      password: "P#Brs12!!",
    });

    // Fetch orders using the token
    const shipRes = await axios.get(
      "https://apiv2.shiprocket.in/v1/external/orders",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRes.data.token}`,
        },
      }
    );

    // Return the fetched orders
    return res.status(200).json(shipRes.data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching orders:", error);
    return res.status(403).json({ error: error.message });
  }
}

export default getOrders;
