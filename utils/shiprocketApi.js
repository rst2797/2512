// utils/shiprocketApi.js
import axios from 'axios';

const SHIPROCKET_API_BASE_URL = 'https://api.shiprocket.in/v1/';

const createShipment = async () => {
  try {
    const orderDetails = {
        "order_id": "4236012",
        "order_date": "2023-01-01T12:00:00Z",
        "pickup_location": {
          "name": "John Doe",
          "phone": "1234567890",
          "address": "123 Main St",
          "city": "City",
          "state": "State",
          "pin_code": "123456"
        },
        "delivery_location": {
          "name": "Jane Doe",
          "phone": "9876543210",
          "address": "456 Second St",
          "city": "Another City",
          "state": "Another State",
          "pin_code": "452001"
        },
        "products": [
          {
            "name": "Product 1",
            "quantity": 2,
            "price": 20.99
          },
          {
            "name": "Product 2",
            "quantity": 1,
            "price": 15.49
          }
        ],
        "payment_method": "COD",
        "total_amount": 57.47,
        "shipping_charges": 5.0,
        "giftwrap_charges": 2.5,
        "sub_total": 49.97,
        "weight": 2.5,
        "length": 10,
        "breadth": 8,
        "height": 5,
        "pickup_scheduled_date": "2023-01-02",
        "pickup_scheduled_time": "10:00 AM - 12:00 PM"
      }
    const response = await axios.post(
      `${SHIPROCKET_API_BASE_URL}external/orders/create/`,
      orderDetails,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXYyLnNoaXByb2NrZXQuaW4vdjEvZXh0ZXJuYWwvYXV0aC9sb2dpbiIsImlhdCI6MTcwMjc1NDM5MCwiZXhwIjoxNzAzNjE4MzkwLCJuYmYiOjE3MDI3NTQzOTAsImp0aSI6IkR1bU9KWUdUR01OVk83eDEiLCJzdWIiOjQyMzYwMTIsInBydiI6IjA1YmI2NjBmNjdjYWM3NDVmN2IzZGExZWVmMTk3MTk1YTIxMWU2ZDkifQ.IrRNUQy5Ws48vMc-DZSkqGY_vvuQ0W-jGT4FSW9Xw2A',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Shiprocket API Error:', error.response?.data || error.message);
    throw error;
  }
};

export { createShipment };
