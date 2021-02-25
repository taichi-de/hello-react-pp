import React from 'react'

function Button() {
  return (
    <button className="ui basic button">
      <i className="icon user" />
      {props.title}
    </button>
  )
}

export default Button

