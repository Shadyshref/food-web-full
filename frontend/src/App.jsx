import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrder from './Pages/myorder/MyOrder'
import Search from './Pages/search/Search'



const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>

    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/order' element={<PlaceOrder/>}/>
    <Route path='/myorder' element={<MyOrder/>}/>
    <Route path='/search' element={<Search/>}/>
    </Routes>
    </div>
    <Footer/>
    
    </>
  )
}

export default App
