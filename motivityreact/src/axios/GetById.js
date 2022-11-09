import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function GetById() {
    const {param}=useParams();

    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/user/1`)
        .then((res)=>setData(res.data)).catch((err)=>{
            console.log(err)
        })
    },[])
    const[state,setState]=useState({studentName:data.name,
                                    studentAge:data.studentAge,
                                    studentBranch:data.studentBranch}

    )
    function handelChange(event) {
        setState(e => { return { ...e, [event.target.name]: event.target.value } })

    }
    function formsubmit(e){
        axios.put(`http://localhost:5000/user/1`,state)

        e.preventDefault();
    }
  return (
    <div>
          <form>
              <table>
                  <tr>
                      <td>
                          name:
                      </td>
                      <td>
                          <input type="text" name="studentName" value={state.studentName}   onChange={handelChange}></input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Age:
                      </td>
                      <td>
                          <input type="text" name="studentAge" value={state.studentAge} onChange={handelChange}></input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          branch:
                      </td>
                      <td>
                          <input type="text" name="studentBranch" value={data.studentBranch} onChange={handelChange}></input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          
                      </td>
                      <td>
                          <input type="submit" onClick={formsubmit}></input>
                      </td>
                  </tr>
              </table>
          </form>
       
        {/* <table>
            <thead>
                <th>
                    name
                </th>
                <th>
                    age
                </th>
                <th>
                    branch
                </th>
            </thead>
            <tbody>
                <tr>
                      <th>
                          {data.studentName}
                      </th>
                      <th>
                          {data.studentAge}
                      </th>
                      <th>
                          {data.studentBranch}
                      </th>
                </tr>
            </tbody>
        </table> */}
    </div>
  )
}
