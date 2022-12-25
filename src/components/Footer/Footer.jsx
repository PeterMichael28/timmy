import React from 'react'
import './Footer.css'
import img1 from '../../assets/social1.png'
import img2 from '../../assets/social2.png'
import img3 from '../../assets/social3.png'

const Footer = () => {
  return (
      <div id="footer" className="footer">
          <span>&copy; TIMMY AKAPO 2021</span>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
          <div>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
          </div>
    </div>
  )
}

export default Footer