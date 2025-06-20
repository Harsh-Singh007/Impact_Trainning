import React from 'react'
import { MdStars } from "react-icons/md";

const customercard = ({imgurl,cusname,address,order}) => {
  return (
   

        <div className='rounded-2xl bg-white shadow-lg p-6 m-3  w-[220px] h-[300px]'>
                  <img src={imgurl} alt="Product" className='w-full h-[150px] object-cover rounded-lg mb-4' />
                <p className='text-2xl font-bold'>{cusname}</p>
                <p>{address}</p>
                <p>Number Of Orders: {order}</p>
                <p>
                    {order > 10 ? <span className='text-green-500'><MdStars className='inline'></MdStars> Premium Customer</span> : <span className='text-red-500'> (Regular Customer)</span>}
                </p>
        </div> 
    
  )
}

export default customercard