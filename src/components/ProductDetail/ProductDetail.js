import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            <h1>{productKey} Detail coming soon</h1>
            {/* did this to show the specific product based on the key while we pressed on a product name */}
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;