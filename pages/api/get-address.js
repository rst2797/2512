import axios from "axios";

export default async function getAddress(req, res) {
  try {
    const { postalCode } = req.body;
    axios(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${postalCode}&types=address&key=AIzaSyAh_aDZhijrJ-R9l6oTU-iOXPZ9eXQzacY`
    ).then((resp) => {
      res.json(resp.data);
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "An error occurred!",
    });
  }
}
