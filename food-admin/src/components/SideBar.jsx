
import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"
const SideBar = () => {
  return (
    <div className=" container  w-[18%] min-h-[100vh]  border-[#a9a9a9] border-[1.5px] border-solid border-t-0  text-[max(1vw,10px)]" >
        <div className=" pt-[50px] pl-[20px] flex flex-col gap-[20px]">
            <NavLink to='/Add' className=" sidebar">
                <img src={assets.add_icon} alt="" />
                <p className="hidden  sm:block">Add Items</p>

            </NavLink>
            <NavLink to='List' className="sidebar" >
                <img src={assets.order_icon} alt="" />
                <p className="hidden  sm:block">List Items</p>

            </NavLink>
            <NavLink to='Orders' className="sidebar">
                <img src={assets.add_icon} alt="" />
                <p className="hidden  sm:block">Orders</p>

            </NavLink>
        </div>
      
    </div>
  )
}

export default SideBar
