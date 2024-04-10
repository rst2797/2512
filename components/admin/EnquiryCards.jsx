import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const EnquiryCards = ({ contacts }) => {
  const [contactState, setContactState] = useState(contacts);
  const handleResolve = (id) => {
    axios
      .delete(
        `${process.env.NEXT_API_BASE_URL}/api/admin/resolve-enquiry?enquiry_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setContactState((prevState) => {
            const updatedContacts = prevState.filter((ele) => ele._id !== id);
            return updatedContacts;
          });
          toast.success(res.data.message);
        } else {
          throw new Error(res.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="w-full h-auto max-h-[80vh] grid grid-cols-3 gap-4 overflow-y-scroll">
      {contactState.length > 0 ? (
        contactState.map((ele) => (
          <div className="cookie-card" key={ele._id}>
            <span className="title">
              {ele.name} | +{ele.phone.split("+")[1]}
            </span>
            <br />
            <span className="text-gray-400">{ele.email}</span>
            <p className="description">{ele.message}</p>
            <div className="actions">
              <button className="accept" onClick={() => handleResolve(ele._id)}>
                Resolved
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-[#ff0000] font-bold text-xl text-center w-full">
          No Enquiry Found!!
        </h2>
      )}
    </div>
  );
};

export default EnquiryCards;
