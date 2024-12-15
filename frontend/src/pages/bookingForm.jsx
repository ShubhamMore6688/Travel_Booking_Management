import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

function BookingForm() {
    const [searchParams] = useSearchParams();
    const packageId = searchParams.get("packageId");
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [formData, setFormData] = useState({
        customerName: "",
        email: "",
        phoneNumber: "",
        numberOfTravelers: 1,
        specialRequests: "",
      });
      const [successMessage, setSuccessMessage] = useState("");
      const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/bookings`, {
        ...formData,
        packageId,
      });
      console.log(response.data.booking._id)
      setSuccessMessage("Booking successful!");
      
      // navigate to the invoice page
      const bookingId = response.data.booking._id;
      navigate(`/invoice/${bookingId}`);
      
      setFormData({
        customerName: "",
        email: "",
        phoneNumber: "",
        numberOfTravelers: 1,
        specialRequests: "",
      });
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };  
  return (
    <div className="container mx-auto bg-gray-100 p-6 rounded shadow-lg mt-10">
    <h1 className="text-2xl font-bold mb-4">Book Your Tour</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.customerName}
          onChange={(e) =>
            setFormData({ ...formData, customerName: e.target.value })
          }
        />
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>
      <div>
        <label className="block font-medium">Phone Number</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
      </div>
      <div>
        <label className="block font-medium">Number of Travelers</label>
        <input
          type="number"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.numberOfTravelers}
          onChange={(e) =>
            setFormData({ ...formData, numberOfTravelers: e.target.value })
          }
        />
      </div>
      <div>
        <label className="block font-medium">Special Requests</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.specialRequests}
          onChange={(e) =>
            setFormData({ ...formData, specialRequests: e.target.value })
          }
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
      {successMessage && (
        <p className="text-green-500 font-medium mt-4">{successMessage}</p>
      )}
    </form>
  </div>
  )
}

export default BookingForm