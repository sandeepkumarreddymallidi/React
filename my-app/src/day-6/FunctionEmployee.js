import React,{useState} from 'react'
import FunctionList from './FunctionList';
import'./Employee.css'


export default function FunctionEmployee() {
   
    const [state, setState]=useState(
        {
            studentName:'',
            studentAge:'',
            studentBranch:''
        }
        
    )
    const [studentfile,setStudentfile]=useState([])

function handelChange(event)
{
    setState(e=>{return{...e,[event.target.name]:event.target.value}})

}
function saveStudent(e)
{
    e.preventDefault();
    setStudentfile(student => [...student, state])

    console.log(studentfile)
}
    return (
        <div id="setting">
                <table>
                    <tr>
                        <td>
                            <form >
                                <div>
                                    <label>name</label>
                                    <input type="text"  name="studentName" value={state.studentName}   onChange={handelChange} />
                                </div>
                                
                                <div>
                                    <label>age</label>
                                    <input type="text"  name="studentAge" value={state.studentAge} onChange={handelChange}  />
                                </div>
                                <div>
                                    <label>branch</label>
                                    <input type="text"  name="studentBranch" value={state.studentBranch} onChange={handelChange} />
                                </div>
                                <div class="buttons">
                                    <input type="submit" value="Submit" onClick={(e) => saveStudent(e)}></input>
                                </div>
                            </form>
                        </td>
                        <td>
                            <table class="list">   
                                <FunctionList names={studentfile}/>
                            </table>
                        </td>
                    </tr>
                </table>
                
            </div>
  )
}

