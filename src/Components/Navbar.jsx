import React from 'react'
import '../Styles/nav.css'

const Navbar = () => {
  return (
    <div className="nav">
    <div className='container'>
    <div className='logo'>
    <a href='#' className='img' ><img src='./Assets/logo.png' alt="logo"/></a>
    </div>
    <div className='list'>
    <ul>
      <li><a href='#home' className='li act'>Home</a></li>
      <li><a href='#profile' className='li'>Profile</a></li>
      <li><a href='#courses' className='li'>Courses</a></li>
      <li><a href='#contact' className='li'>Contact</a></li>
    </ul>
    </div>
    <button>Sgin In</button>
    
    </div>
      
    </div>
  )
}

export default Navbar
