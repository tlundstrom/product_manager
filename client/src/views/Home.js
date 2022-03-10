import React, {useState} from "react";
import ProductForm from "../components/ProductForm";
import DisplayProducts from "../components/DisplayProducts";

const Home = (props) => {
    const {deleteProduct} = props;
    const {products, setProducts} = props;

 

    
    return(
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
            <DisplayProducts deleteProduct={deleteProduct} products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Home