import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contetnt">
            <h2>Order your favourit food here</h2>
            <p>choose from deverse menu</p>
            <a href='#explore-menu'>
              <button >View menu </button>
            </a>
        </div>
    </div>
  )
}

export default Header

