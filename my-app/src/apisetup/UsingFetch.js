import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <table>
        <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Image</td>
              <td>Price</td>
            </tr>
        </thead>
      {users.length > 0 && (
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td><img src={user.image} width='100px' height='100px'></img></td>
              <td>{user.price}</td>
              </tr>
          ))}
        </tbody>
      )}
      </table> 
    </div>
  )
}

export default UsingFetch