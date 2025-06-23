import React, { useEffect, useState } from 'react'
import Useeefect from './useeefect';
const Autorefreshclock = () => {
const [time,setTime]=useState(new Date().toLocaleTimeString());

useEffect(()=>{
      const interval=setInterval(()=>{
         setTime(new Date().toLocaleTimeString())
      },1000)
      return ()=>{
        clearInterval(interval)
      }

      
})

  return (

    <>
    <Useeefect/>
    <div>{time}</div>
    </>
    
  )
}

export default Autorefreshclock