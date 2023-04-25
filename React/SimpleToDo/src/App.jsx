import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem'

//Parent gives data to children with props
//Children give data to parent through a function given from the parent to the child that can alter something

function App() {
  const [newTodo, setNewTodo] = useState("")
  // todos is an array of all todo objects
  const [todos, setTodos] = useState([
    { id: 1, description: "Learn React", isCompleted: true },
    { id: 2, description: "Learn SQL", isCompleted: false },
    { id: 3, description: "Learn APIs", isCompleted: false }
  ])

  // function to handle the submit event
  const submitHandlerFunction = (event) => {
    // prevent the default behavior of the submit event
    event.preventDefault()
    // i want to take the new todo item 
    // and add it to my list of todos
    setTodos([...todos, { id: Date.now(), description: newTodo, isCompleted: false }])
    // clear the state field
    setNewTodo("")
  }

  // takes the stuff inside the input and saves it
  // to the state variable called newTodo
  const changeHandler = event => {
    setNewTodo(event.target.value)
  }

  const markCompleteHandler = (id) => {
    let copyOfTodos = [...todos]
    const todoToBeUpdated = copyOfTodos.find( el  => el.id === id)
    todoToBeUpdated.isCompleted = !todoToBeUpdated.isCompleted
    setTodos(copyOfTodos)
  }

  const deleteHandler = (id) => {
    let copyOfTodos = [...todos]
    let filteredTodo = copyOfTodos.filter(el => el.id !== id)
    console.log(filteredTodo)
    setTodos(filteredTodo)
  }


  const todosList = todos.map(t => {
    return (
      <TodoItem key={t.id} {...t} markCompleteHandler={markCompleteHandler} deleteHandler={deleteHandler} />
    )
  })

  return (
    <div className="App">
      <h3>Todo List</h3>
      <form onSubmit={submitHandlerFunction}>
        <input
          type="text"
          placeholder="Add to the TODO app"
          onChange={changeHandler}
          value={newTodo}
        />
        {/* when you click this button it creates
        a submit event */}
        <input type="submit" value="Add" />
      </form>
      
      <ul className="todolist">
        {/* map over the todos array and create a TodoItem
        for each todo */}
        {todosList}
      </ul>
    </div>
  )
}

export default App