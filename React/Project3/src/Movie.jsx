import react from 'react'
import Poster from './Poster'
import Info from './Info'

function Movie(props) {
    return (
        <div>
            <Poster image={props.image} title={props.title}/>
            <Info title={props.title} director={props.director} cast={props.cast}/>
        </div>
    )
}

export default Movie