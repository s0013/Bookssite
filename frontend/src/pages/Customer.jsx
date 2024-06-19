import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navus from './Navbar';
import { FaHeart } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import Carousal from './Carousal'; // Import the Carousal component
import Navbar from './Navbar';

const Customer = () => {
  const [username, setUsername] = useState('');
  const [books, setBooks] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const booksPerPage = 6; // Number of books per page
  const pagesVisited = pageNumber * booksPerPage;
  const navigate = useNavigate();

  const pageCount = Math.ceil(books.filter(book => 
    book.publishername.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.authors.bookname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.authors.author.toLowerCase().includes(searchQuery.toLowerCase())
  ).length / booksPerPage);

  useEffect(() => {
    const loggedInUsername = localStorage.getItem('username');
    if (loggedInUsername) {
      setUsername(loggedInUsername);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        if (response.data) {
          setBooks(response.data);
        }
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBooks();
  }, []);


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

  const toggleDescription = (index) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const addToWishlist = (book) => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlistItems.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    alert('Book added to wishlist!');
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setPageNumber(0); // Reset to first page when a new search is made
  };

  const filteredBooks = books.filter(book =>
    book.publishername.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.authors.bookname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.authors.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar username={username} handleLogout={handleLogout} />
      <Carousal /> {/* Add the Carousal component here */}
      <div className="flex justify-center mt-4">
      <input
  type="text"
  placeholder="Search by Publisher, Author, or Book Name"
  value={searchQuery}
  onChange={handleSearch}
  className="border border-gray-300 px-4 py-2 rounded-lg w-1/2 bg-gray-200 text-black" // Custom styles for the search bar
/>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-8 mb-8">
        {filteredBooks.slice(pagesVisited, pagesVisited + booksPerPage).map((book, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl">
            {book.authors && (
              <>
                <img
                  src={book.authors.imageurl}
                  alt={book.authors.bookname}
                  className="w-32 h-48 object-cover mb-2 rounded-md border border-gray-300 shadow-md"
                />
                <div className="mb-2">
                  <p className="text-gray-600 font-semibold">Publisher Name: {book.publishername}</p>
                  <p className="text-gray-600 font-semibold">Book Name: {book.authors.bookname}</p>
                </div>
                <p className="text-gray-600 mb-2 font-semibold">Author: {book.authors.author}</p>
                <p className="text-gray-700">
                  {expandedDescriptions[index] ? book.authors.description : `${book.authors.description.slice(0, 100)}...`}
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-blue-500 hover:text-blue-700 ml-1"
                  >
                    {expandedDescriptions[index] ? 'Show Less' : 'Read More'}
                  </button>
                </p>
                <button
                  onClick={() => addToWishlist(book)}
                  className="flex items-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  <FaHeart className="mr-2" />
                  Add to Wishlist
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-8">
      <ReactPaginate
  previousLabel={'Previous'}
  nextLabel={'Next'}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={'flex justify-center mt-4 space-x-2'}
  previousLinkClassName={
    'border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out'
  }
  nextLinkClassName={
    'border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out'
  }
  disabledClassName={'opacity-50 cursor-not-allowed'}
  activeClassName={'bg-blue-500 text-white border-blue-500 px-3 py-1 rounded-full'}
  pageClassName={'border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out'}
  pageLinkClassName={'focus:outline-none'}
  breakClassName={'px-3 py-1'}
/>
      </div>
    </div>
  );
};

export default Customer;
