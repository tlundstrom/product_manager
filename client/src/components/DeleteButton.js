import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
    const{ id, successCallback} = props;
    
    const deleteProduct= async (e) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                successCallback();
    
            })
            .catch((err) => {
                console.log(err);
            })
    } 




    return (
        <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
    )
}

export default DeleteButton