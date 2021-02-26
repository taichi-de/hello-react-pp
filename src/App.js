import React, { useState } from 'react'

import Button from './components/Button'
import Counter from './components/Counter'
import Searchbar from './components/Searchbar'
import jsonplaceholder from './apis/jsonplaceholder'
import Resources from './components/Resources'
import ImageList from './components/ImageList'
import axios from 'axios'
import logo from './logo.png'


const App = () => {
  const [images, setImages] = useState([])
  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: ApiKey,
        q: term
      }
      const response = await axios.get('https://pixabay.com/api/', { params })
      setImages(response.data.hits);
      if (response.data.total === 0) {
        window.alert('Image not found')
      }
    } catch {
      window.alert('Failed to load image')
    }
  }

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
        <img src={logo} alt='pixabay-logo' className='pixabay-logo' />
      </div>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <Button onClick={getPosts} color='green' text='posts' />
        <Button onClick={getAlbums} color='yellow' text='albums' />
        <Resources resources={resources} />
      </div>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <Counter />
      </div>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <Searchbar onSubmit={onSearchSubmit} />
        <ImageList images={images} />
      </div>
    </div>
  )
}

export default App

