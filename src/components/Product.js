import React from 'react';
import '../App.css';
import logo from '../logo.svg'

const Product = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>{props.price}</p>
                <button type="button" className="btn btn-danger btn-block">Add</button>
                <button type="button" className="btn btn-primary btn-block">Buy</button>
            </div>
        </div>
    );
}
export default Product;
