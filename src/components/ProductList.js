import React from 'react';
import '../App.css';
import Product from './Product';

const ProductList = (props) => {
    return (
        props.products.map(product => (
           <Product product={product} key={product.id}/>
        ))
    );
}
export default ProductList;


