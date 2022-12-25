import React, { useState, useEffect } from 'react'
import './Hero.css'
import Image from '../../assets/hero-sp.png'
import Image1 from '../../assets/bigstar.png'
import Image2 from '../../assets/smallstart.png'
import Image3 from '../../assets/hero-crest.png'
import Image4 from '../../assets/hero-bg.png'
import Image5 from '../../assets/mobilehero-bg.png'
import Button from '../Button';

const Hero = () => {

  const [mobile, setMobile] = useState('')

  useEffect( () => {
    window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
  }, [window.innerWidth])

  


  return (
    <div id='hero' className='hero'>
      <img className='hero-bg' src={mobile? Image5 :Image4} alt="" />
      <div className="hero-texts">
        <div>
          <span>Hey there, i'ts</span>
          <span>{`${!mobile? 'Oluwatimilehin Akapo' : 'Somebody’s Lady reporting'}`}</span>

        </div>

        
        <span>A  Product Designer that specialises in designing usable solutions that aligns with business goals</span>

        <div className="btn-mobile">
        <Button text='Contact me' />

        </div>
      </div>
         
      <img className='hero-sp' src={ Image } alt="" />
      <img src={Image1} alt="" />
      <img src={Image2} alt="" />
     {!mobile && <img src={Image3} alt="" />}
    </div>
  )
}

export default Hero