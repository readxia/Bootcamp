import './../App.css'

//this is using fat arrow function to create component
//create anon function called about
const About = (props) => {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            {props.jobs ? <p>JOBS PAGE</p> : <p></p>}
        </div>
    )
}

export default About