import React, { useState } from 'react'

const Prac = () => {
 let emoji=['😁','😒','💃','👌','😊','💕','😘','😍','😎','😉','🤞','👍'];
 const [arr,setArr]=useState([])
const [text,setText]=useState("");
const addemoji=(emoji)=>{
    setText(text+emoji)
}
const handlearr=()=>{
    setArr([text,...arr])
}


  return (
  <>
     <input className='w-[200px] p-2 m-3 outline-none focus:to-blue-700  focus:ring-2 rounded-xl border-2 border-black' placeholder='Message' value={text} onChange={(e)=>setText(e.target.value)} />
     
     <div>
        {
            emoji.map((item,index)=>{return(
                <button className=' hover:border-2 border-yellow-500 text-2xl m-3' key={index} onClick={()=>addemoji(item)}>{item}</button>
            )})
        }
     </div>

     <button className='bg-blue-400 rounded-xl p-2 w-[80px] m-3' onClick={handlearr}>
        Send
     </button>

     <div className='flex flex-col gap-y-2'>
       {arr.map((item,index)=>{ return (
       <div className=' w-[200px] p-2 m-3  rounded-xl border-2 border-black' key={index}>
           {item}

       </div>

       )})}
     </div>

  </>
  )
}

export default Prac