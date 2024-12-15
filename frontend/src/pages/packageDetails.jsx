import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function PackageDetails() {
    const {id} = useParams();
    const [packageDetail, setPackageDetail] = useState();
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect( ()=>{

        const getPackageDetail = async () => {
           try {
      
                const response = await axios.get(`${backendUrl}/packages/${id}`)
                console.log(response.data.myPackage)
                setPackageDetail(response.data.myPackage)
           } catch (error) {
                console.error("something went wrong", error)
           }
        } 

        if (id) {
            getPackageDetail();
        }
    }, [id])

    if (!packageDetail) {
        return <div>Loading...</div>;
      }
  return (
    <div className="container mx-auto my-10 bg-gray-100 p-6 rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{packageDetail.title}</h1>
      <p className="text-gray-600 mb-6">{packageDetail.description}</p>
      <p className="text-xl font-semibold">Price: ₹{packageDetail.price}</p>
      <button
        onClick={() => navigate(`/bookings?packageId=${id}`)}
        className="bg-green-500 text-white mt-6 py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Book Now
      </button>
    </div>
   
  )
}

export default PackageDetails