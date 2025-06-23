import React, { use, useEffect, useState } from 'react'
import Useeefect from './useeefect'
const Formlocalstoarge = () => {
const [form,setForm]=useState({name:"",email:""})

// const storeData=()=>{
//     let olddata=JSON.parse(localStorage.getItem("formdata")) ||[];
//     let newdata=[...olddata,form];
//     localStorage.setItem("formdata",JSON.stringify(newdata));
// }

useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("formdata"))
    if(data)
    {
        setForm(data);
    }

},[])

useEffect(()=>{
      localStorage.setItem("formdata",JSON.stringify(form))
},[form])

  return (
   <>
   <Useeefect/>
  <div className="flex flex-col items-center justify-center  p-4">
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 w-[300px]">
    <h1 className="text-2xl font-bold font-serif text-gray-800">User Form</h1>
    <input
      type="text"
      className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter User Name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
    />
    <input
      type="text"
      className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter User Email"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
    />
    <div className="w-full flex flex-col items-start mt-3">
      <p className="text-gray-700">Name: <span className="font-semibold">{form.name}</span></p>
      <p className="text-gray-700">Email: <span className="font-semibold">{form.email}</span></p>
    </div>
  </div>
</div>

   
   
   
   </>
  )
}

export default Formlocalstoarge