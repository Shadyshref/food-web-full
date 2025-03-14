import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExplopreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menue</h1>
        <p className='explre-menu-text'>choose from deverse menu</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index}className="menu-list-item">
                        <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExplopreMenu























// //////////import React from 'react'
// import './ExploreMenu.css'
// import {menu_list} from '../../assets/assets'
// const ExplopreMenu = ({category,setCategory}) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//         <h1>Explore our menue</h1>
//         <p className='explre-menu-text'>choose from deverse menu</p>
//         <div className="explore-menu-list">
//             {menu_list.map((item,index)=>{
//                 return(
//                     <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index}className="menu-list-item">
//                         <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
//                         <p>{item.menu_name}</p>

//                     </div>
//                 )
//             })}
//         </div>
//         <hr />
//     </div>
//   )
// }

// export default ExplopreMenu