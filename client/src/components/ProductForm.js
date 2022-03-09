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
            <div className="form-group">
                <label>Title:</label>
                <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} />
            
            <div className="form-group"></div>
                <label>Price:</label>
                <input className="form-control" type="number" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className="form-group">
                <label >Description:</label>
                <input className="form-control" type="text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="form-group">
                <input class="btn btn-primary" type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default ProductForm