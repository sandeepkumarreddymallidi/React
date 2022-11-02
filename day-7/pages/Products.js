import { Link } from "react-router-dom";
import products from "../data"
const Products=()=>
{
    return(<section className="section">
        <h1>Products</h1>
        <div className="products">
            {
                products.map((product)=>{
                    return<article key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.image} width="250px" height="250px"></img>
                        <Link to={`/products/${product.id}`}>more info</Link>
                    </article>
                })
            }
        </div>
    </section>)
}
export default Products;