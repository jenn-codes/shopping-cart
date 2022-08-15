import React from "react";
import { Link } from 'react-router-dom';

const Products = ({addToCart, inventory}) => {

    return (
        <div>
            <h1>Products</h1>
            <div className="product-grid">
                {inventory.map(item => {
                    return (
                    <div key={item.id} className='product-card'>
                        <Link to={`/products/${item.id}`} >
                            <div className='image-container'>
                                <img className="product-image" src={item.source} alt={item.title}></img>
                            </div>
                            <h2 className='product-title'>{item.title}</h2>
                        </Link>
                        <span className="price" >${item.price}</span>
                        <button type="button" className="cartButton" onClick={() => addToCart(item)}>Add to cart</button>
                        
                    </div>

                )})}
            
            </div>



        </div>
    )
}

export default Products