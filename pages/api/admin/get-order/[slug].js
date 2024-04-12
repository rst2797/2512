import Order from "../../../../schema/orders";
import { connection } from "../../../../utils/database";

export default async function getOrders(req, res) {
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
}
