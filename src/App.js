import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
// import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Inventory} from "./components/Inventory";
import Header from './components/Header';
import Footer from './components/Footer'
import ProductPage from './pages/ProductPage'

function App() {

  const [cart, setCart] = useState([]);
  const inventory = Inventory;
  const cartLength = cart.length;


    
  const addToCart = (product) => {
    const productIndex = cart.findIndex((i) => i.id === product.id)
    if (productIndex !== -1) {
      const newCart = cart.slice();
      newCart[productIndex].quantity++
      setCart(newCart)
    } else {
      setCart(cart.concat(product))
    }
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])
  
    
  return (
    <div>
      <BrowserRouter basename= {process.env.PUBLIC_URL + '/'} >
      <Header cartLength={cartLength} />

      <Routes>

        <Route exact path="/shop" element={<Products addToCart={addToCart} inventory={inventory}/>} />
        
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
