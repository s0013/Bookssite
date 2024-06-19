// Navbar.jsx
import React from 'react';

const Navbar = ({ username, handleLogout }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold" href="#">Welcome to the UserDashboard</a>
        <div className="flex items-center">
          {username && <div className="text-white mr-4">Welcome {username}</div>}
          {username && <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
