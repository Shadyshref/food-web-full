import { useContext, useEffect, useState } from 'react'
import  './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreShopping'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {
  const {url, token, setToken} = useContext(StoreContext);
  const [cuurState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChaneHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;

    if (cuurState === "Login") {
      newUrl += "/api/user/login"; 
    } else {
      newUrl += "/api/user/register"; 
    }

    try {
      const response = await axios.post(newUrl, data);
      console.log(response);  
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false); 
      } else {
        if (response.data.message === "User already exists" && cuurState === "Sign up") {
          alert("This user already exists. Please log in.");
        } else {
          alert(response.data.message || "An unknown error occurred.");
        }
      }
    } catch (error) {
      console.error("Error during login or signup", error);
      alert("An error occurred while trying to connect to the server.");
    }
    
  }
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-tittle">
          <h1>{cuurState}</h1>
          <img style={{cursor: 'pointer', width: "16px"}} onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-poup-input">
          {cuurState === "Login" ? <></> : <input name='name' onChange={onChaneHandler} value={data.name} type="text" placeholder='Your name' required />}
          <input name='email' onChange={onChaneHandler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChaneHandler} value={data.password} type="password" placeholder='Your password' required />
        </div>
        <button type='submit'>{cuurState === "Sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {cuurState === "Login" ?
          <p>Create a new account? <span className='log' style={{cursor: "pointer"}} onClick={() => setCurrState('Sign up')}>Click Here</span></p>
          : <p>Already have an account? <span className='log' onClick={() => setCurrState('Login')}>Login here</span></p>
        }
      </form>
    </div>
  );
};


export default LoginPopup