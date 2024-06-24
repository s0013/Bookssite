import React, { useState, useEffect } from 'react';
import Back from './Back'

function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/purchases') // Assuming your backend is running on port 3000
      .then(response => response.json())
      .then(data => setPurchases(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='mt-4'>
    <Back />
    <div className="container mx-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 border-b border-gray-300">Username</th>
            <th className="px-6 py-3 bg-gray-100 border-b border-gray-300">Book Name</th>
            <th className="px-6 py-3 bg-gray-100 border-b border-gray-300">Author</th>
            <th className="px-6 py-3 bg-gray-100 border-b border-gray-300">Price</th>
            <th className="px-6 py-3 bg-gray-100 border-b border-gray-300">Address</th>
            <th className="px-6 py-3 bg-gray-100 border-b border-gray-300">Number of Copies</th>
            <th className="px-6 py-3 bg-gray-100 border-b border-gray-300">Total Price</th>
            <th className="px-6 py-3 bg-gray-100 border-b border-gray-300">Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map(purchase => (
            <tr key={purchase._id}>
              <td className="px-6 py-4 border-b border-gray-300">{purchase.username}</td>
              <td className="px-6 py-4 border-b border-gray-300">{purchase.book.bookname}</td>
              <td className="px-6 py-4 border-b border-gray-300">{purchase.book.author}</td>
              <td className="px-6 py-4 border-b border-gray-300">{purchase.book.price}</td>
              <td className="px-6 py-4 border-b border-gray-300">{purchase.address}</td>
              <td className="px-6 py-4 border-b border-gray-300">{purchase.numCopies}</td>
              <td className="px-6 py-4 border-b border-gray-300">{purchase.totalPrice}</td>
              <td className="px-6 py-4 border-b border-gray-300">{new Date(purchase.purchaseDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Purchases;
