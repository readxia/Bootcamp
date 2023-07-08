### Task:

Included in this folder is a standard React App. With 2 components, 

1. `Parent.jsx` component with a state of it's own called "name". It renders that specific state variable within the h1 as "Hello {name}". It also renders the Child component.

1. `Child.jsx` component. It has an input field that the user enters some text. Your task is to pass the data from the input field in the child component back to the state in the Parent component. 

It should work like this when done:

<img src="assets/React-State-Demo.gif" width="400px">

Please use short comments to show how your solution works.

Hints: If you do not recall, here's a hint to accomplish this task:

1. Create the state for `name` in the Parent.
1. Create a function that can update the name state with the string passed into it as an argument.
1. Pass a reference to that function to the Child component in the Parent.
1. Create a onChange handler in the child component that calls this function given to it by the Parent.