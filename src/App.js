import React from 'react'
import Button from './Button'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <h1>hello</h1>
        <Button title='post' />
        <Button title='edit' />
        <Button title='submit' />
      </div>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <Counter />
      </div>
    </div>
  )
}

export default App

