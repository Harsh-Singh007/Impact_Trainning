import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

const Home = () => {
  const links = [
    { to: '/counter', label: 'Counter' },
    { to: '/apifetch', label: 'ApiFetch' },
    { to: '/twitter', label: 'Twitter' },
    { to: '/emoji', label: 'Emoji' },
    { to: '/useeffect', label: 'UseEffect' },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center font-semibold text-gray-700 hover:text-blue-700 border border-gray-200 hover:border-blue-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
