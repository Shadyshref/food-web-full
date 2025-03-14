import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreShopping'
import "./PlaceOrder.css"

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { gettotalcartamount, token, food_list, cartItems, url, userId } = useContext(StoreContext); 
  const [data, setData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
  });

  const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    food_list.forEach((item) => {
        if (cartItems[item._id] > 0) {
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id];
            orderItems.push(itemInfo);
        }
    });

    let orderData = {
        userId: userId,  
        address: data,
        items: orderItems,
        amount: gettotalcartamount() + 2, 
    };

    console.log("Order Data:", orderData);
    console.log("Token:", token);

    try {
        let response = await axios.post(`${url}/api/order/place`, orderData, {
            headers: { token }
        });

        console.log("Response:", response);

        if (response.data.success) {
            const { orderId } = response.data;
            navigate('/myorder');  
        } else {
            alert("Error placing the order");
        }
    } catch (error) {
        console.error("Error during placeOrder request:", error.response ? error.response.data : error);
        alert("An error occurred while placing the order.");
    }
};
useEffect(()=>{
if(!token){
  navigate("/cart")
}else if(gettotalcartamount()===0){
  navigate("/cart")

}
},[token])

  return (
    <form onSubmit={placeOrder} className="place-order-form">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-field">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-field">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-details">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-details">
              <b>Total</b>
              <b>${gettotalcartamount() + 2}</b>
            </div>
          </div>
          <button type="submit" style={{ cursor: "pointer", marginTop: "20px" }}>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;






























// const PlaceOrder = () => {
//   const navigate = useNavigate();
//   const {gettotalcartamount,token,food_list,cartItems,url}=useContext(StoreContext)  
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });

//   const onChangeHandler = (event) => {
//     setData(prev => ({ 
//       ...prev, 
//       [event.target.name]: event.target.value 
//     }));
//   };

//   const placeOrder = async (event) => {
//     event.preventDefault();

//     const authToken = token || localStorage.getItem('authToken');
//     if (!authToken) {
//       alert("Please log in to continue.");
//       navigate('/login');
//       return;
//     }

//     const orderItems = food_list
//       .filter(item => cartItems[item._id] > 0)
//       .map(item => ({
//         ...item,
//         quantity: cartItems[item._id]
//       }));

//     const orderData = {
//       address: {
//         street: data.street,
//         city: data.city,
//         state: data.state,
//         postal_code: data.zipcode,
//         country: data.country
//       },
//       items: orderItems,
//       amount: gettotalcartamount() + 2,
//     };

//     try {
//       const response = await axios.post(`${url}/api/order/place`, orderData, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.data.success) {
//         window.location.href = response.data.session_url;
//       } else {
//         alert("Error: " + response.data.message);
//       }
//     } catch (error) {
//       console.error("Order Error:", error);
//       if (error.response?.status === 401) {
//         localStorage.removeItem('authToken');
//         alert("Session expired. Please log in again.");
//         navigate('/login');
//       } else {
//         alert("Failed to place order: " + (error.response?.data?.message || error.message));
//       }
//     }
//   };

//   return (
//     <form className="place-order-form" onSubmit={placeOrder}>
//       <div className="place-order-left">
//         <p className='tittle'>Delivery information</p>
//         <div className="multi-feild">
//           <input 
//             required 
//             name='firstName' 
//             onChange={onChangeHandler} 
//             value={data.firstName} 
//             type="text" 
//             placeholder='First name' 
//           />
//           <input 
//             required  
//             name='lastName' 
//             onChange={onChangeHandler} 
//             value={data.lastName}  // تصحيح typo هنا من lasttName إلى lastName
//             type="text"
//             placeholder='Last name' 
//           />
//         </div>
//         <input 
//           required   
//           name='email' 
//           onChange={onChangeHandler} 
//           value={data.email} 
//           type="Email"
//           placeholder='Email address' 
//         />
//         <input 
//           required  
//           name='street' 
//           onChange={onChangeHandler} 
//           value={data.street} 
//           type="text" 
//           placeholder='Street' 
//         />
//         <div className="multi-feild">
//           <input 
//             required  
//             name='city' 
//             onChange={onChangeHandler} 
//             value={data.city} 
//             type="text"
//             placeholder='City' 
//           />
//           <input 
//             required  
//             name='state' 
//             onChange={onChangeHandler} 
//             value={data.state} 
//             type="text"
//             placeholder='State' 
//           />
//         </div>
//         <div className="multi-feild">
//           <input 
//             required  
//             name='zipcode' 
//             onChange={onChangeHandler} 
//             value={data.zipcode} 
//             type="text"
//             placeholder='Zip code' 
//           />
//           <input 
//             required  
//             name='country' 
//             onChange={onChangeHandler} 
//             value={data.country} 
//             type="text"
//             placeholder='Country' 
//           />
//         </div>
//         <input 
//           required  
//           name='phone' 
//           onChange={onChangeHandler} 
//           value={data.phone} 
//           type="text" 
//           placeholder='Phone' 
//         />
//       </div>
      
//       <div className="place-order-right">
//         <div className="cart-total">
//           <h1>Cart total</h1>
//           <div>
//             <div className="cart-details">
//               <p>Subtotal</p>
//               <p>${gettotalcartamount()}</p>
//             </div>
//             <hr />
//             <div className="cart-details">
//               <p>Delivery fee</p>
//               <p>${2}</p>
//             </div>
//             <hr />
//             <div className="cart-details">
//               <b>Total</b>
//               <b>${gettotalcartamount() + 2}</b>
//             </div>
//           </div>
//           <button 
//             type="submit"  
//             style={{ cursor: "pointer", marginTop: "20px" }}
//           >
//             PROCEED TO Payment
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;
