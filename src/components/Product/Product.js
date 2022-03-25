import './Product.css';
import { MdAddShoppingCart } from 'react-icons/md';
import React from 'react';

const Product = ({ product }) => {
    const { id, name, image, price } = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button className='cart-btn'>
                <p>Add To Cart <MdAddShoppingCart className='cart-icon'/></p>
            </button>
        </div>
    );
};

export default Product;