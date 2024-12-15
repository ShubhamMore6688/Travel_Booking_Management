import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PackageDetails from "./pages/packageDetails";
import BookingForm from "./pages/bookingForm";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/packages/:id" element={<PackageDetails/>} />
        <Route path="/bookings" element={<BookingForm/>} />
      </Routes>
    </Router>
  )
}

export default App
