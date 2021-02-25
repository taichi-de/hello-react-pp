import React, { useState } from 'react'

import Button from './components/Button'
import Counter from './components/Counter'
import jsonplaceholder from './apis/jsonplaceholder'
import Resources from './components/Resources'

const App = () => {
  const [resources, setResources] = useState([])

  const getPosts = async () => {
    try {
      const posts = await jsonplaceholder.get('/posts')
      setResources(posts.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAlbums = async () => {
    try {
      const albums = await jsonplaceholder.get('/albums')
      setResources(albums.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <h1>hello</h1>
        <Button onClick={getPosts} color='green' text='posts' />
        <Button onClick={getAlbums} color='yellow' text='albums' />
        <Resources resources={resources} />
      </div>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <Counter />
      </div>
    </div>
  )
}

export default App

