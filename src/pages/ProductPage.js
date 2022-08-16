import React, { useState } from 'react';
import { Inventory } from '../components/Inventory';
import { useParams } from 'react-router-dom';

const ProductPage = ({addToCart, cart}) => {

    const [showQuant, setShowQuant] = useState(false);
    const handleAdd = (item) => {
        addToCart(item);
        setShowQuant(true);
    }

    const params = useParams();
    const productId = params.id;
    let product = Inventory.filter(item => item.id === productId)
    product = product[0]

    let existsInCart = cart.filter((item) => item.id === product.id)[0]
    let cartQuantity
    if (existsInCart) {
        cartQuantity = existsInCart.quantity
    }

    console.log(cartQuantity)

        
    return (
        <div className='product-page'>  
            <h3>{product.title}</h3>
            <img className='product-page-img' src={product.source} alt={product.source} />
            <h4>{product.desc}</h4>
            <span className='price'>{product.price}</span> 
            <button type='button' className='product-page-button' onClick={() => handleAdd(product)}>Add To Cart</button>
            {showQuant && <div className='adjust-quantity'>
                <span>Currently in the cart: </span>
                <span className='cart-quantity'>{cartQuantity}</span>
            </div>}

        </div>
            


    )

}

export default ProductPage;