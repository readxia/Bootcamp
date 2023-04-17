import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <div>
        <label>Password: </label>
        <input type={showPassword ? 'text' : 'password'}></input>
      </div>
      <div>
        <label>Show Password</label>
        <input type='checkbox' onChange={handleShowPassword} value={showPassword ? true : false}></input>
      </div>
    </div>


  )
}

export default App
