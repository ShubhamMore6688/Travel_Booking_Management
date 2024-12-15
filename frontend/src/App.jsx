import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PackageDetails from "./pages/packageDetails";
import BookingForm from "./pages/bookingForm";
import InvoicePage from "./pages/InvoicePage";
import AdminPanel from "./components/AdminPanel";
import PackagesList from "./components/PackagesList";
import PackageForm from "./components/PackageForm";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/packages/:id" element={<PackageDetails/>} />
        <Route path="/bookings" element={<BookingForm/>} />
        <Route path="/invoice/:bookingId" element={<InvoicePage/>} />

        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/packages" element={<PackagesList />} />
        <Route path="/admin/packages/add" element={<PackageForm />} />
        <Route path="/admin/packages/edit/:id" element={<PackageForm />} />
      </Routes>
    </Router>
  )
}

export default App
