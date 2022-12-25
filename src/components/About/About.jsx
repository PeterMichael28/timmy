import React from 'react'
import './About.css'
import Button from '../Button'
import image1 from '../../assets/about-dt.png'
import image2 from '../../assets/about-mobile.png'

const About = () => {

    const mobile = window.innerWidth <=768 ? true : false


  return (
      <div id="about" className="about">
          <span className='title'>About me</span>
          <div className="about-content">
              <img src={ mobile === true ? image2 : image1 } alt="" className="about-img" />
             {!mobile && <div className="ruler"></div>}
              <div className="about-texts">
                  <span>
                    Lobortis tellus aliquam in egestas nec nisl sit condimentum. Sapien in sit morbi dolor mattis lacus, imperdiet nunc egestas. Eu ipsum aliquam ac amet. Suspendisse neque felis sed euismod enim quam et, nec. Nec, tellus eget nascetur purus hendrerit. Donec donec sit sodales faucibus libero. 
                  </span>
                  <span>
                      Aliquam donec elementum habitant aliquam molestie accumsan, orci, sed sollicitudin. Consectetur neque tristique a nibh quis mi risus eu pharetra. Tristique di augue et, duis.
                  </span>
                 {mobile === true && <span>
                      Sem viverra posuere proin donec ipsum. Orci pellentesque felis urna, at. Laoreet nunc, adipiscing in purus. Facilisis massa sapien erat rhoncus aliquam.
                  </span> }
                  <div className='about-btn'>
                  {mobile === true ? <Button text='Read More' /> : <Button text='Download CV' /> }
                      
                  </div>
                  
              </div>
          </div>
   </div>
  )
}

export default About;




