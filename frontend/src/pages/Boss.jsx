import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Boss = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Mobile</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Login Date</th>
            <th className="px-4 py-2">Login Time</th>
            <th className="px-4 py-2">Logout Date</th>
            <th className="px-4 py-2">Logout Time</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.fullname}</td>
              <td className="border px-4 py-2">{user.mobile}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">
                <ul>
                  {user.loginTimes.map((loginTime, idx) => (
                    <li key={idx}>{formatDate(loginTime)}</li>
                  ))}
                </ul>
              </td>
              <td className="border px-4 py-2">
                <ul>
                  {user.loginTimes.map((loginTime, idx) => (
                    <li key={idx}>{formatTime(loginTime)}</li>
                  ))}
                </ul>
              </td>
              <td className="border px-4 py-2">
                <ul>
                  {user.logoutTimes.map((logoutTime, idx) => (
                    <li key={idx}>{formatDate(logoutTime)}</li>
                  ))}
                </ul>
              </td>
              <td className="border px-4 py-2">
                <ul>
                  {user.logoutTimes.map((logoutTime, idx) => (
                    <li key={idx}>{formatTime(logoutTime)}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boss;
