import React from 'react';

const Cart = ({ product }) => {
    const {name} = product;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Cart;