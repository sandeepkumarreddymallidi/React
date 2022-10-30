import { Link } from "react-router-dom";

const Error=()=>{
    return(
        <section className="section">
            <h1>404</h1>
            <p>
                page not found
            </p>
            <Link to="/" className="btn btn-primary">bact to homepage</Link>
        </section>
    )
}
export default Error;