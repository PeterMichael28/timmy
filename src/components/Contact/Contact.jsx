import React from 'react'
import './Contact.css'
import Button from '../Button'
import banner from '../../assets/contactBanner.png'
import shine from '../../assets/shine.png'
import shinemobile from '../../assets/mobilestar.png'

const Contact = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="contact" id="contact">
          <img className='banner' src={ banner } alt="" />
          <img className='shine' src={mobile? shinemobile : shine} alt="" />
          <span>Have a project in mind?</span>
          <span>Let's work together</span>
          <div className='contact-btn'>
          <Button text='Contact me'/> 
          </div>
    </div>
  )
}

export default Contact