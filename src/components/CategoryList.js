import React, { Component } from "react";
import "../App.css";
import productsData from "../data/products";
import CategoryItem from "./CatergoryListItems";
import ProductList from "./ProductList";

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderItem: true,
      subCatListObj: [],
      rowData: productsData
    };
  }

  handlecatergoryItem = item => {
    const listitems = this.state.rowData.find(function(product) {
      return product.catId === item;
    });

    this.setState({
      subCatListObj: listitems.subCatList,
      renderItem: false
    });
  };

  render() {
    return this.state.renderItem ? (
      <div className="row">
        {this.state.rowData.map(item => (
          <div className="col-xs-12 col-sm-3" key={item.catId}>
            <CategoryItem
              catergoryItem={item}
              handlecatergory={catId => this.handlecatergoryItem(catId)}
            />
          </div>
        ))}
      </div>
    ) : (
      <div className="row">
        <ProductList products={this.state.subCatListObj} />
      </div>
    );
  }
}

export default CategoryList;
