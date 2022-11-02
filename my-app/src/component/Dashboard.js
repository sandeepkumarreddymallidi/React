import{Link} from "react-router-dom"
function Dashboard (props){
    const logout = (event)=>{
        event.preventDefault();
        localStorage.clear();
      }
      console.log(props.role)
    const role = props.role
    if(role === "admin"){
        return <>  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <img src="logo.jpg" width="100" height="60" className="d-inline-block align-top" alt=""/>
        </a>
        <div className="form-inline my-2 my-lg-0" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <Link to="#">job</Link>
            </li>
            <li>
              <Link to="#">company</Link>
            </li>
            <li>
              <Link to="#">candidate</Link>
            </li>
            <li>
                <button className="btn btn-danger" onClick={logout}>signout</button>
            </li>
          </ul>
        </div>
      </nav></>
    }else if(role === "employer"){
        return  <>  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <img src="logo.jpg" width="100" height="60" className="d-inline-block align-top" alt=""/>
        </a>
        <div className="form-inline my-2 my-lg-0" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <Link to="#">candidate</Link>
            </li>
            <li>
              <Link to="#">job</Link>
            </li>
            
            <li>
                <button className="btn btn-danger" onClick={logout}>signout</button>
            </li>
          </ul>
        </div>
      </nav></>
    }else if(role === "candidate"){
        return  <>  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <img src="logo.jpg" width="100" height="60" className="d-inline-block align-top" alt=""/>
        </a>
        <div className="form-inline my-2 my-lg-0" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <Link to="#">companies</Link>
            </li>
            <li>
              <Link to="#">jobs</Link>
            </li>
            
            <li>
                <button className="btn btn-danger" onClick={logout}>signout</button>
            </li>
          </ul>
        </div>
      </nav></>
    }else{
       
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <img src="logo.jpg" width="100" height="60" className="d-inline-block align-top" alt=""/>
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <Link to="#">signin</Link>
            </li>
            <li>
              <Link to="#">signup</Link>
            </li>
            <li>
              <Link to="#">about</Link>
            </li>
            <li>
                <button className="btn btn-danger" onClick={logout}>signout</button>
            </li>
          </ul>
        </div>
      </nav>
    }
    
}export default Dashboard