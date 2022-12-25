import React, { useState, useEffect } from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-scroll';

const Headers = () => {

  const [mobile, setMobile] = useState('')

  useEffect( () => {
    window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
  }, [window.innerWidth])

  const mobileh = window.innerHeight > 5 ? true : false;
  const [open, setOpen] = useState(false)


  return (
      <div className='headers'>
      {
        !mobile && <div className="headers-social">
              <span>Twitter</span>
              <span>Behance</span>
              <span>LinkedIn</span>
        </div>
      }
          <img src={ Logo } alt="" />
      { ( !open && mobile ) ? <div className={`bars`} onClick={() => setOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        :
      <div className={`bars close`} onClick={() => setOpen(false)}>
      <span></span>
      <span></span>
      <span></span>
        </div> }
      
        <ul className={`${!open && 'mobile'}`}>
          <li className="active"><Link onClick={ () => setOpen( false ) } span='true' smooth={true} to='hero'>Home</Link> </li>
            <li><Link onClick={() => setOpen(false)} span='true' to='about'>About</Link></li>
            <li><Link onClick={() => setOpen(false)} span='true' to='selected'>Projects</Link></li>
            <li><Link onClick={() => setOpen(false)} span='true' to='contact'>Contact me</Link></li>
          </ul>
    </div>
  )
}

export default Headers;

