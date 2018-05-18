import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

class NewUser extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Header />
                <section>
                    <div className="row">
                        New User Login Form comes here....
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default NewUser;
