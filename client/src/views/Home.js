import React, {useState} from "react";
import ProductForm from "../components/ProductForm";
import DisplayProducts from "../components/DisplayProducts";

const Home = () => {
    const [products, setProducts] = useState([]);

    const removeFromDOM = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
    }
    
    return(
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
            <DisplayProducts removeFromDOM={removeFromDOM} products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Home