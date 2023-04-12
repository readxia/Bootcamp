import React from 'react';

// here we define a function that will work as a component
// the function takes in a parameter called props
// props is an object that contains all the data that was passed
// into the component when it was used
// in this case, the data is an array of feelings
// we can access the data in the props object using dot notation
// props.feelings is the array of feelings
// we can use the map method to loop through the array of feelings
// and return a bunch of JSX
// the map method returns an array of JSX
function Garfield(props) {

    const feelingsListItems = props.feelings.map((feeling, index) => {
        return <li key={index}>{feeling}</li>
    })
    return (
        <div className="theimage">
            <h1>Garfield's Life</h1>
            <img 
              src="https://static0.srcdn.com/wordpress/wp-content/uploads/2022/12/1400-x-700-template-image-60.png" 
              alt="Garfield" 
            />
            <h3>Garfield is feeling:</h3>
            <ul>
                {feelingsListItems}
            </ul>
        </div>
    )

}

export default Garfield