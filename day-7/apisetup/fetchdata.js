import { useEffect, useState } from "react"

export const Usefetch=url=>{
    const[state, setstate]=useState({data:null,loading:true});
    useEffect(()=>{
        setstate({data:null,loading:false})
        fetch(url).then(res=>res.json)
        .then(y=>{
            setstate({data:y,loading:false})
        })
    })
    return state;
}