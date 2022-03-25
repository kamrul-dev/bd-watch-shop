import React from 'react';
import './Cart.css';
import { MdDelete } from 'react-icons/md';

const Cart = ({ product }) => {
    const { name, image } = product;
    return (
        <div className='cart'>
            <div className='cart-info'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <button className='delete-btn'><MdDelete className='delete-icon' color='red' size="25px"/></button>
            </div>
        </div>
    );
};

export default Cart;