import React, { useState } from 'react';
import Header from './header';

const Apifetch = () => {
  const [apidata, setApiData] = useState([]);

 
      // fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=100")
      // .then((res) => res.json())
      // .then((data) => setApiData(data.data));

      async function fetchData() {
        let res= await fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100');
        let data=await res.json();
        setApiData(data.data);

        
      }
 

  return (
    <>
      <Header />
      <div className="p-4 bg-gray-100 min-h-screen">
        <button
          className="mb-6 bg-blue-800 hover:bg-blue-900 transition-all rounded-xl p-2 font-bold text-white w-[120px]"
          onClick={fetchData}
        >
          Fetch Data
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apidata.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-300 rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="font-bold text-lg text-center mb-2">{item.title}</h2>
              {item.image_id ? (
                <img
                  src={`https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                  No Image
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Apifetch;
