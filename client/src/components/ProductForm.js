import React, { useEffect, useState} from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }



    return(
        <form onSubmit={submitHandler}>
            <label>Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} /><br/>
            <label>Price:</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)}/><br/>
            <label>Description:</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)}/><br/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ProductForm