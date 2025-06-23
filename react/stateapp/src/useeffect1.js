import React, { useEffect, useState } from 'react'
import Useeefect from './useeefect';

const Useeffect1 = () => {
    const [user, setuser] = useState([]);
      const [inputvalue, setInput] = useState('');
    
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.json())
          .then((data) => setuser(data));
          console.log("hi");
          
      },[]);
  return (
   <>
   <Useeefect/>
    <div className="m-4 p-4 max-w-2xl mx-auto bg-gray-100 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>

        <ul className="space-y-2 mb-4">
          {user.map((item) => (
            <li key={item.id} className="border border-gray-300 p-2 rounded bg-white shadow-sm">
              {item.title}
            </li>
          ))}
        </ul>

        <input
          type="text"
          // value={inputvalue}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text"
          className="border-2 border-gray-400 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-2 text-gray-700">You typed: {inputvalue}</p>
      </div>
   </>
  )
}

export default Useeffect1