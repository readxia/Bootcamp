import { useState } from 'react'
import Movie from './Movie'
import {movies} from './data'
import './App.css'

const movieData = movies

function App() {
  return (
    <div className="App">
      {movieData.map(movie => (
        <Movie title={movie.title} director={movie.director} image={movie.image} cast={movie.cast} key={movie.title}/>
      ))}
    </div>
  )
}

export default App
