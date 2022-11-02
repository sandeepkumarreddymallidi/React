import React from "react";
import './List.css';
class List extends React.Component{
    constructor (props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(<div>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {this.props.employee.map((item)=>{
                    return <tr class="listtr">
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>
                        </tr>
                })
                }
                </tbody>
        </div>)
    }
}
export default List