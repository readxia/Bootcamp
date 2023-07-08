import React, {useState} from 'react'
import Child from './Child'

const Parent = () => {
  // create state variable that is initiated as empty
  const [name, setName] = useState('')

  //a state changing handler that will be used by the child component to pass information up and let them update teh state
  const handleName = (n) => {
    setName(n)
  }

  return(
    <div>
      <h1>Hello {name}</h1>
      {/* give the child component props of the state changing function defined above */}
      <Child handleName={handleName}/>
    </div>
  )

}


// class Parent extends React.Component {

//   constructor(props){
//     super(props)
//     this.state = {name: ''}
//   }

//   handleName = (n) => {
//     this.setState({name: n})
//   }

//   render(){
//     return (
//       <div>
//         <h1>Hello {this.state.name}</h1>
//         <Child handleName={this.handleName}/>
//       </div>
//     )
//   }

// } 

export default Parent