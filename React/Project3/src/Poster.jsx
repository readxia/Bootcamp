import react from 'react'

function Poster (props) {
    return (
        <div>
            <img src={props.image} alt={props.title} height="500px"></img>
        </div>
    )
}

export default Poster