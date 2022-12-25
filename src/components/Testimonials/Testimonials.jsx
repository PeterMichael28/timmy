import React from 'react'
import './Testimonials.css'
import pp from '../../assets/pp.png'
import pp2 from '../../assets/pp2.png'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
  return (
      <div id="testimonials" className="testimonials">
          <div className='tes-header'>
             <span className="title">Testimonials</span>
              <div>
                  <img src={leftArrow} alt="" />
                  <img src={rightArrow} alt="" />
              </div>
          </div>
          <div className='tes-div'>
              <div className='tes'>
                  <div>
                      <img src={pp}alt="" />
                      <div>
                          <h2>Lateef Akinyemi</h2>
                          <span>Head of Products, Jeetar</span>
                      </div>
                  </div>
                  <span>Timilehin is one of the best designers I have worked with and managed. Her zeal to work is unmatched, with a great future ahead of her, and she has managerial skills as well; her creative thought process is well endowed.</span>
              </div>
             { !mobile && <div className='tes'>
                  <div>
                      <img src={pp}alt="" />
                      <div>
                          <h2>Anayo Obiajulu</h2>
                          <span>Head of Products, Jeetar</span>
                      </div>
                  </div>
                  <span>Timi is an awesome product designer. She has a good eye for user experience and understands how to simplify processes and actions for users. Her designs are quite simple and visually appealing at the same time. </span>
              </div>}
              {!mobile && <div className='tes'>
                  <div>
                      <img src={pp2}alt="" />
                      <div>
                          <h2>Oghenetega Agadagba</h2>
                          <span>Head of Products, Jeetar</span>
                      </div>
                  </div>
                  <span>Oluwatimilehin is a highly creative designer who is dedicated to her client's needs and focuses on providing user-centric solutions. She is a goal-getter and possesses a great collaboration skills. </span>
              </div>}
          </div>
    </div>
  )
}

export default Testimonials