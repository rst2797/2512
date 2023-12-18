import axios from "axios";
import { getLocationByPostalCode } from "../../utils/getLocationByPostalCode";
import { modifyCreatedDateToShipmentDate } from "../../utils/modifyCreatedDateToShipmentDate";
const generateOrderId = (orderId) => {
  let Id = "";
  for (let i = 0; i < 6; i++) {
    Id += orderId[Math.floor(Math.random() * 10)];
  }
  return Id;
};
export default async function PlaceOrder(req, res) {
  try {
    const { order, user, totalPrice } = req.body;
    // const { city, state, country } = getLocationByPostalCode(user.postalCode);

    const orderToShip = {
      order_id: generateOrderId(order._id),
      order_date: modifyCreatedDateToShipmentDate(order.createdAt),
      pickup_location: "Primary",
      channel_id: "",
      comment: "",
      billing_customer_name: user.name,
      billing_last_name: user.name,
      billing_address: user.address,
      billing_address_2: "",
      billing_city: "Sehore",
      billing_pincode: user.postalCode,
      billing_state: "Madhya Pradesh",
      billing_country: "India",
      billing_email: user.email,
      billing_phone: user.phone,
      shipping_is_billing: true,
      shipping_customer_name: "",
      shipping_last_name: "",
      shipping_address: "",
      shipping_address_2: "",
      shipping_city: "",
      shipping_pincode: "",
      shipping_country: "",
      shipping_state: "",
      shipping_email: "",
      shipping_phone: "",
      order_items: order.items,
      payment_method: order.paymentMethod,
      shipping_charges: 0,
      giftwrap_charges: 0,
      transaction_charges: 0,
      total_discount: 0,
      sub_total: totalPrice,
      length: 10,
      breadth: 15,
      height: 20,
      weight: 2.5,
    };



    await axios
    .post("https://apiv2.shiprocket.in/v1/external/auth/login", {
      email: "discretestructure3@gmail.com",
      password: "P#Brs12!!",
    })
    .then(async (tokenRes) => {
      const resp = await axios
      .post(
        "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
        orderToShip,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenRes.data.token}`,
              },
            }
          )
          .then((shipRes) => {
            return res.status(200).json(shipRes.data);
          })
          .catch((error) => {
            return res.status(403).json(error);
          });
      });
  } catch (error) {
    res.status(500).json({
      error: true,
      success: false,
      message:
        "An Internal Error Occurred While Creating Shipment of You Order!!!",
    });
  }
}
