import React from 'react';
import List from './List'
import'./Employee.css'
class Employee extends React.Component{
    constructor(){
        super();
        this.state={
       id:"",
       name:"",
       age:"",
       email:"",
       employee:[]
        }   
    }
    onIdchange(event){
        this.setState({id:event.target.value})
        console.log(this.state.id)
    }
    onnamechange(event){
        this.setState({name:event.target.value})
    }
    onagechange(event){
        this.setState({age:event.target.value})
    }
    onemailchange(event){
        this.setState({email:event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        let employee=this.state.employee;
        employee.push({id:this.state.id,name:
        this.state.name,age:this.state.age,email:this.state.email})
        this.setState({employee:employee});
    }
    render(){
        return(
            <div id="setting">
                <table>
                    <tr>
                        <td>
                            <form>
                                <div>
                                    <label>id</label>
                                    <input type="text" name="id"  value={this.state.id} onChange={(e)=>this.onIdchange(e)}/>
                                </div>
                                <div>
                                    <label>name</label>
                                    <input type="text" name="name"  value={this.state.name} onChange={(e)=>this.onnamechange(e)}/>
                                </div>
                                <div>
                                    <label>age</label>
                                    <input type="text" name="age" id="age" value={this.state.age} onChange={(e)=>this.onagechange(e)} />
                                </div>
                                <div>
                                    <label>email</label>
                                    <input type="text" name="email" id="email" value={this.state.email} onChange={(e)=>this.onemailchange(e)} />
                                </div>
                                <div class="buttons">
                                    <input type="submit" value="Submit" onClick={(e)=>this.onFormSubmit(e)}></input>
                                </div>
                            </form>
                        </td>
                        <td>
                            <table class="list">   
                                <List employee={this.state.employee}/>
                            </table>
                        </td>
                    </tr>
                </table>
                
            </div>
        )
    }
}
export default Employee