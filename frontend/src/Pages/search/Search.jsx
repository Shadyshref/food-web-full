import React, { useState, useContext,useEffect } from 'react';
import { StoreContext } from '../../context/StoreShopping';
import { assets } from '../../assets/assets';
import './search.css'

const Search = () => { 
  const {  cartItems,addToCart,removeFromcart, url, food_list ,token,setToken} = useContext(StoreContext);

  const [search, setSearch] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);

  const handleSearch = () => {
    const results = food_list.filter(food =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFoods(results);
  };
    useEffect(()=>{
           function LoadData(){
              
  
              if(localStorage.getItem("token")){
                  setToken(localStorage.getItem("token"))
                   handleSearch(localStorage.getItem("token"))
              }
          }
          LoadData()
      },[])

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search dishes..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="food-items-list">
        {filteredFoods.map((food) => ( 
          <div className='food-item' key={food.id}>
            <div className='food-item-image-container'>
              <img 
                className='food-item-image' 
                src={url + "/images/" +food.image} 
                alt={food.name} 
              />
                 {!cartItems[food._id]
                         ?<img className ="add" onClick={()=>addToCart(food._id)} src={assets.add_icon_white} alt="" />
                         :<div className='food-item-counter'>
                           
                           <img onClick={()=>removeFromcart(food._id)} src={assets.remove_icon_red} alt="" />
                           <p>{cartItems [food._id]}</p>
                           <img onClick={()=>addToCart(food._id)} src={assets.add_icon_green}  alt="" />
             
                           </div> 
                         }

              <div className='food-item-info'>
                <div className='food-item-rating'>
                  <p>{food.name}</p>
                  <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className='food-item-description'>{food.description}</p>
                <p className='food-item-price'>${food.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;