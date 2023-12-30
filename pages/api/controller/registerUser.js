import axios from "axios";

const register = async (value) => {
  try {
    const response = await axios.post("/api/register", value);

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    return error.response.data;
  }
};

export default register;
