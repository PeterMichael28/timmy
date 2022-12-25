import React, {useState, useEffect}  from 'react'
import './Contact.css'
import Button from '../Button'
import banner from '../../assets/contactBanner.png'
import shine from '../../assets/shine.png'
import shinemobile from '../../assets/shine2.png'

const Contact = () => {

  const [mobile, setMobile] = useState('')

  useEffect( () => {
    window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
  }, [ window.innerWidth ] )
  

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