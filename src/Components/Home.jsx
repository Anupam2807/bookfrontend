import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Welcome to My Bookstore</h1>
          <Link to="/books">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Open Books Section
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
