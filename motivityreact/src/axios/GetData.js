import axios from "axios";
import { event } from "jquery";
import React, { useEffect, useState } from 'react'

export default function GetData() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/user").then((res)=>{
        setData(res.data)
    })
    },[]);
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:3001/posts/${id}`)
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        name:
                    </th>
                    <th>
                        age:
                    </th>
                    <th>
                        branch:
                    </th>

                    <th>
                       
                    </th>
                    <th>
                       
                    </th>
                </tr>
            </thead>

            {data.length > 0 && ( 
        <tbody>
          {
            data.map(user => (
                <tr key={user.id}>
                <td>{user.studentName}</td>
                <td>{user.studentAge}</td>
                <td>{user.studentBranch}</td>
                <td>
                <button>
                      update
                </button>
                </td>
                <td>
                <button onSubmit={()=>handleDelete}>
                       delete
                </button>
                </td>
                </tr>
            ))
          }
        </tbody>
       )} 
        </table>
    </div>
  )
}