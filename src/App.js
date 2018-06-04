import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import productsData from "./data/products";

class App extends Component {
  render() {
      console.log(this.props.match.params)
    return (
      <div className="container-fluid p-0">
        <Header />
        <section>
          <div className="row">
            <div className="col-sm-3">
              <Sidebar data={productsData} />
                <h2>Uttam</h2>
            </div>
            <div className="col-sm-9">
              <CategoryList />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
