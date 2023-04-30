import { useState } from 'react'
import key from './key'
import './App.css'

function App() {
// state to store the movies is an array of objects
  const [movies, setMovies] = useState([
  { 
      id: 0,
      poster_path: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Avengers: Infinity War", 
      overview: "The Avengers fight Thanos."
  },
  {
    id: 1,
    poster_path: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    title: "The Avengers",
    overview: "The Avengers fight Loki."
  }
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const searchTermChangeHandler = e => {
    setSearchTerm(e.target.value)
  }

  const performSearch = searchTerm => {
    const url = 'https://api.themoviedb.org/3'
    const movieRoute = '/search/movie' + '?api_key=' + key.TMDB_KEY
    const endpoint = url + movieRoute + '&query=' + searchTerm
    /*
    https <-- protocol / scheme
    api.themoviedb.org <-- domain
    /3/ <-- version of tmdb api
    search/movie  <--route
    ?api_key=97885a09b9c8cb96656c00d6c8a05bb1 <-- api key
    &query=poop <-- search term
    */
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
    .catch(function(err) {
      console.log('error: ', err)
    })
  }

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <input type="text" id='inputField' placeholder='What movies do you want to see?' onChange={searchTermChangeHandler} value={searchTerm}/>
      <button onClick={() => performSearch(searchTerm)}>Search</button>
      {
        //loops thru movies and runs a function and returns a new arr
        movies.map(movie => (
          <div key={movie.id}>
            <img width='200px' src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt='movie poster image'></img>
            <div>
              <h2>{movie.title}</h2>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default App
