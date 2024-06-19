import React from 'react';

const Navus = ({ handleLogout, handleAddBook, handleViewDetails }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Welcome to the Admin Dashboard</h1>
        <div>
          <button
            onClick={handleAddBook}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mr-4"
          >
            Add Book
          </button>
          <button
            onClick={handleViewDetails}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 mr-4"
          >
            View Details
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navus;
