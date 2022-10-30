import { Link } from "react-router-dom";

const About=()=>
{
    return(<section className="section">
        <h1>About</h1>
        <Link to="/" className="btn btn-primary">back to home</Link>
    </section>)
}
export default About;