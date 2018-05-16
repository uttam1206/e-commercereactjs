import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItemPopOver: false,
            userDetailBox: false,
        }
    }

    checkCartItems = () => {
        this.setState({
            cartItemPopOver: !this.state.cartItemPopOver
        })
    }

    openUserDetails = () => {
        this.setState({
            userDetailBox: !this.state.userDetailBox
        })
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="col col-sm-3"><a className="navbar-brand">Academy Sports</a></div>
                    <div className="col col-sm-6">
                        <form>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                    <div className="col col-sm-3">
                        <div className="row justify-content-end">
                                <button className="btn btn-danger" onClick={this.checkCartItems.bind(this)}>
                                    <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                                    <span className="badge badge-pill badge-success">0</span>
                                </button>
                                { this.state.cartItemPopOver && <div className="popover">
                                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                                    <div className="row justify-content-center">
                                        <div className="popover-body">
                                            <h4>There are no Items.</h4>
                                            <a href="#" className="btn btn-sm btn-info">Continue shopping</a>
                                        </div>
                                    </div>
                                </div> }
                                <div className="dropdown">
                                    <button className="btn btn-warning dropdown-toggle" type="button" onClick={this.openUserDetails.bind(this)}>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </button>
                                    { this.state.userDetailBox && <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div> }
                                </div>
                        </div>

                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
