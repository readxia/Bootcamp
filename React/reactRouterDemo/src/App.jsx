import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Error from './pages/Error'

function App() {

  return (
    <Router>
      <div className="App">
        <div>
          {/* provides a way to setup nagivation, links that will change the URL, and will trigger the ROUTES*/}
          <ul>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/about/jobs'>Jobs</Link> </li>
            <li> <Link to='/contact'>Contact</Link> </li>
          </ul>
          {/* load a different view depending on change in URL, reacts to changes in the URL*/}
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/about/jobs' element={<About jobs={true}/>}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<Error />}/>
          </Routes>

        </div>
      </div>
    </Router>

  )
}

export default App
