import React, { useState,useEffect } from "react";
import Tables from "./Tables";
function Sample(){
    const [products, setProducts] = useState([]);
    const fetchData = () => {
        fetch("https://fakestoreapi.com/products")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setProducts(data)
            console.log(data)
          })
      }
    useEffect(() => {
      fetchData()
    }, []);
    return(<div>
           <Tables name={products}></Tables>
    </div>)
}
export default Sample;