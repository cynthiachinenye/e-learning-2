import React from 'react'
import { GrApple } from 'react-icons/gr'
import { FaGooglePlay } from 'react-icons/fa'
import '../Styles/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='logo'>
                    <img src='./Assets/Logo.png' alt='image' />
                    <p>Our motto to fulfill customer demand by making them satisfied with growing their business.</p>

                </div>
                <div className='about'>
                    <h1>About</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Features</li>
                        <li>News</li>
                        <li>Careers</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className='about'>
                    <h1>Support</h1>
                    <ul>
                        <li>Account</li>
                        <li>Support Center</li>
                        <li>Feedback</li>
                        <li>Contact Us</li>
                        <li>Accesbility</li>
                    </ul>

                </div>
                <div className='icon-btn'>
                
                <div className='app'>
                    <div className='app-div'>
                        <FaGooglePlay />
                    </div>
                    <div>
                        <p>GET IT ON</p>
                        <h3>Google Play</h3>
                    </div>

                </div>

                <div className='app'>
                    <div className='app-div'>
                        <GrApple />
                    </div>
                    <div>
                        <p>Download on the</p>
                        <h3>App Store</h3>
                    </div>

                </div>
                </div>



            </div>
            <hr className='hr' />
            <p className='p'>Copyright Besnik 2021 All rights reserved.</p>

        </div>
    )
}

export default Footer
