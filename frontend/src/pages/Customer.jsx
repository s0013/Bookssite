import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Navbar from './Navbar'; // Assuming Navbar.jsx is in the same directory

const Customer = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    const logoutTime = new Date().toISOString();

    axios.post('http://localhost:3000/logout', { username, logoutTime })
      .then(response => {
        console.log(response.data.message); // Assuming your backend sends a message
        localStorage.removeItem('username');
        setUsername('');
        navigate('/login'); // Navigate to the login page
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div>
      <Navbar username={username} handleLogout={handleLogout} />
    </div>
  );
};

export default Customer;
