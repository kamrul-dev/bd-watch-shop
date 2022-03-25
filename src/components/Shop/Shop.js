import './Shop.css';
import React, { useEffect, useState } from 'react';

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
            <div>
                <h1>shop for product</h1>
            </div>
            <div>
                <h2>Selected Watches</h2>
            </div>
        </div>
    );
};

export default Shop;