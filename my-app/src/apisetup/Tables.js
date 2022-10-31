function Tables(props){
  // console.log(name)
return(<div>
    <table>
        <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Image</td>
              <td>Price</td>
            </tr>
        </thead>
       {props.name.length > 0 && ( 
        <tbody>
          {
            props.name.map(user => (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td><img src={user.image} width='100px' height='100px'></img></td>
                <td>{user.price}</td>
                </tr>
            ))
          }
        </tbody>
       )} 
      </table>
</div>)
}
export default Tables