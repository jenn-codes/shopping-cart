import React, { useState } from "react"; 
import { Link } from "react-router-dom";


 const Cart = ({cart, resetCart, removeItem}) => {

    console.log(cart);
    let message = ''

    if (cart.length < 1) {
        message = 'The cart is empty! Start shopping!'
        document.querySelector('button.reset-cart').disabled = 'disabled';
        document.querySelector('button.checkout').disabled = 'disabled';

    }

    let subtotal = cart.map((item) => item.price * item.quantity)
                    .reduce((a,b) => a+b, 0);
    let shipping = 0;
    let total = subtotal + shipping;

    return (
        <div>

            <h1>Cart</h1>
            {cart.map((item) => {
                return (
                    <div key={item.id} className='shopping-cart'>
                        <span className='cart-quantity'>{item.quantity}</span>
                        <Link to={`/products/${item.id}`}>
                            <span className='cart-title'>{item.title}</span>
                        </Link>
                        <span className='cart-price'>{item.price}</span>
                        <span className='cart-item-total'>{parseFloat(item.price) * parseFloat(item.quantity)}</span>
                        <button type="button" className="removeItem" onClick={() => removeItem(item)}>X</button>                    
                    </div>
                )
            })}
            <div className="shipping-info">
                <span className="subtotal-label">Subtotal</span>
                <span className="subtotal">{subtotal}</span>
                <span className="shipping-label">Shipping</span>
                <span className="shipping">{shipping}</span>
                <span className="total-label">Total</span>
                <span className="total">{total}</span>       
            </div>
            <span>{message}</span>
            <button type="button" className="reset-cart" onClick={resetCart}>Reset</button>
            <button type="button" className="checkout">Checkout</button>
        </div>
    )
}

export default Cart