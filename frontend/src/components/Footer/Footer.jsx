import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit enim harum consectetur laborum ratione velit sed eligendi unde adipisci, repudiandae animi est, nobis iste error quas obcaecati aliquam, ipsum dolor!</p>
                <div className="content-social">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-crnter">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivary</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+1-225-445-4456-555</li>
                    <li>Contact@toamto.com</li>
                </ul>
                
                </div>
        </div>
                <hr/>

                <p className='footer-copyright'>Copyright 2024 @tomato.com-all right reserved</p>


    </div>
  )
}

export default Footer