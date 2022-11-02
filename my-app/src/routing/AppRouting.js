import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Candidate from "../component/Candidate";
import Employer from "../component/Employer";
import Admin from "../component/Admin";
import Signin from "../component/Signin"
import PrivateRouters from "./private/PrivateRouters";
import Signup from "../component/Signup";
import PrivateCandidateRoute from "./private/PrivateCandidateRoute";
import PrivateEmployerRoute from "./private/PrivateEmployerRoute ";
import PrivateAdminRoute from "./private/PrivateAdminRoute";

function AppRouting(){
  
    return(
        <BrowserRouter>
         
            <Routes>
               
                <Route path="/" element={<Signin />}></Route>
                <Route path="/Signup" element={<Signup />}></Route>
                <Route path="/candidate" element={<PrivateCandidateRoute path="/"><Candidate/></PrivateCandidateRoute>}></Route>
                <Route path="/employer" element={<PrivateEmployerRoute path="/"><Employer/></PrivateEmployerRoute>}></Route>
                <Route path="/admin" element={<PrivateAdminRoute path="/"><Admin/></PrivateAdminRoute>}></Route>
                <Route path="/dashboard" element={<PrivateRouters path="/"></PrivateRouters>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouting