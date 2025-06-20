import React, { useEffect, useState } from 'react'

const Useeefect = () => {
    const [user,setuser]=useState([])
    const [inputvalue,setInput]=useState("")
  
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>setuser(data));


    },[])

  return (
   <>
   <ul>
   {
    user.map((item)=>(
        <ul>
            <li key={item.id}>{item.title}</li>
        </ul>
    ))
   }
   </ul>
   <input type='text' value={inputvalue} onChange={(e)=>setInput(e.target.value)} placeholder='enter' className='border-2px'/>
   <p>{inputvalue}</p>
   </>
  )
}

export default Useeefect