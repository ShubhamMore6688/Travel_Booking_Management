import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PackageDetails from "./pages/packageDetails";
import BookingForm from "./pages/bookingForm";
import InvoicePage from "./pages/InvoicePage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/packages/:id" element={<PackageDetails/>} />
        <Route path="/bookings" element={<BookingForm/>} />
        <Route path="/invoice/:bookingId" element={<InvoicePage/>} />
      </Routes>
    </Router>
  )
}

export default App
