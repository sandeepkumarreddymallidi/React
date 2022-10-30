function Display(props){
    return(<div>
       <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {
                <>
                for(var i of props.name){
                    <tr>
                 <th>{props.i.fname}</th>
                 <th>{props.i.email}</th>
                 <th>{props.i.age}</th>
                 <th>{props.i.address}</th>
             </tr>    
                }
                </>       
            }
           
        </tbody>
       </table>
    </div>)
}
export default Display