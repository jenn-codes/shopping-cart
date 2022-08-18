import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Inventory} from "./components/Inventory";
import Header from './components/Header';
import Footer from './components/Footer'
import ProductPage from './pages/ProductPage'

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = window.localStorage.getItem("cart");
    console.log(savedCart)
    const initial = savedCart !== null ? JSON.parse(savedCart) : [];
    return initial;

  });


  
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  })


  const inventory = Inventory;
  const cartLength = cart.length;


    
  const addToCart = (product) => {

    let productIndex = cart.findIndex((item) => item.id === product.id)
    if (productIndex !== -1) {
      const newCart = cart.slice();
      newCart[productIndex].quantity++
      setCart(newCart)
    } else {
      setCart(cart.concat(product))
    }
  }


  const resetCart = () => {
    setCart([]);
  }

  const removeItem = (item) => {
    // let itemToRemove = cart.find((element) => element.id === item.id);
    setCart(cart.filter((element) => element.id !== item.id))
  }

  const decreaseItem = (product) => {
    let productIndex = cart.findIndex((item) => item.id === product.id)
    const newCart = cart.slice();
    newCart[productIndex].quantity--;
    setCart(newCart)
  }

    
  


  return (
    <div className='container'>
      <BrowserRouter basename= {process.env.PUBLIC_URL + '/'} >
        <Header cartLength={cartLength} />
        <Routes>
          <Route exact path="/products/:id" element={<ProductPage cart={cart} addToCart={addToCart} />} />
          <Route exact path="/shop" element={<Products addToCart={addToCart} inventory={inventory}/>} />
          <Route exact path="/cart" element={<Cart cart={cart} resetCart={resetCart} addToCart={addToCart} decreaseItem={decreaseItem} removeItem={removeItem}/>} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
