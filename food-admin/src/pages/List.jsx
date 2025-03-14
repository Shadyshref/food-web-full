import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from'axios'
import { toast } from 'react-toastify'
const List = ({url}) => {
  const [list,setList]=useState([])
 
  const fecthList=async ()=>{
try {
  const response=await axios.get(`${url}/api/food/list`)
  console.log(response.data);
  
  setList(response.data.data)
} catch (error) {
  toast.error("error")
}

  }
  const removeIcon=async (foodID)=>{
try {
  const response=await axios.post(`${url}/api/food/remove`,{id:foodID})
  await fecthList()
  if(response.data.success){
    toast.success(response.data.message)
  }

} catch (error) {
  
}
    
    
  }
  useEffect(()=>{
fecthList()
  },[])
  return (
    <div className="p-4">
    <p className="text-xl font-semibold mb-4">All Foods List</p>
    <div className="overflow-x-auto w-[800px]">
     
      <div className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        
      
        <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 font-bold text-lg text-gray-700 border-b border-black/20">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>
  
     
        {list.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-5 gap-4 items-center p-4 border-b border-black/20">
              <img
                src={`${url}/images/` + item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <p className="text-sm">{item.name}</p>
              <p className="text-sm">{item.category}</p>
              <p className="text-sm">${item.price}</p>
              <p
                onClick={() => removeIcon(item._id)}
                className="text-sm text-red-500 cursor-pointer hover:text-red-700"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  
  
  )
}

export default List
