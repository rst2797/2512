import axios from "axios";
import fs from "fs";

async function authenticateShiprocket() {
  try {
    const response = await axios.post(
      "https://apiv2.shiprocket.in/v1/external/auth/login",
      {
        email: "discretestructure3@gmail.com",
        password: "P#Brs12!!",
      }
    );

    return response.data.token;
  } catch (error) {
    console.error("Error authenticating with Shiprocket API:", error.message);
    throw error;
  }
}
a
// Function to download Shiprocket invoice
export async function downloadInvoice(req, res) {
  try {
    const { orderId } = req.body;
    const accessToken = await authenticateShiprocket();

    const response = await axios.get(
      `https://apiv2.shiprocket.in/v1/external/invoices/order/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const invoiceData = response.data;

    fs.writeFileSync("invoice.pdf", invoiceData, "binary");

    console.log("Invoice downloaded successfully");
  } catch (error) {
    console.error("Error downloading invoice:", error.message);
  }
}
