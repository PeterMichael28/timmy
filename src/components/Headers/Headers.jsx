import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'

const Headers = () => {


  const mobile = window.innerWidth <= 768 ? true : false;

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
          <li className="active" onClick={ () => setOpen( false ) }>Home</li>
            <li onClick={() => setOpen(false)}>About</li>
            <li onClick={() => setOpen(false)}>Projects</li>
            <li onClick={() => setOpen(false)}>Contact me</li>
          </ul>
    </div>
  )
}

export default Headers;

