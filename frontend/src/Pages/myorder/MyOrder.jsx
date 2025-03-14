
import { useContext, useEffect, useState } from "react"
import "./MyOrder.css"
import { StoreContext } from "../../context/StoreShopping"
import axios from "axios"
import { assets } from "../../assets/assets"

const myorder = () => {
    const[data,setData]=useState([])
    const{url,token}=useContext(StoreContext)

    const fetchOrders= async()=>{
        try {
            const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}})
            setData(response.data.data)
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
            
        }
        
       
        
    }
    useEffect(()=>{
if(token){
    fetchOrders()
}
    },[token])
  return (
    <div className="my-order">
        <h1 >My Orders</h1>
        <div className="contin">
            {data.map((order,index)=>{
                return(
                    <div key={index} className="my-order-order">
                        <img src={assets.parcel_icon} />
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name +"X"+item.quantity
                            }else{
                                return item.name +"X"+item.quantity+","
                            }

                            {

                            }

                        })}</p>
                        <p>${order.amount}</p>
                        <p>Item: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>

                    </div>
                )

            })}

        </div>
     
    </div>
  )
}

export default myorder
































