import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets'
import axios from 'axios'
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const[cartItems,setCartItem]=useState({});
    const[food_list,setFoodlist]=useState([])
    const url="http://localhost:5000"
    const[token,setToken]=useState('')
    const [searchQuery, setSearchQuery] = useState('');


    const addToCart= async(itemId)=>{
        if(!cartItems[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))

        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }

    }
    const removeFromcart=async (itemId)=>{
        
  setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  if(token){
    await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
}
        } 
    const gettotalcartamount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item)
                totalAmount+=itemInfo.price *cartItems[item]

            }
        }
        return totalAmount;
    }
    const fetchFoodList=async()=>{
        const response=await axios.get(url+'/api/food/list')
        setFoodlist(response.data.data)
        console.log(response.data);
        
    }
    const loadCartData = async (token) => {
        try {
          const response = await axios.get(url + "/api/cart/get", {headers: { token } });
          setCartItem(response.data.cartData);
        } catch (error) {
          console.error("Error loading cart:", error);
        }
      };
    useEffect(()=>{
        async function LoadData(){
            await fetchFoodList();

            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        LoadData()
    },[])

    

    const ContextValue={
        food_list,cartItems,setCartItem,addToCart,removeFromcart,gettotalcartamount,url,token,setToken,searchQuery,setSearchQuery
    }
    return(

        <StoreContext.Provider   value={ContextValue}>
            { props.children}

        </StoreContext.Provider>
    )


}


export default StoreContextProvider

