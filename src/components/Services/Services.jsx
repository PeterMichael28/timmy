import React from 'react'
import './Services.css'
import img from '../../assets/Grou.png'

const Services = () => {
  return (
      <div id="services" className="services">
          <span className="title">Services</span>
          <div className="services-container">
              <div>
                  <img src={img} alt="" />
                  <span>Timi is an awesome product designer. She has a good eye for user experience and understands how to simplify</span>
              </div>
              <div>
                  <img src={img} alt="" />
                  <span>Timi is an awesome product designer. She has a good eye for user experience and understands how to simplify</span>
              </div>
              <div>
                  <img src={img} alt="" />
                  <span>Timi is an awesome product designer. She has a good eye for user experience and understands how to simplify</span>
              </div>
          </div>
    </div>
  )
}

export default Services