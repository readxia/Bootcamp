import react from 'react'
import './App.css'

// create a Todo Item Component (Presentation Component)
// a React component is a function that returns JSX
function TodoItem(props) {
    const { 
        id, 
        description, 
        isCompleted, 
        markCompleteHandler,
        deleteHandler 
    } = props
    
    return (
        <li
            className={isCompleted ? "completed" : ""}
            // key is a special prop that React uses to
            // keep track of the elements in the list
            key={id}
            onClick={(event) => {
                markCompleteHandler(id)
            }}
            >
            {description}
            <button 
                className='deleteButton'
                onClick={isCompleted ? (event) => {
                    event.stopPropagation()
                    deleteHandler(id)
                } : (event) => {
                    event.stopPropogation()
                }} 
                >
                    Delete
                </button>
        </li>
    )
}

export default TodoItem