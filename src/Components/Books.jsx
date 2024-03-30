import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("https://bookmanagementbackend-kt84.onrender.com//books");
        setBooks(res.data.books);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${window.location.origin}/delete/` + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className='bold text-black flex items-center justify-center py-8 text-4xl'>My Books</h1>
        <div className="flex flex-wrap justify-center">
          {books.map((book, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img src={book.image} className="w-full h-64 object-cover" alt={book.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.name}</div>
                <p className="text-gray-700 text-base">{book.description.length > 100 ? `${book.description.slice(0, 100)}...` : book.description}</p>
                <p className="text-gray-600 text-base mt-2">Author: {book.author}</p>
                <p className="text-gray-600 text-base">Price: {book.price}</p>
              </div>
              <div className="px-6 py-4 flex justify-between">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleUpdate(book._id)}>UPDATE</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(book._id)}>DELETE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Books;
