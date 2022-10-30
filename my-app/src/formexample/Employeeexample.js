
import {useState} from 'react'
import Display from './Display';

function EmployeeExample(){

    // const[name,setName]=useState("");
    // const[email,setEmail]=useState("");
    // const[age,setAge]=useState("");
    // const[address,setAddress]=useState("");
    
    // function namechange(e){
    //     setName(e.target.value)
    //     console.log(name)
    // }
    // function agechange(e){
    //     setAge(e.target.value)
    //     console.log(age)
    // }
    // function emailchange(e){
    //     setEmail(e.target.value)
    //     console.log(email)
    // }
    // function addresschange(e){
    //     setAddress(e.target.value)
    //     console.log(address)
    // }
    const[employee,setEmployee]=useState({fname:"",email:"",age:"",address:""});
    const sa=[];
    function savedata(e){
        e.preventDefault();
        console.log(employee)
        sa.push(employee)
        console.log(sa);
        reset();
    }
    function datachange(e){
        const change=e.target.value;
        setEmployee({...employee,[e.target.name]:e.target.value})
       
    }
    function reset(){
        document.getElementById("fname").value="";
        document.getElementById("email").value="";
        document.getElementById("age").value="";
        document.getElementById("address").value="";
    }
    return(<div>
        <h1>Employee details</h1>
        <form>
            <table>
                <tr>
                    <td>
                        <label>
                            Name
                        </label>
                    </td>
                    <td> <input type="text" value={employee.fname} name="fname" id="fname" onChange={datachange}>
                    </input></td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Email
                        </label>
                    </td>
                    <td>
                        <input type="text" value={employee.email} name="email" id="email" onChange={datachange}>
                        </input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Age
                        </label>
                    </td>
                    <td><input type="text" value={employee.age} name="age" id="age" onChange={datachange}>
                    </input></td>
                </tr>
                <tr>
                    <td>
                        <label>
                            address
                        </label>
                    </td>
                    <td>
                        <input type="text" value={employee.address} name="address" id="address" onChange={datachange}>
                        </input>
                    </td>
                </tr>
                <tr >
                    <td colSpan={2} >
                        <input type="button" onClick={savedata} className="btn btn-primary w-100" value="Register"></input>
                    </td>
                </tr>
            </table>
        </form>
    </div>)
}
export default EmployeeExample
