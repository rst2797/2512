import axios from 'axios';

const register = async (value) => {
  try {
    const response = await axios.post('/api/register', value);

    console.log('Registration successful:', response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error('User already exists:', error.response.data);
    } else {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
    }
    // throw error;
  }
};

export default register;
