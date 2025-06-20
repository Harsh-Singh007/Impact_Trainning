import React, { useState } from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import Header from './header';

const Tweet = () => {
  const [tweet, setTweet] = useState('');
  const [arr, setArr] = useState([]);
  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(true);
  let [clike, setClike] = useState(0);
  let [cdislike, setCdislike] = useState(0);
  const [editIndex, setEditIndex] = useState(null);

  const handleTweet = () => {
    if (tweet.trim().length > 0 && tweet.length <= 240) {
      if (editIndex !== null) {
        const updatedArr = [...arr];
        updatedArr[editIndex] = tweet;
        setArr(updatedArr);
        setEditIndex(null);
      } else {
        setArr([tweet, ...arr]);
      }
      setTweet('');
    }
  };

  const handleEdit = (index) => {
    setTweet(arr[index]);
    setEditIndex(index);
  };

  const tweetdelete = (index) => {
    setArr(arr.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <div className="m-4 border-2 border-black p-4 max-w-md bg-gray-100 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-2">Tweet</h1>

        <textarea
          className="w-full h-[100px] border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write tweet"
          onChange={(e) => {
            if (e.target.value.length <= 240) {
              setTweet(e.target.value);
            }
          }}
          value={tweet}
        ></textarea>

        <p className="text-sm text-gray-600 text-right">
          {240 - tweet.length} characters remaining
        </p>
        <p className="text-red-600 text-right">
          {tweet.length > 240 ? "Write within 240 characters" : ""}
        </p>

        <button
          className="bg-blue-800 hover:bg-blue-900 rounded-xl p-2 font-bold text-white w-full mt-2 transition"
          disabled={tweet.length <= 0}
          onClick={handleTweet}
        >
          <FaSquareXTwitter className="inline mr-1" /> Tweet
        </button>

        <div className="mt-4 space-y-3">
          {arr.map((item, index) => (
            <div key={index} className="border border-black p-3 rounded-lg bg-white shadow">
              <p className="break-words">{item}</p>

              <div className="flex gap-2 mt-2 flex-wrap">
                <button
                  className="bg-blue-600 hover:bg-blue-700 rounded-lg p-1 text-white text-sm"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 rounded-lg p-1 text-white text-sm"
                  onClick={() => tweetdelete(index)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 rounded-lg p-1 text-white text-sm"
                  onClick={(e) => {
                    setClike(clike + 1);
                    setCdislike(cdislike === 1 ? cdislike - 1 : 0);
                  }}
                  disabled={clike === 1}
                >
                  <AiFillLike className="inline" /> Like: {clike}
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 rounded-lg p-1 text-white text-sm"
                  onClick={() => {
                    setCdislike(cdislike + 1);
                    setClike(clike === 1 ? clike - 1 : 0);
                  }}
                  disabled={cdislike === 1}
                >
                  <AiFillDislike className="inline" /> Dislike: {cdislike}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tweet;
