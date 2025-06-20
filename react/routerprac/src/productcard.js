import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { CiShop } from "react-icons/ci";



const productcard = ({imgurl,dish,hotel ,price}) => {
  return (
   <div className='rounded-2xl bg-white shadow-lg p-6 m-5 w-[200px] h-[350px]'>
        <img src={imgurl} alt="Product" className='w-full h-[150px] object-cover rounded-lg mb-4' />
        <p className='font-bold'>{dish}</p>
        <p><CiShop className='inline'></CiShop> {hotel}</p>
        <p className='mb-2'>₹{price}</p>
        <button className=' hover:text-blue-600 bg-yellow-500 p-1 rounded-md'> <GiShoppingCart className='text-2xl inline'  / > Order Now</button>
       </div>
  )
}

export default productcard