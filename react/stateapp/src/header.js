import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 bg-opacity-95 backdrop-blur-md p-4 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <FaReact className="text-4xl text-cyan-300 animate-spin-slow" />
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
            State Uses
          </h1>
        </div>

        <ul className="flex flex-wrap gap-4 justify-center">
          {[
            { to: '/', label: 'Home' },
            { to: '/counter', label: 'Counter' },
            { to: '/apifetch', label: 'ApiFetch' },
            { to: '/twitter', label: 'Twitter' },
            { to: '/emoji', label: 'Emoji' },
            { to: '/useeffect', label: 'UseEffect' },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="text-white font-semibold hover:text-yellow-300 hover:bg-pink-600 hover:px-1 hover:py-1 rounded transition-all duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
