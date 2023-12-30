import axios from "axios";

const resetPassword = async (value) => {
  try {
    const response = await axios.post("/api/reset-password", value);
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    return error.response.data;
  }
};

export default resetPassword;
