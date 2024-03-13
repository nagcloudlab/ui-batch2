import React, { useEffect, useState } from 'react';
import { Product } from './Product';

export function ProductList(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/products")
            .then(res => res.json())
            .then(products => {
                setProducts(products)
            })
    }, [])

    const renderProducts = () => {
        return products.map(p => (
            <div key={p.id} className="mt-4 list-group">
                <Product product={p} />
            </div>
        ));
    }
    return renderProducts()
}