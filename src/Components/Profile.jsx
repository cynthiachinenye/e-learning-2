import React from 'react'
import '../Styles/profile.css'
const Profile = () => {
  return (
    <div className='main-container'>
    <div className='container'>
    
     <div className='content'>
     <h1>Discover best classes for the best learning</h1>
     <p className='p'>We designed Connections Academy to give students all across the nation a tuition-free online public school that lets them learn.</p>
     <button>Get Started</button>
     <p>Not sure when to start? <span>Learn more</span></p>
     
     </div>
     <div className='img-box'>
     <img src="./Assets/Image and card.png"/>
     </div>
    </div>
    <div className='container'>
     <div className='text'>
     <h1>400+</h1>
     <p>Universities worldwide that partner with us</p>
     </div>
     <div className='img-container'>
     <img src='./Assets/Mask Group (1).png' className='img1' alt='images'/>
     <img src='./Assets/Mask Group.png' className='img2' alt='images'/>
     <img src='./Assets/Mask Group (2).png' className='img3' alt='images'/>
     <img src='./Assets/Mask Group (3).png' className='img4' alt='images'/>
     
     </div>
    
    </div>
      
    </div>
  )
}

export default Profile
