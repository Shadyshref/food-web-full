import React, { useEffect, useState } from 'react'
import axios from'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets';
const order = ({url}) => {
 
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      console.log("Full Response:", response);  
  
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error('Error: Data fetch unsuccessful');
      }
    } catch (error) {
      console.error("Error fetching data:", error);  
      toast.error('Error: Failed to fetch orders');
    }
  };
  const statusHandler=async(e,orderId)=>{
 const response=await axios.post(url+"/api/order/status",{orderId,status:e.target.value})
 if(response.data.success)
  await fetchOrders( )
    

  }

  useEffect(() => {
    fetchOrders();
  }, [url]);  

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-lg max-w-full mx-auto w-full">
      <h2 className="text-2xl text-gray-800 mb-5 text-center">Order Page</h2>
      <div className="flex flex-col gap-5 px-2">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-gray-300 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between w-full"
          >
            <img
              src={assets.parcel_icon}
              alt="Parcel"
              className="w-12 h-12 object-contain mr-4 mb-4 sm:mb-0"
            />
            <div className="flex-1">
              <p className="text-gray-600 text-base mb-2">
                {order.items.map((item, index) => (
                  <span key={index}>
                    {item.name} X {item.quantity}
                    {index < order.items.length - 1 && ", "}
                  </span>
                ))}
              </p>
  
              <p className="text-gray-700 font-semibold">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="text-gray-600">
                <p>Street: {order.address.street + ","}</p>
                <p>City/State/Country: {order.address.city + ", " + order.address.state + ", " + order.address.country}</p>
              </div>
              <p className="text-gray-600">Phone: {order.address.phone}</p>
            </div>
  
            <div className="text-right text-gray-700 flex flex-col justify-between sm:text-left">
              <p className="mb-2"><strong>Items:</strong> {order.items.length}</p>
              <p className="mb-2"><strong>Total Amount:</strong> ${order.amount}</p>
  
              <select onChange={e=>statusHandler(e,order._id)} value={order.status} className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="food Processing">Food Processing</option>
                <option value="out for delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
  };
  


export default order
