import { stripBasename } from "@remix-run/router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=({setUser})=>
{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(!name||!email) return;
        setUser({name:name,email})
        console.log(name,email)
    };
    return(<div>
        <form onSubmit={handlesubmit}>
            <h5>login</h5>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
            <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
            <button type='submit' className='btn btn-block'>
             login
           </button>
        </form>
    </div>)
}
export default Login