import { useState } from 'react'
import './App.css'


  // creating a component in the same file
  // a component is a FUNCTION that returns some JSX

  function TodoItem(props) {
    // const {todo} = props
    return <li>{props.todo}</li>
  }

  const submitHandler = (event) => {
    console.log(event.target.value)
    event.preventDefault()
  }

function App() {
  const [newTodo, setNewTodo] = useState('')

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text'></input>
        <button type='submit'>Add</button>
      </form>

      <ul>
        <TodoItem todo='Learn React'/>
        <TodoItem todo='Go Poop'/>
      </ul>
    </div>
  )
}

export default App
