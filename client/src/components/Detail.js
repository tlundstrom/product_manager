import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams } from "react-router-dom";

const Detail = (props) => {
    const {deleteProduct} =props;
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                return setProduct(res.data);
            })
            .catch((err) => {
                return console.log(err);
            })
    }, []);

    return(
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <div className="btn-area">
                <Link to={'/products'}>
                    <button onClick={(e) => deleteProduct(product._id)} className="btn btn-danger btn-sm">Delete</button>
                </Link>
                <Link to={`/products/edit/${product._id}`}>
                    <button className="btn btn-primary btn-sm">Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default Detail