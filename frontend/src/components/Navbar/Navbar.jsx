import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreShopping';
import { useContext, useEffect, useState } from 'react';

const Navbar = ({setShowLogin}) => {
  const [icon,setIcon]=useState(true)
  const[menu,setMenu]=useState("Home")
  const {gettotalcartamount,token,setToken}=useContext(StoreContext)

  const navigate=useNavigate()
  const logOut=()=>{
localStorage.removeItem("token")
setToken("")
navigate('/')
  }
  
  const gotoSearch=()=>{
    localStorage.getItem("token")
    setToken("")
    navigate('/search')
 
    
  }
  useEffect(()=>{
    if(window.location.pathname==="/search"){
      setIcon(false)
    }else{
      setIcon(true)
    }

  })

  return (
    <div className='navbar'>
       <Link  to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/'  onClick={()=>setMenu("Home")} className={menu==="Home"?"activ":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"activ":""}>Menu</a>
        <a href='#app-down' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"activ":""}>Mobile app</a>
        <a  href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"activ":""}>Contact us</a>
      </ul>
      <div className="navbar-right"> 
        {icon ?     <img className='search' onClick={gotoSearch} src={assets.search_icon} alt=""/>:<></>}
 
      <div className="navbar-search-icon">
         <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
        <div className={gettotalcartamount()===0?"":"dot"}></div>
      </div>
      {!token ? (
  <button onClick={() => setShowLogin(true)}>Sign In</button>
) : (
  <div className="test-ss">
    <img src={assets.profile_icon} alt="" />
    <ul className="log-or">
      <li onClick={()=>navigate("/myorder")}>
        <img src={assets.bag_icon} alt="Orders" />
        <p>Orders</p>
      </li>
      <hr />
      <li onClick={logOut}>
        <img src={assets.logout_icon} alt="Log out" />
        <p>Log out</p>
      </li>
    </ul>
  </div>
)}

      </div>  
    </div>

  )
}

export default Navbar;





























///








// const Navbar = ({setShowLogin}) => {
//   const[menu,setMenu]=useState("Home")
//   const {gettotalcartamount,token,setToken}=useContext(StoreContext)
//   const navigate=useNavigate()
//   const logOut=()=>{
// localStorage.removeItem("token")
// setToken("")
// navigate('/')
//   }
//   return (
//     <div className='navbar'>
//        <Link  to='/'><img src={assets.logo} alt="" className='logo' /></Link>
//       <ul className="navbar-menu">
//         <Link to='/'  onClick={()=>setMenu("Home")} className={menu==="Home"?"activ":""}>Home</Link>
//         <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"activ":""}>Menu</a>
//         <a href='#app-down' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"activ":""}>Mobile app</a>
//         <a  href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"activ":""}>Contact us</a>
//       </ul>
//       <div className="navbar-right"> 
//       <img src={assets.search_icon} alt="" />
//       <div className="navbar-search-icon">
//          <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
//         <div className={gettotalcartamount()===0?"":"dot"}></div>
//       </div>
//       {!token ? (
//   <button onClick={() => setShowLogin(true)}>Sign In</button>
// ) : (
//   <div className="test-ss">
//     <img src={assets.profile_icon} alt="" />
//     <ul className="log-or">
//       <li onClick={()=>navigate("/myorder")}>
//         <img src={assets.bag_icon} alt="Orders" />
//         <p>Orders</p>
//       </li>
//       <hr />
//       <li onClick={logOut}>
//         <img src={assets.logout_icon} alt="Log out" />
//         <p>Log out</p>
//       </li>
//     </ul>
//   </div>
// )}


//       </div>  
//     </div>

//   )
// }









