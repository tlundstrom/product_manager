import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const DisplayProducts = (props) => {
    const {removeFromDOM, products, setProducts} = props;
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteProduct= (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                removeFromDOM(id)

            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div>
        <h1 className='text-center'>List of Products</h1>
        {
            products.map((product, index) => {
                return(
                    <div key={index}>
                        <Link to={`/products/${product._id}`}><h3>{product.title}</h3></Link>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <div className="btn-area">
                            <button onClick={(e) => deleteProduct(product._id)} className="btn btn-danger btn-sm">Delete</button>
                            <Link to={`/products/edit/${product._id}`}>
                                <button className="btn btn-primary btn-sm">Edit</button>
                            </Link>
                        </div>
                    </div>
                )}
            )
        }
        </div>
    )
}

export default DisplayProducts