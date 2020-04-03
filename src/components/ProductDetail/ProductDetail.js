import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:4200/product/'+productKey)
        .then(res => res.json())
        .then(data=>{
            setProduct(data)
        })
    },[productKey])
    return (
        <div>
            <h1>{productKey} Detail coming soon</h1>
            {/* did this to show the specific product based on the key while we pressed on a product name */}
            {
                product && <Product showAddToCart={false} product={product}></Product>}
        </div>
    );
};

export default ProductDetail;