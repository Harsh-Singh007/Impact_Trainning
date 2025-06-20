import React, { useState } from 'react'

const Emojji = () => {
    const [text, setText] = useState('');
    const [arr,setArr]=useState([]);
    const emoji=['😂', '💃','😍','😒','😁' ,'😎', '😢', '😡', '👍', '👎', '❤️ ', '🎉'];
     const addEmoji=(emoji)=>{
        setText(text + emoji);
     }

     const handlearr=()=>{
        setArr([text,...arr]);
     }

  return (
    <>
 <div className='m-3 border-2 border-solid border-black p-2 w-[500px] '>
    
          <input type='text' className='ml-3 border-2 border-solid border-black rounded-lg p-2 w-[440px] mt-3' placeholder='Message' onChange={(e)=>setText(e.target.value)} value={text}/>
            <div className='mt-3 flex gap-2 flex-wrap'>
                {
                    emoji.map((item,index)=>(
                        
                            <button key={index} onClick={()=>addEmoji(item)} className='text-2xl p-2 rounded-lg  '>
                              {item}
                            </button>
                        
                    ))
                }
                </div>
                <button className='ml-3 bg-blue-800 rounded-1xl rounded-xl p-2 font-bold text-white w-[100px] mt-2' onClick={handlearr}>
                    Send
                </button>
                <div className=' mt-3'>
                  {
                    arr.map((item,index)=>(
   <div key={index} className='ml-3 border-2 border-solid border-black p-2 mt-2 rounded-lg w-[300px] mb-3'>                        {item}</div>
                    ))
                  }
                </div>
                </div>
    </>
  )
}

export default Emojji