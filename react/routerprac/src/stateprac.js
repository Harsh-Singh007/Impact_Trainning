import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom'

const StatePrac = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 p-6">
        <Link to="/counter">
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-2xl px-6 py-3 font-bold text-white shadow-lg">
            Go to Counter
          </button>
        </Link>

        <Link to="/tweet">
          <button className="bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-2xl px-6 py-3 font-bold text-white shadow-lg">
            Go to Twitter
          </button>
        </Link>

        <Link to="/apifetch">
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 rounded-2xl px-6 py-3 font-bold text-white shadow-lg">
            Go to FetchApi
          </button>
        </Link>

        <Link to="/emoji">
          <button className="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 rounded-2xl px-6 py-3 font-bold text-white shadow-lg">
            Go to Emoji
          </button>
        </Link>
      </div>
    </>
  )
}

export default StatePrac
