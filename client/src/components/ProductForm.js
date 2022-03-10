import React, { useEffect, useState} from 'react'
import axios from 'axios'


const ProductForm = (props) => {
    const {products, setProducts} = props;
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
                console.log(res.data.product);
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err));

        setDescription('');
        setPrice(0);
        setTitle('');
    }



    return(
        <>
            <h1 className='text-center'>Enter Product Details</h1>
            <form onSubmit={submitHandler}>
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
        </>
    )
}

export default ProductForm