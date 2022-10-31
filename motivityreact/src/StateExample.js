import { useState } from "react"

function SampleExample(){
    const[count,setCount]=useState(0)
    function increament(){
        setCount(count+1)
    }
    function decreament(){
        setCount(count-1)
    }

return(<div>
    <button onClick={increament}>increatment{count}</button>
    <button onClick={decreament}>decreatment{count}</button>
</div>)
}
export default SampleExample