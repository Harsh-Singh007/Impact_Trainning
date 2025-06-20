import React, { useState } from 'react';
import Header from './header';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');


  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen flex justify-center items-start pt-10">
        <div className="bg-slate-300 border-2 border-black p-6 rounded-2xl w-full max-w-md flex flex-col gap-4 shadow-lg">
          <p className="text-3xl font-bold text-center">Count: {count}</p>

          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter number"
            className="p-2 rounded-md border border-gray-400 w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-3 justify-center flex-wrap">
            <button
              className="bg-blue-800 hover:bg-blue-900 rounded-xl p-2 font-bold text-white w-28"
              onClick={() => setCount(count + parseInt(inputValue))}
            >
              Increment
            </button>
            <button
              className="bg-blue-800 hover:bg-blue-900 rounded-xl p-2 font-bold text-white w-28"
              onClick={() => setCount(count - parseInt(inputValue) )}
            >
              Decrement
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 rounded-xl p-2 font-bold text-white w-28"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>

          <p className="text-center text-sm text-gray-700">Current Input: {parseInt(inputValue) || 0}</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
