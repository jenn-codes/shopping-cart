import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Inventory } from '../components/Inventory';

const ProductPage = ({match, addToCart}) => {

    let { itemId } = match.params;
    let itemData = Inventory.find((item) => item.id === itemId);
    console.log(match, itemData)

        
    return (
        <div>
            <h2>{itemData}</h2>
        </div>
    )

}

export default ProductPage;