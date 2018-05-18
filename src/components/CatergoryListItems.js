import React from "react";
import "../App.css";
import logo from "../logo.svg";

const Product = props => {
  return (
    <div className="card">
      <img className="card-img-top" src={logo} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.catergoryItem.catName}</h5>
        <p className="card-text">{props.catergoryItem.catDesc}</p>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => props.handlecatergory(props.catergoryItem.catId)}
        >
          View Items
        </button>
      </div>
    </div>
  );
};
export default Product;
