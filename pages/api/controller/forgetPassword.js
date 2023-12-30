import axios from "axios";

const forgetPassword = async (value) => {
  try {
    const response = await axios.post("/api/forget-password", value)

    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    return error.response.data;
  }
};

export default forgetPassword;
