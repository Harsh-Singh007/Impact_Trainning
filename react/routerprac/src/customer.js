import React from 'react'
import Header from './header'
import Customercard from './customercard'   
const customer = () => {
  return (
   <>
    <Header/>
    <div className='flex flex-wrap  justify-start  bg-gray-300' >
      <Customercard imgurl="https://avatars.githubusercontent.com/u/103848489?v=4" cusname="Amit" address="Vadodara" order="5"/>
      <Customercard imgurl="https://avatars.githubusercontent.com/u/119554829?s=130&v=4" cusname="Adesh" address="Vadodara" order="3"/>
      <Customercard  imgurl="https://avatars.githubusercontent.com/u/121217947?s=130&v=4" cusname="Manan" address="Vadodara" order="10"/>
      <Customercard imgurl="https://avatars.githubusercontent.com/u/214207346?s=96&v=4" cusname="Nikesh" address="Vadodara" order="21"/>
      <Customercard  imgurl="https://avatars.githubusercontent.com/u/111278270?v=4"  cusname="Harsh" address="Vadodara" order="11"/>
        <Customercard imgurl="https://avatars.githubusercontent.com/u/213727177?s=130&v=4" cusname="Nakshtra" address="Vadodara" order="9"/>
    </div>
   </>

  )
}

export default customer