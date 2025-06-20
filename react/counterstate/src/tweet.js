import React, { use, useState } from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";

import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const Tweet = () => {
    const [tweet,setTweet] = useState('');
   const [arr,setArr]=useState([]);
   const [like,setLike] = useState(true);
    const [dislike,setDislike] = useState(true);
    let [clike,setClike] = useState(0);
    let [cdislike,setCdislike] = useState(0);



  const [editIndex, setEditIndex] = useState(null); 

  const handleTweet = () => {
    if (tweet.trim().length > 0 && tweet.length <= 240) {
      if (editIndex !== null) {
      
        const updatedArr = [...arr];
        updatedArr[editIndex] = tweet;
        setArr(updatedArr);
        setEditIndex(null); // Reset edit mode
      } else {
        setArr([tweet, ...arr]); // Add new tweet at the top
      }
      setTweet('');
    }
  };

  const handleEdit = (index) => {
    setTweet(arr[index]);
    setEditIndex(index);
  };

    const tweetdelete = (index) => {
            setArr(arr.filter((_,i)=>i!==index)) 
          } 

   
  return (
    <div className='m-3 border-2 border-solid border-black p-2 w-[500px] '>
        <h1 className='text-2xl font-bold text-center'>Tweet</h1>
     <textarea className='w-full h-[100px] border-2 border-solid border-black rounded-lg p-2' placeholder='write tweet' onChange={(e) =>{ if(e.target.value.length<=240){
    setTweet(e.target.value)
  }}} ></textarea>
        <p className='text-red-600 text-right'>{240 -tweet.length} </p>
        <p className='text-red-600 text-right'>{tweet.length>240?"write within 240 words":""} </p>
        <button className='bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[100px] mt-2' disabled={tweet.length<=0} onClick={handleTweet} > <FaSquareXTwitter className='inline'/> Tweet</button>

         <div className='mt-4'>
        {arr.map((item, index) => (
          <div key={index} className='border-2 border-solid border-black p-2 mt-2 rounded-lg'>
            {item}

            <button className= 'ml-5 rounded-lg p-2 bg-blue-600 text-white' onClick={()=>handleEdit(index)}>Edit</button>
            <button className= 'ml-1 rounded-lg p-2 bg-blue-600 text-white'  onClick={()=>tweetdelete(index) }>Delete</button>
                  <button className= 'ml-1 rounded-lg p-2 bg-blue-600 text-white' onClick={(e)=>{setClike(clike+1);setCdislike(cdislike==1?cdislike-1:cdislike=0)}}  disabled={clike==1}><AiFillLike/></button>
             <button className= 'ml-1 rounded-lg p-2 bg-blue-600 text-white'  onClick={()=>{setCdislike(cdislike+1);setClike(clike==1?clike-1:clike=0)}} disabled={cdislike==1} ><AiFillDislike/></button>               
              <p className='text-red-600 text-right'>Like : {clike}</p>
              <p className='text-red-600 text-right'>dislike : {cdislike}</p>


          </div>
        ))}
      </div>
    </div>
  )
}

export default Tweet