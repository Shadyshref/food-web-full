import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import'./FoodItem.css'
import { StoreContext } from '../../context/StoreShopping'

const FoodItem = ({id,name,price,description,image}) => {
 
  const{cartItems,addToCart,removeFromcart,url}=useContext(StoreContext)
  return (
    <div className='fooditem'>
        <div className='food-item-image-container'>
            <img className = 'food-item-image' src={url+"/images/"+ image} alt="" />
            {!cartItems[id]
            ?<img className ="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className='food-item-counter'>
              
              <img onClick={()=>removeFromcart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems [id]}</p>
              <img onClick={()=>addToCart(id)} src={assets.add_icon_green}  alt="" />

              </div> 
            }
            <div className='food-item-info'>
                <div className='food-item-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />

                </div>
                <p className='food-item-description'>{description}</p>
                <p className='food-item-price '>${price}</p>

            </div>

        </div>
    </div>
  )
}

export default FoodItem


















































// /////import React, { useContext } from 'react'
// import { assets } from '../../assets/assets'
// import'./FoodItem.css'
// import { StoreContext } from '../../context/StoreShopping'

// const FoodItem = ({id,name,price,description,image}) => {
 
//   const{cartItems,addToCart,removeFromcart,url}=useContext(StoreContext)
//   return (
//     <div className='fooditem'>
//         <div className='food-item-image-container'>
//             <img className = 'food-item-image' src={url+"/images/"+ image} alt="" />
//             {!cartItems[id]
//             ?<img className ="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
//             :<div className='food-item-counter'>
              
//               <img onClick={()=>removeFromcart(id)} src={assets.remove_icon_red} alt="" />
//               <p>{cartItems [id]}</p>
//               <img onClick={()=>addToCart(id)} src={assets.add_icon_green}  alt="" />

//               </div> 
//             }
//             <div className='food-item-info'>
//                 <div className='food-item-rating'>
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt="" />

//                 </div>
//                 <p className='food-item-description'>{description}</p>
//                 <p className='food-item-price '>${price}</p>

//             </div>

//         </div>
//     </div>
//   )
// }

// export default FoodItem