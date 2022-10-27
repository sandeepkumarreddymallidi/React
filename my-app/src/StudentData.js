
import React,{lazy, Suspense,useState} from "react";

const Mycom=lazy(()=>import('./Students'))
function Student(){
    console.log("hello")
   var name='sandeep';
   var age=20;
   var department='java developer';
   const [count, setCount] = useState(0);
   function Increment(){
    console.log(count)
     setCount(count+1)
   }
   function Decrement(){
    console.log(count)
    setCount(count-1)
  }
  
    return(<div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{department}</h1>

        <Suspense fallback={<div>loading....</div>}>
            <Mycom/>
        </Suspense>
        <div>
            <button onClick={Increment}>increment</button>
            <button onClick={Decrement}>decrement</button>
                <p>
                    count:{count}
                </p>
        </div>
    </div>)
    
}

export default Student;

