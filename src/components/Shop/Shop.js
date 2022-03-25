import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

// Shop component for loading thte data from public folder [data.json]
const Shop = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Selected Watches</h2>
            </div>
        </div>
    );
};

export default Shop;