import React from 'react'
import '../Styles/about.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'


const About = () => {
  return (
    <div className='user'>
        <div className='left-side'>
          <h1>Transform your life through education</h1>
          <h3>“Love mathematics because of Besnik Academy”</h3>
          <p>"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."</p>
          <div className='img'>
            <img src='./Assets/Ellipse.png' alt='image' />
            <div className='des'>
            <h5>Milena Belmar</h5>
            <p>Canada</p>
            <div className='star-icon'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>


          </div>
            </div>
        </div>
        <div className='right-side'>
          <div className='icons'>
            <BsArrowLeft className='icon' />
            <BsArrowRight className='icon' />
          </div>
          <div className='content'>
            <h3>“There is so much to see and do all over world”</h3>
            <p>"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."</p>

            <div className='img'>
              <img src='./Assets/Ellipse(1).png' alt='image' />
              <div className='des'>
                <h5>Milena Belmar</h5>
                <p>Canada</p>
                <div className='star-icon'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default About
