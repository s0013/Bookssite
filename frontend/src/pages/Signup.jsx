import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link from react-router-dom

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/signup', formData); // Ensure the URL is correct
      alert("User registered successfully!");
      navigate('/login'); // Navigate to login page after successful registration
    } catch (error) {
      console.error("Error during API call:", error.response ? error.response.data : error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
        <input 
          type="text" 
          name="fullname" 
          value={formData.fullname} 
          onChange={handleChange} 
          required 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Mobile:</label>
        <input 
          type="text" 
          name="mobile" 
          value={formData.mobile} 
          onChange={handleChange} 
          required 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
        <input 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          required 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
        <input 
          type="password" 
          name="confirmpassword" 
          value={formData.confirmpassword} 
          onChange={handleChange} 
          required 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <p className="mt-2">Already registered? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default Signup;
