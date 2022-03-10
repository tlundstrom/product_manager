import  {useEffect, useState} from 'react'

import Home from './views/Home';

import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Detail from './components/Detail';
import Update from './components/Update';


function App() {
  const [products, setProducts] = useState([]);

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

const removeFromDOM = (productId) => {
  setProducts(products.filter(product => product._id !== productId));
}

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/products' element={<Home deleteProduct={deleteProduct} products={products} setProducts={setProducts} />} />
          <Route element={<Detail deleteProduct={deleteProduct}/>} path="/products/:id" />
          <Route element={<Update />} path="/products/edit/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
