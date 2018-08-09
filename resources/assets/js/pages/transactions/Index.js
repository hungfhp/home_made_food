import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import Total from "../../components/transaction/Total";
import List from "../../components/transaction/List";

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header title="List Transactions"/>
                <SubHeader title="Transactions"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
