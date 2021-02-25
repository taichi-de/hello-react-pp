import React from 'react'

const Button = ({ onClick, color, text }) => {
  return (
    <button onClick={onClick} className={`ui ${color} button`}>
      <i className="icon user" />
      { text }
    </button >
  )
}

export default Button

