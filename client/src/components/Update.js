import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";

const Update = (props) => {
    let navigate =useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                    if(isMounted){
                    setProduct(res.data);
                    setLoaded(true);
                }
            })
            .catch((err) => {
                console.log(err);
            })
            return() => isMounted = false;
    }, [])

    const updateProduct = (product) => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then((res) => {
                navigate('/products');
                setLoaded(true);
            })
            .catch((err) => console.log(err));
            navigate('/products');
    }

    return (
        <div>
            <h1 className='text-center'>Update a Product</h1>
            {
                loaded && 
                <>
                        <ProductForm
                            submitProp={updateProduct}
                            initialTitle={product.title}
                            initialPrice={product.price}
                            initialDescription={product.description}
                        />
                        <DeleteButton id={product._id} successCallback={() => navigate('/products')}/>
                    </>
            }
        </div>
    )
}

export default Update
