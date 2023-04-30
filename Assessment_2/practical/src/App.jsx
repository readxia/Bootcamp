import {useState , useEffect} from 'react';
import Table from './Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  //creates a state variable called persons, and function to change persons called setPersons using the useState hook
  //the initial state of persons is an empty array
  const [persons, setPersons] = useState([]);

  //This useEffect hook allows a specific function to render depending on certain changes. Since the second argument array is empty,
  // this means the useEffect function will only run during startup and won't rerender.
  // this is good for our usecase because we do not want to constantly be fetching from the API as we already stored the information needed into our state variable
  useEffect(
    ()=>{
      //changed endpoint to the "people" list in order to get the people from starwars
        fetch('https://swapi.dev/api/people') 
        //Need to convert to json first
          .then(response => response.json())
          //this grabs the data and sets it into our state variable
          //we want data.results because that is how the data we got was formatted in order to get the peoples array
          .then(data => {
            setPersons(data.results)
          })
          //finally, this catch will throw an error in the console log if the data was not as expected
          .catch(error => console.log("Error loading ", persons, error));
    },
    []
  )

// this is the render function
  return (
    <div>
      {/* This is our table component, and we are passing in the props persons with our persons state (which is the data we pulled from the API */}
      <Table persons={persons} />
    </div>
    
  );
};

export default App;
