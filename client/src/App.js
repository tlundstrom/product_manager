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
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/products' element={<Home products={products} setProducts={setProducts} />} />
          <Route element={<Detail />} path="/products/:id" />
          <Route element={<Update />} path="/products/edit/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
