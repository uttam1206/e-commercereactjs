import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CategoryList from './components/CategoryList'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
          <Header/>
          <section>
              <div className="row">
                  <div className="col-sm-3">
                      <Sidebar/>
                  </div>
                  <div className="col-sm-9">
                      <CategoryList/>
                  </div>
              </div>
          </section>
          <Footer/>
      </div>
    );
  }
}

export default App;
