import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-down' id='app-down'>
        <p>For beter experience Download <br />Tomato App</p>
        <div className="app-down-paltform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store}alt="" />
        </div>
         </div>
  )
}

export default AppDownload