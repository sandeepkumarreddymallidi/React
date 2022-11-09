import React from 'react'

import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/posts')
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:5000/posts/${id}`)
    }
  return (
    <div>
        <h2>Users</h2>
        <table>
            <thead className='table text-dark bg-ligt'>
                <th>UserName</th>
                <th>Age</th>
            </thead>
            <tbody className='text-white bg-dark'>
             {data.map((item,index)=>(
            <tr key={index}>
                <td>{item.userName}</td>
                <td>{item.age}</td>
                <td><Link className='btn btn-primary' to={`/formsedit/${item.id}`}>Edit</Link></td>
                <td><button className='btn btn-secondary' onClick={()=>handleDelete(item.id)}>Delete</button></td>
            </tr>
        ))}
            </tbody>
        </table>
    </div>
  )
}

export default Users
