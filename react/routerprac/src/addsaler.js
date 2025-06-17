import React from 'react'
import Header from './header'
import { FaBoxOpen } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";

const addsaler = () => {
  return (
    <>
    <Header/>
    <div className='flex justify-center  h-screen bg-gray-300 rounded-2xl'>
       <div className='bg-white shadow-lg p-6 rounded-2xl w-[600px] h-[500px] mt-2'>
        <h2 className='text-3xl font-bold mb-4 text-center'> <FaBoxOpen className='inline'/> Seller</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Seller Name</label>
            <input type='text' className='w-full p-2 border rounded' placeholder='Enter seller name' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Email</label>
            <input type='email' className='w-full p-2 border rounded' placeholder='Enter email' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Shop Name</label>
            <input type='email' className='w-full p-2 border rounded' placeholder='Enter Shop Name' />
          </div>
          <div className='mb-4 flex flex-row gap-2'>
            
            
            
          <label className=' block -gray-700 mb-2'>Phone Number</label>
            <input type='tel' className='w-half p-2 border rounded' placeholder='Enter phone number' />

            <label className=' block -gray-700 mb-2'>Shop Address</label>
            <input type='tel' className='w-half p-2 border rounded' placeholder='Enter Shop Address' />

          </div>
          <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'><MdDownloadDone className='inline text-2xl' />Add Seller</button>
        </form>
        

    </div>
    </div>

    </>
    

  )
}

export default addsaler