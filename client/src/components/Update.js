import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams } from "react-router-dom";

const Update = () => {
    let navigate =useNavigate();
    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(id)
                console.log(res.data);
                setTitle(res.data.title);
                console.log(title);
                setPrice(res.data.price);
                setDescription(res.data.description); 
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                navigate('/products');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <h1 className='text-center'>Update a Product</h1>
            <form onSubmit={updateProduct}>
            <div className="form-group">
                    <label>Title:</label>
                    <input value={title} className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} />
                
                <div className="form-group"></div>
                    <label>Price:</label>
                    <input value={price} className="form-control" type="number" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label >Description:</label>
                    <input value={description} className="form-control" type="text" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input className="btn btn-success btn-lg w-100" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Update
