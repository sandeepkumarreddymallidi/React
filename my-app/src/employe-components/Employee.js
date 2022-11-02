import React from 'react'

class Employee extends React.Component
{
    constructor()
    {
        super()
        this.state={
            empname:"sandeep",
            age:23,
            salary:2000,
            designation:"mca",
            isDisplay:false
        }
       
        this.changeInfo=this.changeInfo.bind(this)
    }
    
    showAge()
    {
        <h1>{this.state.age}</h1>
        console.log(this.state.age)
    }

    changeInfo()
    {
        console.log("change info function callled")

    }
    showInfo()
    {
        this.setState({isDisplay:true})
    }
    hideInfo()
    {
        this.setState({isDisplay:false})
    }

    render(){
        return <div>

           
            <h1>Employee details </h1>

            {this.state.isDisplay&&<h3>empname     :{this.state.empname}</h3>}
            {this.state.isDisplay&&<h3>age         :{this.state.age}</h3>}
             {this.state.isDisplay&&<h3>salary      : {this.state.salary}</h3>}
             {this.state.isDisplay&& <h3>designation : {this.state.designation}</h3>}
           <button onClick={this.changeInfo} >Show name</button>
           <button onClick={this.showInfo.bind(this)} >Show Info</button>
           <button onClick={this.hideInfo.bind(this)} >Hide Info</button>
          <input type="submit" value="showage" onClick={()=>this.showAge()} />
        </div>
    }
    
}
export default Employee