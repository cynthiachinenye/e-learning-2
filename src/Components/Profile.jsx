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
     <img src='./Assets/image 112.png' className='img1' alt='images'/>
     <img src='./Assets/image 113.png' className='img2' alt='images'/>
     <img src='./Assets/image 114.png' className='img3' alt='images'/>
     <img src='./Assets/image 115.png' className='img4' alt='images'/>
     
     </div>
    
    </div>
      
    </div>
  )
}

export default Profile
