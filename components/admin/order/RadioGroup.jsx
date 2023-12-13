import axios from "axios";
import { useState } from "react";

export default function RadioGroup({ id, status }) {
  const options = ["pending", "processing", "shipped", "delivered"];
  const [orderResponse, setOrderResponse] = useState(null);

  const handleStatusChange = (event, option) => {
    try {
      axios
        .post("/api/admin/update-order-status", {
          id,
          status: option,
        })
        .then(() => {
          axios.get(`/api/admin/get-order/${id}`).then((res) => {
            console.log(res.data)
            setOrderResponse(res.data);
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label key={option} className="inline-flex items-center py-1 font-bold tracking-wider">
          <input
            type="radio"
            className="form-radio w-5 h-5"
            name="radioGroup"
            value={orderResponse?.order?.status ?? status}
            defaultChecked={status === option}
            onChange={(e) => handleStatusChange(e, option)}
          />
          <span className="ml-2 capitalize">{option}</span>
        </label>
      ))}
    </div>
  );
}
