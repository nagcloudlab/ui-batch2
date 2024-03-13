import React, { useState } from 'react';
import { Product } from './Product';

export function ProductList(props) {

    let { onBuy } = props;

    const [products] = useState([
        {
            id: 1,
            name: "Laptop",
            price: 1000.00,
            description: "New mac pro",
            image: "images/laptop.png"
        },
        {
            id: 2,
            name: "Mobile",
            price: 500.00,
            description: "New model",
            image: "images/mobile.png"
        }
    ]);

    const renderProducts = () => {
        return products.map(p => (
            <div key={p.id} className="mt-4 list-group">
                <Product product={p} onBuy={onBuy} />
            </div>
        ));
    }
    return renderProducts()
}