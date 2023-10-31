import React from 'react'
import { LuMonitorPlay, LuBookOpenCheck } from 'react-icons/lu'
import { BsJournalBookmark } from 'react-icons/bs'
import {TbSocial} from 'react-icons/tb'

const Courses = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <div className='img-box'>
          <img src="./Assets/Group 114.png" />
        </div>
        <div className='content'>
          <h1>HOW OUR ONLINE PUBLIC SCHOOL WORKS</h1>
          <div className='content-order'>
            <LuMonitorPlay />
            <h5>VIRTUAL LEARNING</h5>
            <p>The only costs are for standard school supplies and voluntary field trips.</p>

          </div>

          <div className='content-order'>
            <BsJournalBookmark />
            <h5>Meaningful Education</h5>
            <p>Many of our Connections Academy schools have additional accreditations.</p>

          </div>

          <div className='content-order'>
            <LuBookOpenCheck/>
            <h5>ONLINE CURRICULUM</h5>
            <p>Our curriculum prepares students to go further in life by giving them support.</p>

          </div>

          <div className='content-order'>
            <TbSocial/>
            <h5>SOCIAL INTERACTION</h5>
            <p>Students at Connections Academy collaborate on projects together.</p>

          </div>


        </div>

      </div>

    </div>
  )
}

export default Courses
