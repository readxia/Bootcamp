import react from 'react'

function Videos(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <iframe width="420px" height="315" src={props.url}></iframe>
        </div>
    )
}

export default Videos