import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="admin-panel min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Admin Panel</h2>
      <nav className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin/packages"
              className="block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Manage Packages
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminPanel;
