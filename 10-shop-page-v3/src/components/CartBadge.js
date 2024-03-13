import React, { useContext } from 'react';
import CartContext from './CartContext';

export function CartBadge(props) {
    const { cart } = useContext(CartContext);
    return (
        <>
            <i className="fa fa-shopping-cart"></i>
            <span className="">{cart.length} item(s) in cart</span>
        </>
    )
}