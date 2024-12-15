import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PackageForm = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    availableDates: '',
    image: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  // Encode the credentials (admin:admin123) to Base64
  const authCredentials = btoa('admin:admin123');
  useEffect(() => {
    if (id) {
      // Fetch the package to edit
      const retrievePackage = async () => {
        try {
          const response = await axios.get(`${backendUrl}/packages/${id}`);
          
          setFormData(response.data.myPackage);  // populate form fields with fetched package data
        } catch (error) {
          console.error("Error fetching package data:", error);
        }
      };

      retrievePackage();
    }
  }, [id, backendUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id
      ? `${backendUrl}/admin/packages/${id}`
      : `${backendUrl}/admin/packages`;

    try {
      await axios[method](url, formData, {
        headers: {
          'Authorization': `Basic ${authCredentials}`  // Include Authorization header
        }
      });
      navigate('/admin/packages');
    } catch (error) {
      console.error('Error saving package:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{id ? 'Edit' : 'Add'} Package</h2>
      <form onSubmit={handleSubmit}>
        {/* Package Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Package Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter package title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Package Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter package description"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Package Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter package price"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Available Dates */}
        <div className="mb-4">
          <label htmlFor="availableDates" className="block text-sm font-medium text-gray-700">Available Dates</label>
          <input
            type="date"
            id="availableDates"
            name="availableDates"
            value={formData.availableDates}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Package Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            {id ? 'Update' : 'Add'} Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default PackageForm;
