import React from 'react'
import Header from './header'
import { PiLockKeyOpenDuotone } from "react-icons/pi";
import { IoIosRocket } from "react-icons/io";
import { Link } from 'react-router-dom';
const loginsign = () => {
  return (
    <>
    <Header/>
 <div className='flex justify-center  h-screen bg-gray-300 rounded-2xl'>
       <div className='bg-white shadow-lg p-6 rounded-2xl w-[600px] h-[500px] mt-2'>
        <h2 className='text-3xl font-bold mb-4 text-center'> <PiLockKeyOpenDuotone className='inline'/> Welcome Back</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Email Address</label>
            <input type='email' className='w-full p-2 border rounded' placeholder='Enter email' />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Password</label>
            <input type='Password' className='w-full p-2 border rounded' placeholder='Enter Password' />
          </div>
          <div className='mb-4 flex flex-row gap-2'>

            <input type='checkbox' className='w-half p-2 border rounded'/>
            <label className=' block -gray-700 mb-2'>Remember Me</label>
            <label className=' ml-60 block -gray-700 mb-2'><Link to=""   className="hover:text-blue-400 transition-colors duration-200">Forget Password</Link></label>



          

          </div>
          <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'><IoIosRocket className='inline text-2xl' />Add Seller</button>
        </form>
        

    </div>
    </div>

    </>
    

  )
}

export default loginsign