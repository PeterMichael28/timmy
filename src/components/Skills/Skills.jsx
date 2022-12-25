import React, {useState, useEffect}  from 'react'
import './Skills.css'
import banner from '../../assets/banner-bg.png'
import bannerImg from '../../assets/banner-images.png'
import bannerSpring from '../../assets/spring.png'
import star from '../../assets/star.png'
import small from '../../assets/bg2.png'




const Skill = () => {
  const [mobile, setMobile] = useState('')

  useEffect( () => {
    window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
  }, [window.innerWidth])
  return (
    <div id="skills" className="skills">
      <img className='skills-banner' src={ mobile ? small : banner } alt="img" />
      
      <div className='skills-text'>
        <img src={star} alt="" />
      <span>Some of my</span>
      <span>Technical Skills</span>

      </div>
      <div className='skills-img'>
      { !mobile &&  <img src={bannerImg} alt="img" />}
       { !mobile &&  <img src={bannerSpring} alt="img" />}
      </div>
    </div>
  )
}

export default Skill