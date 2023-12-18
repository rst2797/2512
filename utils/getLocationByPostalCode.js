import axios from "axios";

async function getLocationByPostalCode(postalCode) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_ZIPPOPOTAM_API_URL}/us/${postalCode}`
    );
    const data = response.data;

    const location = {
      city: data.places[0].place_name,
      state: data.places[0].state,
      country: data.country,
    };

    return location;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
}

export { getLocationByPostalCode };
