import {  NavLink } from "react-router-dom"
const StyledNavbar=()=>
{
    return(
        <nav className="navbar w-25 ">
            <NavLink to='/' className="text-decoration-none" style={({isActive})=>{
                return{color:isActive?'red':'grey'}
            }   
            }
        >Home</NavLink>
            <NavLink to='/about' className="text-decoration-none" style={({isActive})=>{
                return{color:isActive?'red':'grey'}
            }   
            }>About</NavLink>
            <NavLink to='/products' className="text-decoration-none" style={({isActive})=>{
                return{color:isActive?'red':'grey'}
            }   
            }>Products</NavLink>
             <NavLink to='/login' className="text-decoration-none" style={({isActive})=>{
                return{color:isActive?'red':'grey'}
            }   
            }>Login</NavLink>
        </nav>
    )
}
export default StyledNavbar;