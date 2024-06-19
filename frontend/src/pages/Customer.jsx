import React, { useState } from 'react';
import axios from 'axios';

const Customer = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));

  const handleLogout = () => {
    const logoutTime = new Date().toISOString();

    axios.post('http://localhost:3000/logout', { username, logoutTime })
      .then(response => {
        console.log(response.data.message); // Assuming your backend sends a message
        localStorage.removeItem('username');
        setUsername('');
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div>
      {username && <div>Welcome {username}</div>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Customer;
