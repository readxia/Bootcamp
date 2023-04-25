import react from 'react'



function Info (props) {
    const castList = props.cast.map((person, index) => {
        return <li key={index}>{person}</li>
    })
    
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Directed by: {props.director}</h2>
            <h2>CAST:</h2>
            <ul>
                <li>
                    {castList}
                </li>
            </ul>
        </div>
    )
}

export default Info