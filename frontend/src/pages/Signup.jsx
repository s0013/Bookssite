import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    mobile: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/signup', formData);
      alert(response.data.message);
      // Add navigation to a different page if signup is successful
      if (response.status === 201) {
        navigate('/login'); // Adjust the path as needed
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Error signing up');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
        <h2 className="mb-6 text-3xl font-semibold text-gray-700">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="fullname" 
            placeholder="Full Name" 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          />
          <input 
            type="text" 
            name="mobile" 
            placeholder="Mobile" 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          />
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          />
          <input 
            type="password" 
            name="confirmpassword" 
            placeholder="Confirm Password" 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Register</button>
        </form>
        <p className="mt-4 text-gray-600">
          Already registered? 
          <button 
            onClick={() => navigate('/login')} 
            className="ml-1 text-blue-500 underline hover:text-blue-700"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
