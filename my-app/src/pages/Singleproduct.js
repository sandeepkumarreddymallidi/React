import { useParams } from "react-router-dom";
import products from "../data";
const pr=products;
const Singleproduct=()=>{
    const {productid}=useParams();
    const product=pr.find(pr=>pr.id==productid);
    console.log(product)
    return(<section className="section products">
        <img src={product.image}></img>
        {/* <h1>{product.name}</h1> */}
    </section>)
}
export default Singleproduct;