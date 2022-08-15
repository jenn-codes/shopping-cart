import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import trash from '../assets/trash.png'


 const Cart = ({cart, resetCart, removeItem}) => {

    console.log(cart);
    let message = '';
    let shippingMessage = 'Spend over $100 to get free shipping!'

    if (cart.length < 1) {
        message = 'The cart is empty. Start shopping!'
        document.querySelector('button.reset-cart').disabled = 'disabled';
        document.querySelector('button.checkout').disabled = 'disabled';

    }

    let subtotal = cart.map((item) => item.price * item.quantity)
                    .reduce((a,b) => a+b, 0);
    let shipping
    if (subtotal < 100) {
        shipping = 4.99
    } else {
        shipping = 0
    }

    let total = subtotal + shipping;

    return (
        <div className="shopping-cart">

            <h1>Cart</h1>
            {cart.map((item) => {
                return (
                    <div key={item.id} className='shopping-cart-item'>
                        <span className='cart-quantity'>{item.quantity}</span>
                        <Link to={`/products/${item.id}`}>
                            <span className='cart-title'>{item.title}</span>
                        </Link>
                        <span className='cart-price'>{item.price}</span>
                        <span className='cart-item-total'>{parseFloat(item.price) * parseFloat(item.quantity)}</span>
                        <button type="button" className="removeItem" onClick={() => removeItem(item)}><img className="trash-icon" src={trash} alt="trash" /></button>                    
                    </div>
                )
            })}
            <div className="shipping-info">
                <span className="subtotal-label">SUBTOTAL</span>
                <span className="subtotal">${subtotal.toFixed(2)}</span>
                <span className="shipping-label">SHIPPING</span>
                <span className="shipping">${shipping.toFixed(2)}</span>
                <span className="total-label">TOTAL</span>
                <span className="total">${total.toFixed(2)}</span>       
            </div>
            <span className="cart-message">{message}</span>
            <span className="shipping-message">{shippingMessage}</span>

            <button type="button" className="checkout">Checkout</button>
            <button type="button" className="reset-cart" onClick={resetCart}>Empty Cart</button>

        </div>
    )
}

export default Cart