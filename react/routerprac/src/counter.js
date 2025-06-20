import React, { useState } from 'react'



const Counter = () => {
    const [count,setCount] = useState(0);
    const [inputvalue, setInputValue] = useState('');
   

  return (
    <div className='mt-3 ml-3 bg-slate-400  border-2 border-black p-3 rounded-2xl w-[500px] flex flex-col gap-y-2 justify-center items-center'>
        <p className='text-2xl items-center ml-2'>Count :{count}</p>
        <button  className='bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[100px]'  onClick={() => setCount(count +  (parseInt(inputvalue)))}>Increment</button>
        <button className='bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[100px]' onClick={() => setCount(count- (parseInt(inputvalue)))}>Decrement</button>
        <button className='bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[100px]' onClick={() => setCount(0)}>Reset</button>
        
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value )}
          />
          <p>
            {parseInt(inputvalue) || 0}
          </p>
          
         

    </div>
  )
}

export default Counter