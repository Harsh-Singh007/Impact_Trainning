import React, { useState } from 'react'




const Apifetch = () => {
   const [apidata, setApiData] = useState([]);    
const Fatchdata=()=>{
 
    fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=100").then((res)=>res.json()).then((data)=>setApiData(data.data))


}
  return (
  <>
     <button className='m-3 bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[100px]' onClick={Fatchdata}>Fetch Data</button>
     <div className=' ml-3 mt-4 flex gap-2 flex-wrap '>
        {apidata.map((item)=>(
            <div className='border-2 border-solid border-black p-3 rounded-lg h-[400px] w-[300px] overflow-y-scroll   shadow-2xl cursor-pointer' >
                <h2 className='font-bold text-lg text-center'>{item.title}</h2>
                <img src={`https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`}  className='w-[100px] h-[150px] mx-auto object-cover' /> 
                {/* <p>{item.Rated}</p>
                <p>{item.Year}</p> */}
            </div>
        ))}
        </div>

  </>
  )
}

export default Apifetch