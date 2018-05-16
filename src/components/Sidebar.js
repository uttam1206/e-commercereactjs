import React, { Component } from 'react';
import '../App.css';
import products from '../data/products';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subCatList: false,
            catIdFlag: 0
        }
        this.openSubCatList = this.openSubCatList.bind(this);
    }

    openSubCatList = (catId) => {
        this.setState({
            subCatList: !this.state.subCatList,
            catIdFlag: parseInt(catId)
        })
    }

    render() {
        const catIDFlag = this.state.catIdFlag;
        return (
            <div className="list-group">
                {
                    products.map(product => (
                        <div>
                            <button
                                type="button"
                                key={product.catId}
                                className="list-group-item list-group-item-action"
                                onClick={() => this.openSubCatList(product.catId)}
                            >
                                { product.catName }
                            </button>
                            {
                                (catIDFlag === product.catId) && <ul>
                                    {
                                        product.subCatList.map(subItem => (
                                            <li>{subItem.name}</li>
                                        ))
                                    }
                                </ul>
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Sidebar;
