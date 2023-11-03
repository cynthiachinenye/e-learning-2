import React from 'react'
import { LuMonitorPlay, LuBookOpenCheck } from 'react-icons/lu'
import { BsJournalBookmark, BsFillCartPlusFill } from 'react-icons/bs'
import { TbSocial } from 'react-icons/tb'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { RxCountdownTimer } from 'react-icons/rx'
import '../Styles/courses.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Courses = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <div className='img-box'>
          <img src="./Assets/Group 114.png" alt='img' />
        </div>
        <div className='content'>
          <h2>How Our Online Public School Works</h2>
          <div className='icons'>

            <div className='content-order'>
              <div className='div-icon'>
                <LuMonitorPlay className="icon" />
              </div>

              <h5>Virtual Learning</h5>
              <p className='paragraph'>The only costs are for standard school supplies and voluntary field trips.</p>

            </div>

            <div className='content-order'>
              <div className='div-icon'>
                <BsJournalBookmark className="icon" />
              </div>

              <h5>Meaningful Education</h5>
              <p className='paragraph'>Many of our Connections Academy schools have additional accreditations.</p>

            </div>

            <div className='content-order'>
              <div className='div-icon'>
                <LuBookOpenCheck className="icon" />
              </div>

              <h5>Online curriculum</h5>
              <p className='paragraph'>Our curriculum prepares students to go further in life by giving them support.</p>

            </div>

            <div className='content-order'>
              <div className='div-icon'>
                <TbSocial className="icon" />
              </div>

              <h5>Social Interaction</h5>
              <p className='paragraph'>Students at Connections Academy collaborate on projects together.</p>

            </div>



          </div>
        </div>

      </div>

      <div className='details'>

        <div className='content'>

          <h2>How Our Online Public School Works</h2>

          <button className='btn'>View all courses</button>

        </div>

        <div className='cart'>
          <div className='img-box'>
            <img src="./Assets/cart (2).png" alt='img' />
            <p>Hands-On Python & R In Data Science</p>
            <div className='icons'>
              <div>
                <FaMoneyCheckAlt className='icon' />
                <span>1,45,690</span>
              </div>
              <div>
                <RxCountdownTimer className='icon' />
                <span>4 months</span>

              </div>

            </div>
            <button><BsFillCartPlusFill /> Add to Cart</button>
          </div>

          <div className='img-box'>
            <img src="./Assets/cart (1).png" alt='img' />
            <p>Science and Machine Learning Bootcamp</p>
            <div className='icons'>
              <div>
                <FaMoneyCheckAlt className='icon' />
                <span>1,45,690</span>
              </div>
              <div>
                <RxCountdownTimer className='icon' />
                <span>4 months</span>

              </div>

            </div>
            <button><BsFillCartPlusFill />Add to Cart</button>
          </div>

          <div className='img-box'>
            <img src="./Assets/Image (1).png" alt='img' />
            <p>The Python Mega Course:Real Applications</p>
            <div className='icons'>
              <div>
                <FaMoneyCheckAlt className='icon' />
                <span>1,45,690</span>
              </div>
              <div>
                <RxCountdownTimer className='icon' />
                <span>4 months</span>

              </div>

            </div>
            <button><BsFillCartPlusFill /> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className='contents'>

        <div className=' content-details'>
          <h1>Transform your life through education</h1>
          <p>Ariel Hocsman luanched a new career in software development by taking courses on besnik. what will you be able to do?</p>

          <button>Get Started</button>
        </div>

        <div className='container'>

          <div className='image-box'>
            <img src='./Assets/Group 141.png' alt='rex' />

          </div>
          <div className='images'>
            <div className='first image'>
              <img src='./Assets/Image (1).png' alt='cot' />
              <p>lecture 2 </p>
            </div>

            <div className='second image'>
              <img src='./Assets/Image (1).png' alt='video' />
              <p>lecture 3 </p>
            </div>

            <div className='third image'>
              <img src='./Assets/Image (1).png' alt='cut' />
              <p>lecture 4 </p>
            </div>
          </div>


        </div>
      </div>

      <div className='user'>
        <div className='left-side'>
          <h1>Transform your life through education</h1>
          <h3>“Love mathematics because of Besnik Academy”</h3>
          <p>"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."</p>
          <div className='img'>
            <img src='./Assets/Ellipse.png' alt='image' />
          </div>
        </div>
        <div className='right-side'>
          <div className='icons'>
            <BsArrowLeft className='icon' />
            <BsArrowRight className='icon'/>
          </div>
          <div className='content'>
            <h3>“There is so much to see and do all over world”</h3>
            <p>"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."</p>

            <div className='img'>
              <img src='./Assets/Ellipse(1).png' alt='image' />
            </div>
          </div>

        </div>
      </div>
    </div>



  )
}

export default Courses

