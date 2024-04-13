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
    const {
      order,
      user,
      totalPrice,
      postalCode,
      addressline1,
      addressline2,
      landmark,
    } = req.body;

    const orderToShip = {
      order_id: generateOrderId(order._id),
      order_date: modifyCreatedDateToShipmentDate(order.createdAt),
      pickup_location: "Primary",
      channel_id: "",
      billing_customer_name: user.name,
      billing_last_name: user.name,
      billing_address: order.deliveryAddress.address1,
      billing_address_2: order.deliveryAddress.address2,
      billing_city: `${order.deliveryAddress.address1} ${order.deliveryAddress.postalCode}`,
      billing_pincode: order.deliveryAddress.postalCode,
      billing_state: `${order.deliveryAddress.address1} ${order.deliveryAddress.postalCode}`,
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

    axios
      .post("https://apiv2.shiprocket.in/v1/external/auth/login", {
        email: "discretestructure3@gmail.com",
        password: "P#Brs12!!",
      })
      .then((tokenRes) => {
        axios
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
