import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Products = ({addToCart, inventory}) => {



    let originalInventory = inventory;
    const [products, setProducts] = useState(inventory)

    function handleFilterCat() {
        let cat = document.querySelector('#filterCategory').value;
        setProducts(originalInventory.filter((item) => item.cat === cat))
        console.log(inventory);
        document.querySelector('#filterPrice').value = '';
    }

    function handleFilterPrice() {
        let priceLevel = document.querySelector('#filterPrice').value;
        console.log(priceLevel)
        switch(priceLevel) {
            case 'under50':
                setProducts(originalInventory.filter((item) => item.price <= 50));
                break;
            case 'under100':
                setProducts(originalInventory.filter((item) => item.price <= 200));
                break;
            case 'under1000':
                setProducts(originalInventory.filter((item) => item.price <= 1000));
                break;
            default: 
                break;

        }
        document.querySelector('#filterCategory').value = ''
    }

    


    return (
        <div>
            <h1>Products</h1>
            <div className="filters">
                <select id='filterCategory' onChange={handleFilterCat}>
                    <option value=''>Choose category</option>
                    <option value='necklace'>Necklaces</option>
                    <option value='earrings'>Earrings</option>
                    <option value='ring'>Rings</option>
                </select>

                <select id='filterPrice' onChange={handleFilterPrice}>
                    <option value=''>Choose price range</option>
                    <option value='under50'>Under $50</option>
                    <option value='under100'>Under $100</option>
                    <option value='under1000'>Under $1000</option>
                </select>
            </div>
            <div className="product-grid">
                {products.map(item => {
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