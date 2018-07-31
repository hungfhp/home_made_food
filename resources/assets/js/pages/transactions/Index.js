import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import Subheader from "../../components/transaction/Subheader";
import Footer from "../../components/layouts/Footer";
import Total from "../../components/transaction/Total";
import List from "../../components/transaction/List";

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header title="List Transactions"/>
                <Subheader title="Transactions"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <List/>
                            <Total/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
