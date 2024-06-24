import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Back from './Back';

const All = () => {
  const [booksByCategory, setBooksByCategory] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        const books = response.data;
        const groupedBooks = groupBooksByCategory(books);
        setBooksByCategory(groupedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const groupBooksByCategory = (books) => {
    const groupedBooks = {};
    books.forEach((book) => {
      const category = book.categories;
      if (!groupedBooks[category]) {
        groupedBooks[category] = [];
      }
      groupedBooks[category].push(book);
    });
    return groupedBooks;
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-yellow-500 to-gray-200 rounded-lg shadow-lg bg ">
        <Back />
    <h1 className="text-3xl font-bold mb-6 font-cursive text-center">Books by Category You Can Choose Anyone</h1>

      {Object.entries(booksByCategory).map(([category, books]) => (
        <div key={category} className="mb-8">
           <h2 className="text-2xl font-semibold mb-4 font-cursive text-center">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book._id} className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-500 opacity-50 transform skew-y-6"></div>
                <img
  src={book.authors.imageurl}
  alt={book.authors.bookname}
  className="w-32 h-48 object-cover mb-4 rounded-md border border-gray-300 shadow-md mx-auto"
/>
                <h3 className="text-xl font-semibold mb-2">{book.authors.bookname}</h3>
                <p className="text-black mb-2">Author: {book.authors.author}</p>
                <p className="text-black mb-2">Publisher: {book.publishername}</p>
                <p className="text-black mb-2">Price: ${book.authors.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
