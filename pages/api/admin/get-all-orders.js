import authAdminMiddleware from "../../../middleware/authAdmin";
import axios from "axios";

async function getOrders(req, res) {
  axios
    .post("https://apiv2.shiprocket.in/v1/external/auth/login", {
      email: "discretestructure3@gmail.com",
      password: "P#Brs12!!",
    })
    .then((tokenRes) => {
      Axios.post("https://apiv2.shiprocket.in/v1/external/orders", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRes.data.token}`,
        },
      })
        .then((shipRes) => {
          return res.status(200).json(shipRes.data);
        })
        .catch((error) => {
          return res.status(403).json(error);
        });
    });
}
export default authAdminMiddleware(getOrders);
