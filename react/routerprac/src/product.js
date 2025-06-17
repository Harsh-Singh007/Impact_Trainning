import React from 'react'
import Header from './header'
import { GiShoppingCart } from "react-icons/gi";

const product = () => {
  return (
    <>
    <Header/>
    <div className='flex justify-start  h-screen bg-gray-300 '>

     <div className='rounded-2xl bg-white shadow-lg p-6 m-10 w-[200px] h-[300px]'>
        <GiShoppingCart className='text-3xl' />
      <h2 className='font-bold text-2xl mb-1'>Product 1</h2>
      <p>
        This is a short Product description with some details about the product.
      </p>
     </div>

      <div className='rounded-2xl bg-white shadow-lg p-6 m-10 w-[200px] h-[300px]'>
        <GiShoppingCart className='text-3xl' />
      <h2 className='font-bold text-2xl mb-1'>Product 1</h2>
      <p>
        This is a short Product description with some details about the product.
      </p>
     </div>
      <div className='rounded-2xl bg-white shadow-lg p-6 m-10 w-[200px] h-[300px]'>
        <GiShoppingCart className='text-3xl' />
      <h2 className='font-bold text-2xl mb-1'>Product 1</h2>
      <p>
        This is a short Product description with some details about the product.
      </p>
     </div>

      <div className='rounded-2xl bg-white shadow-lg p-6 m-10 w-[200px] h-[300px]'>
        <GiShoppingCart className='text-3xl' />
      <h2 className='font-bold text-2xl mb-1'>Product 1</h2>
      <p>
        This is a short Product description with some details about the product.
      </p>
     </div>
      <div className='rounded-2xl bg-white shadow-lg p-6 m-10 w-[200px] h-[300px]'>
        <GiShoppingCart className='text-3xl' />
      <h2 className='font-bold text-2xl mb-1'>Product 1</h2>
      <p>
        This is a short Product description with some details about the product.
      </p>
     </div>
         

    </div>
    </>
      
  )
}

export default product