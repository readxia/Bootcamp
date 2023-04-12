import { useState } from 'react'
import './App.css'

function App() {
  // useState will create a state object which is an ARRAY that first value is the current state, and the second value is the function to change the state
  //const daysRemaining = useState(13)
  //const [days, setDays] = daysRemaining

  // or you can write:
  const [days, setDays] = useState(15)

  return (
    <div className="App">
      <h1>Birthday Party Count Down App!</h1>
      <div className="card">
        <button onClick={() => {setDays(days - 1)}}>
          Days remaining til my Birthday Party : {days}
        </button>
      </div>
    </div>
  )
}

export default App