import React,{useState} from 'react'
import axios from 'axios';
export default function Axios() {
    const baseURL = "http://localhost:5000/user";
    const [state, setState]=useState(
        {
            studentName:'',
            studentAge:'',
            studentBranch:''
        }
        
    )
    const [studentfile,setStudentfile]=useState([])
    function handelChange(event) {
        setState(e => { return { ...e, [event.target.name]: event.target.value } })

    }
    function saveStudent(e) {
        setStudentfile(student => [...student, state])
        axios.post(baseURL,state)
        console.log(studentfile)
        e.preventDefault();
    }
  return (
      <div>
          <form >
              <table>
                  <tr>
                      <td><label>name</label></td>
                      <td><input type="text" name="studentName" value={state.studentName}   onChange={handelChange} /></td>
                  </tr>
                  <tr>
                      <td><label>age</label></td>
                      <td><input type="text" name="studentAge" value={state.studentAge} onChange={handelChange}/></td>
                  </tr>
                  <tr>
                      <td><label>branch</label></td>
                      <td><input type="text" name="studentBranch" value={state.studentBranch} onChange={handelChange} /></td>
                  </tr>
                  <tr>
                      <td><input type="submit" value="Submit" onClick={(e) => saveStudent(e)} ></input></td>
                  </tr>
              </table>
          </form>
      </div>
  )
}
