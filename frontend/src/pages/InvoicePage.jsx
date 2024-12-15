import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";

function InvoicePage() {
  const { bookingId } = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`${backendUrl}/booking/${bookingId}`);
        
      setBookingDetails(response.data.bookingDetail);
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    };
    fetchBookingDetails();
  }, [bookingId]);

  // Function to generate PDF
  const downloadPDF = () => {
    if (!bookingDetails) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Invoice", 105, 10, null, null, "center");
    doc.setFontSize(12);

    doc.text(`Booking ID: ${bookingDetails._id}`, 10, 30);
    doc.text(`Package: ${bookingDetails.packageName}`, 10, 40);
    doc.text(`Customer: ${bookingDetails.customerName}`, 10, 50);
    doc.text(`Email: ${bookingDetails.email}`, 10, 60);
    doc.text(`Phone: ${bookingDetails.phoneNumber}`, 10, 70);
    doc.text(`Total Amount: ₹${bookingDetails.totalPrice}`, 10, 80);

    doc.save("invoice.pdf");
  };

  if (!bookingDetails) return <div className="text-center mt-20 text-gray-500">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Invoice</h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600"><strong>Booking ID:</strong></p>
          <p className="text-gray-800">{bookingDetails._id}</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600"><strong>Package Name:</strong></p>
          <p className="text-gray-800">{bookingDetails.packageName}</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600"><strong>Customer Name:</strong></p>
          <p className="text-gray-800">{bookingDetails.customerName}</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600"><strong>Email:</strong></p>
          <p className="text-gray-800">{bookingDetails.email}</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600"><strong>Phone:</strong></p>
          <p className="text-gray-800">{bookingDetails.phoneNumber}</p>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-gray-600"><strong>Total Amount:</strong></p>
          <p className="text-gray-800 font-semibold">₹{bookingDetails.totalPrice}</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default InvoicePage;
