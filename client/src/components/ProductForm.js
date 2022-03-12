import React, { useEffect, useState} from 'react'
import axios from 'axios'


const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, submitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const submitHandler = (e) => {
        e.preventDefault();

        submitProp({title, price, description});
    }

    return(
        <>
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
                    <input height="100px" value={description || ""} className="form-control" type="text" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input className="btn btn-success" type="submit" value="Submit" />
                </div>
            </form>
        </>
    )
}

export default ProductForm