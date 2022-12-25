import React from 'react'
import img1 from '../../assets/phone1.png'
import img2 from '../../assets/phone2.png'
import img3 from '../../assets/phone3.png'
import img4 from '../../assets/phone4.png'
import './Selected.css'

const Selected = () => {
  return (
    <div className="selected" id="selected">
      <span className="title">
        Selected Works
      </span>
      <div className='sel-div'>
        <div className='sel-div1'>
        <img src={img1} alt="img" />
        <img src={img2} alt="" />
        </div>
        <div className='sel-div1'>
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Selected