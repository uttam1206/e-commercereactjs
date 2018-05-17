import React, { Component } from 'react';
import '../App.css';
import products from '../data/products';
import CategoryItem from './CatergoryListItems'

class CategoryList extends Component {
    constructor(props) {
        super(props);
    }

    handlecatergoryItem = (item) => {
      console.log(item);
    }

    render() {
        return (
            <div className="row">
                {
                    products.map(item => (
                        <div className="col-xs-12 col-sm-3"  key={item.catId}>
                            <CategoryItem catergoryItem={item} handlecatergory={(catId) => this.handlecatergoryItem(catId)}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default CategoryList;
