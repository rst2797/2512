import axios from "axios";

const login = async (value) => {
  try {
  const response = await axios.post("/api/login", value);

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    return error.response.data;
  }
};

export default login;
