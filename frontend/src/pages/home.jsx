import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [packagedata, setPackageData] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        const retrivePackages = async () => {
            try {
               
                const response = await axios.get(`${backendUrl}/packages`)
                setPackageData(response.data.packages)
            } catch (error) {
                console.error("something went wrong", error)
            }
        }

        retrivePackages();
    },[])
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-center text-3xl font-bold mb-8">Explore Our Tour Packages</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {packagedata.map((pkg) => (
          <div
            key={pkg._id}
            className="bg-white rounded-lg shadow-lg p-5 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold mb-3">{pkg.title}</h2>
            <p className="text-gray-600 mb-3">{pkg.description}</p>
            <p className="font-bold text-lg mb-5">₹{pkg.price}</p>
            <Link
              to={`/packages/${pkg._id}`}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home