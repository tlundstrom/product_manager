import  {useEffect, useState} from 'react'

import ProductForm from './components/ProductForm';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    <div className="App">
      <ProductForm/>
    </div>
  );
}

export default App;
