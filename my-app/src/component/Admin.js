import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
function Admin(){
    return(
        <div>
        <Link to="dashboard" elelment={<Dashboard role={localStorage.getItem("role")}></Dashboard>}></Link>
        </div>
    )
}
export default Admin