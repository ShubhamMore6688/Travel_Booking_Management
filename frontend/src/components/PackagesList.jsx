import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PackagesList = () => {
  const [packages, setPackages] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const authCredentials = btoa('admin:admin123'); // Base64 encode the credentials

  useEffect(() => {
    axios
      .get(`${backendUrl}/packages`)
      .then((response) => {
        setPackages(response.data.packages);
      })
      .catch((error) => {
        console.error('Error fetching packages:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${backendUrl}/admin/packages/${id}`, {
        headers: {
            'Authorization': `Basic ${authCredentials}`, // Add Authorization header
          },
      })
      .then(() => {
        setPackages(packages.filter((pkg) => pkg._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting package:', error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Manage Packages</h2>
      <Link
        to="/admin/packages/add"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mb-4"
      >
        Add New Package
      </Link>
      <div className="bg-white shadow-md rounded-lg p-4">
        <ul className="space-y-4">
          {packages.map((pkg) => (
            <li
              key={pkg._id}
              className="border-b border-gray-300 pb-4 flex justify-between items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700">{pkg.title}</h3>
                <p className="text-gray-600">{pkg.description}</p>
                <p className="text-lg font-medium text-gray-800 mt-2">Price: {pkg.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to={`/admin/packages/edit/${pkg._id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(pkg._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackagesList;
