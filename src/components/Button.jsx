import React from 'react'

const Button = ({text}) => {
  return (
    <div className='btn-container'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        <button>{text}</button>
    </div>
  )
}

export default Button