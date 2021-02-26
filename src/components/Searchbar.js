import React, { useState } from 'react'

const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
  }

  return (
    <div className="ui segment">
      <div onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type='text'
            name='search'
            placeholder='ex: sky'
            value={term}
            onChange={(event) => {
              setTerm(event.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Searchbar
