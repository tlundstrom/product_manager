import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";


const Detail = (props) => {
    let navigate = useNavigate();
    const [product, setProduct] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return(
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <div className="btn-area">
                <DeleteButton id={product._id} successCallback={()=>navigate('/products')} />
                <Link to={`/products/edit/${product._id}`}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default Detail