import React from "react";
import "../App.css";
import Product from "./Product";

const ProductList = props => {
  return props.products.map(product => (
    <div className="col-xs-12 col-sm-3">
      <Product product={product} key={product.id} />
    </div>
  ));
};
export default ProductList;
