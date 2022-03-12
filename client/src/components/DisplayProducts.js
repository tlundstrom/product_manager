import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const DisplayProducts = (props) => {
    const {loaded, setLoaded, products, setProducts} = props;
    let price = null;
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const removeFromDOM = (id) => {
        setProducts(products.filter(product => product._id !== id));
      }

    return(
        <div>
        <h1 className='text-center'>List of Products</h1>
        {
            products.map((product, index) => {

                price = price + product.price;
                return(
                    <div key={index}>
                        <Link to={`/products/${product._id}`}><h3>{product.title}</h3></Link>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <div className="btn-area">
                            <DeleteButton id={product._id} successCallback={() => removeFromDOM(product._id)} />
                            <Link to={`/products/edit/${product._id}`}>
                                <button className="btn btn-primary">Edit</button>
                            </Link>
                        </div>
                    </div>
                )}
            )
        }

      
        
        {
            price > 0?
            <p>Total Price: ${price}</p>:
            null}
        {
            price > 300?
            <p>CALM DOWN! thats way to expensive...</p>:
            null
        
        }
        </div>
    )
}

export default DisplayProducts