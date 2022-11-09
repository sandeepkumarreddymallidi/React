import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
export default function Flex() {
    const [data ,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/doctor").then((res)=>{
            setData(res.data)
        })
    },[])
    console.log(data);
    console.log(data.length)

  return (
    <div className='container'>
      <div className='row'>
      {data.map(user => (
         <div className='col-3'>
          <div className='card'>
          <img class="card-img-top img-fluid" src={user.image} alt="Card image cap"></img>
          <div class="card-body">
              <h5 class="card-title">{user.Name}</h5>
              <h5>
                {user.department}
              </h5>
           <button className='btn btn-danger'>Book Appointment</button>
            </div>
          </div>
         </div>
      ))}
     
    </div>
    </div>
  )
}
