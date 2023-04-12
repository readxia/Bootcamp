import React from 'react'
import Garfield from './Garfield'

function App() {
  return (
    <div className="App">
      <p className="read-the-docs">
          If a person could not exceed his grasp, what are the heavens for?
      </p>
      <Garfield 
       feelings={['tired', 'sleepy']} 
      />
    </div>
  )
}

export default App