
// changed structure of this component to fit react better
function Table(props) {
    // need to add .persons so that Table knows which props to give to people
    // this sets the variable people to the persons props we gave Table in the App.jsx
    const people = props.persons;

    // the map function returns a new array, while we are looping through the peoples array, and returning the formatted information in a HTML row.
    const theCharacters = people.map(character => {
        return (
            //create table row with specific key so that react throw an error
            <tr key={character.name}>
                {/* the map function will loop through the peoples array (character) of objects, and we will pull the attribute from each object into the table data */}
                <td>{character.name}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.hair_color}</td>
                <td>{character.eye_color}</td>
            </tr>
        )
    });

    return (
        //using bootstrap, created a container with margin top style of 4
        <div className="container mt-4">
            {/* bootstrap styling of h1 margin bottom 4 and text-center */}
            <h1 className="mb-4 text-center">Star Wars Characters</h1>
            {/* bootstrap table styling, striped and auto margin */}
            <table className="table table-striped m-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Eye Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* since the characters variable is already formatted the way we want, and it will be affected by bootstrap styling, we can render it*/}
                    {theCharacters}
                </tbody>
            </table>
        </div>
    );
    
}

//allows App to import the component
export default Table