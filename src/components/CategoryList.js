import React, { Component } from 'react';
import '../App.css';
import CategorySubList from './CategorySubList'
import products from '../data/products';

class CategoryList extends Component {
    render() {
        return (
            <div className="row">
                {
                    products.map(product => (
                        <div className="col-xs-12 col-sm-3"  key={product.catId}>
                            <CategorySubList product={product.subCatList}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default CategoryList;
