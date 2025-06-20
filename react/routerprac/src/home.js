import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
const home = () => {
  return (
    <>
    <Header/>    
    <div className='  bg-gray-300 '>

      <div className='flex justify-start'>
      <div className='mr-4 mt-5 '>
        <img src="https://plus.unsplash.com/premium_photo-1690561082636-06237f98bfab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" alt="Zomato Logo" className='w-[500px] h-[550px] mx-auto mb-4 ml-10  rounded-2xl ' />
      </div>
      <div className='mr-50 font-bold  flex flex-col justify-center '>
        <div className='text-red-600 text-8xl font-serif'>Welcome</div>
        <h2 className='text-blue-600 text-6xl'>To Ultimate</h2>
        <h3 className='text-red-500 text-5xl'>Food Devlivery App--<span className='text-pink-600'>Parul-<br/>Zomato</span></h3>
        <p className='text-gray-500 text-2xl mt-4'>"Good Food with Good Mindset"<span >&#127848;</span> </p>
        </div>
        
    </div>
    {/* <div className='ml-3 flex justify-start gap-x-2'>
           <button className='bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white  mt-2 mb-3'><Link to={'/counter'}>
          Go to Counter </Link></button>
           <button className='bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white  mt-2 mb-3'><Link to={'/tweet'}>
          Go to Twitter </Link></button>
           <button className='bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white  mt-2 mb-3'><Link to={'/apifetch'}>
          Go to FetchApi </Link></button>
           <button className='bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white  mt-2 mb-3'><Link to={'/emoji'}>
          Go to Emoji </Link></button>
           
    </div> */}
</div>
    
    </>
  )
}

export default home