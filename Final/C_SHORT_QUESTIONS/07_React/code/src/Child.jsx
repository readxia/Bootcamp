import React, {useState} from 'react'

const Child = (props) => {
  return(
  <>
  {/* give onchange attribute with the given function from the props parent, pass in the value of the input field with event object */}
    <input type="text" onChange={(e) => props.handleName(e.target.value)} placeholder="Please Enter Your Name"/>
  </>
  )
}

// class Child extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return (
//         <>
//             <input type="text" onChange={this.props.handleName(event.target.value)} placeholder="Please Enter Your Name"/>
//         </>
//     )
//   }
// } 

export default Child