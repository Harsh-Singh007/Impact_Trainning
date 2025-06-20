import React, { useState } from 'react';
import Header from './header';

const Emojji = () => {
  const [text, setText] = useState('');
  const [arr, setArr] = useState([]);
  const emoji = ['😂', '💃', '😍', '😒', '😁', '😎', '😢', '😡', '👍', '👎', '❤️', '🎉'];

  const addEmoji = (emoji) => {
    setText(text + emoji);
  };

  const handleArr = () => {
    if (text.trim()) {
      setArr([text, ...arr]);
      setText('');
    }
  };

  return (
    <>
      <Header />
      <div className="m-4 border-2 border-black p-4 max-w-md bg-gray-100 rounded-xl shadow-lg">
        <input
          type="text"
          className="border border-gray-400 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Message"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div className="mt-3 flex gap-2 flex-wrap">
          {emoji.map((item, index) => (
            <button
              key={index}
              onClick={() => addEmoji(item)}
              className="text-2xl p-2 rounded-lg hover:bg-gray-200 transition"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="mt-4 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-xl p-2 w-full transition"
          onClick={handleArr}
        >
          Send
        </button>

        <div className="mt-4 space-y-2">
          {arr.map((item, index) => (
            <div
              key={index}
              className="border border-black p-2 rounded-lg bg-white shadow"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Emojji;
