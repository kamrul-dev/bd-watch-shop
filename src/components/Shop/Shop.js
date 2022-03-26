import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

// Shop component for loading thte data from public folder [data.json]
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    // select 1 for me button handler
    const handleSelectOne = () => {
        const selectedItem = cart[Math.floor(Math.random() * cart.length)];
        if (selectedItem) {
            setCart([]);
            const newCart = [selectedItem];
            setCart(newCart);
        }

    }
    // select again button handler
    const handleSelectAgain = () =>{
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Selected Watches</h2>
                <div className='cart-cont'>
                    {
                        cart.map(product => <Cart
                            key={product.id}
                            product={product}
                        ></Cart>)
                    }
                </div>
                <div>
                    <button onClick={handleSelectOne} className='select-for-me'>SELECT 1 FOR ME</button>
                </div>
                <div>
                    <button onClick={handleSelectAgain} className='select-again'>SELECT AGAIN</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;