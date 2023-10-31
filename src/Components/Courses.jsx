import React from 'react'
import { LuMonitorPlay, LuBookOpenCheck } from 'react-icons/lu'
import { BsJournalBookmark } from 'react-icons/bs'
import { TbSocial } from 'react-icons/tb'
import '../Styles/courses.css'

const Courses = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <div className='img-box'>
          <img src="./Assets/Group 114.png" />
        </div>
        <div className='content'>
          <h2>How Our Online Public School Works</h2>
          <div className='icons'>

            <div className='content-order'>
            <div  className='div-icon'>
            <LuMonitorPlay  className="icon"/>
            </div>
           
              <h5>Virtual Learning</h5>
              <p>The only costs are for standard school supplies and voluntary field trips.</p>

            </div>

            <div className='content-order'>
            <div className='div-icon'>
            <BsJournalBookmark className="icon" />
            </div>
              
              <h5>Meaningful Education</h5>
              <p>Many of our Connections Academy schools have additional accreditations.</p>

            </div>

            <div className='content-order'>
            <div className='div-icon'>
            <LuBookOpenCheck  className="icon"/>
            </div>
           
              <h5>Online curriculum</h5>
              <p>Our curriculum prepares students to go further in life by giving them support.</p>

            </div>

            <div className='content-order'>
            <div className='div-icon'>
            <TbSocial className="icon"/>
            </div>
              
              <h5>Social Interaction</h5>
              <p>Students at Connections Academy collaborate on projects together.</p>

            </div>



          </div>
        </div>

      </div>

    </div>
  )
}

export default Courses
