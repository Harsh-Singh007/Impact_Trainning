import React from 'react'
import { Link } from 'react-router-dom'
import { MdFoodBank } from "react-icons/md";

const header = () => {
  return (
    <>
     <nav className="bg-gray-800 p-4 shadow-lg center flex justify-between h-[80px] items-center" >
      
     
      <Link
            to="/home"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
             <div className="text-2xl text-white font-bold">
        <MdFoodBank className='text-3xl text-yellow-400 inline mr-1' />Bhukhe
      </div>
          </Link>
      <ul className="flex space-x-6 text-white font-medium mr-3">
       
        <li>
          <Link
            to="/product"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            to="/addsaler"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Add Seller
          </Link>
        </li>
          <li>
          <Link
            to="/customer"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Customer
          </Link>
        </li>
         <li>
          <Link
            to="/stateprac"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            State Practice
          </Link>
        </li>
        <li>
          <Link
            to="/loginsign"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Login / SignUp
          </Link>
        </li>
        
      </ul>
    </nav>   
    
    </>
  )
}

export default header