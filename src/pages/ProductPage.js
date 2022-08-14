import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Inventory } from '../components/Inventory';
import { useParams } from 'react-router-dom';

const ProductPage = ({addToCart}) => {

    const handleAdd = (item) => {
        addToCart(item);
    }

    const params = useParams();
    const productId = params.id;
    let product = Inventory.filter(item => item.id == productId)
    console.log(product[0].product);
    product = product[0]

        
    return (
        <div className='product-page'>  
            <h3>{product.title}</h3>
            <img className='product-page-img' src={product.source} alt={product.source} />
            <h4>{product.desc}</h4>
            <div className='checkout'>
                <span className='price'>{product.price}</span> 
                <button type='button' onClick={() => handleAdd(product)}>Add To Cart</button>
            </div>

        </div>
            


    )

}

export default ProductPage;