import React, {useState, useEffect} from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import DisplayProducts from "../components/DisplayProducts";


const Home = (props) => {
    const[loaded, setLoaded] = useState(false);
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res =>{ 
                setProducts(res.data)
                setLoaded(true);
            });
    }, [])

    const createProduct = (product) => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                console.log(res.data);
                setProducts([...products, res.data]);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }
    
    return(
        <div>
            <ProductForm submitProp={createProduct} products={products} setProducts={setProducts}/>
            <hr/>
            {loaded && <DisplayProducts loaded={loaded} setLoaded={setLoaded} products={products} setProducts={setProducts}/>}
        </div>
    )
}

export default Home