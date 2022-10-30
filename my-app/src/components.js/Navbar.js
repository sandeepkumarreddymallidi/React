import { Link } from "react-router-dom"
const Navbar=()=>
{
    return(
        <nav className="navbar w-25 ">
            <Link to='/' className="text-decoration-none">Home</Link>
            <Link to='/about' className="text-decoration-none">About</Link>
            <Link to='/products' className="text-decoration-none">Products</Link>
        </nav>
    )
}
export default Navbar