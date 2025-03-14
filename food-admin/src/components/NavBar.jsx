import htmlImage from "../images/html.png"
import {assets}from'../assets/assets'
const NavBar = () => {
  return (
    <div className=' flex justify-between  items-center  py-[8px] px-[4%]'>
       <img className=' w-[10%] max-w-[80px]' src={assets.logo} alt="" />

       <img className="w-[80px] h-[90px]" src={htmlImage} alt="HTML Image" />    </div>
  )
}

export default NavBar
