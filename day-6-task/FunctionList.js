import React from 'react'
import './List.css';
export default function FunctionList(props) {
    console.log(props)
  return (
    <div> <thead>
    <tr>
        <th>name</th>
        <th>age</th>
        <th>branch</th>
    </tr>
</thead>
{props.names.length > 0 && ( 
        <tbody>
          {
            props.names.map(user => (
                <tr>
                <td>{user.studentName}</td>
                <td>{user.studentAge}</td>
                <td>{user.studentBranch}</td>
                </tr>
            ))
          }
        </tbody>
       )}
    </div>
  )
}

