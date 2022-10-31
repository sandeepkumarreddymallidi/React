import React, { useEffect, useState } from "react";
function EffectHooK(){
    const[users,setUsrs]=useState([])
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true)
        fetch("").then((res)=>res.json).then((result)=>{
            setLoading(false)
            setUsrs(result)
        }).catch(()=>{

        }).finally(()=>{
            setLoading(false)
        },[])
    })
    return(
        <div>
            <h1>Effect hoOk Demo</h1>
            {
                loading&&<div>loading....</div>
            }
            {
                users.length&&<div>{}</div>
            }
        </div>
    )
}