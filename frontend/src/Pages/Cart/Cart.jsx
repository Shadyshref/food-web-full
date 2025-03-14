
import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreShopping'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const{cartItems,food_list,removeFromcart,gettotalcartamount,url}=useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
        if(cartItems[item._id]>0)
          {
          
          return(
            <div>

            <div  className='cart-item-title cart-item-item'>
              <img src={url+"/images/"+ item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p  onClick={()=>removeFromcart(item._id)}style={{cursor:'pointer'}}>x</p>


            </div>
            <hr />
            </div>
          )
        }
      })}
      
      
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h1>Cart total</h1>
          <div>
            <div className="cart-details">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>

            </div>
            <hr />
            <div className="cart-details">
              <p>Delivary fee</p>
              <p>${gettotalcartamount()===0?0:2}</p>

            </div>
            <hr />
            <div className="cart-details">
              
              <b>Total</b>
              <b>${ gettotalcartamount()===0?0: gettotalcartamount()+2}</b>

            </div>
          </div>
          <button style={{cursor:"pointer"}} onClick={()=>navigate('/order')}>PROCCED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <div>
            <p>If ypu have apromo code,enter it here</p>
            <div className="promo-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
          </div>
        )
      }
          
              
            
    

    
  
          
        


export default Cart