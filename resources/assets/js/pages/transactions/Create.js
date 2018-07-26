import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import Subheader from "../../components/transaction/Subheader";
import Footer from "../../components/layouts/Footer";
import TransactionForm from "../../components/transaction/TransactionForm";
import ShippingForm from "../../components/transaction/ShippingForm";
import Term from "../../components/transaction/Term";
import Confirm from "../../components/transaction/Confirm";

export default class Create extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header title="New Transaction"/>
                    <Subheader title="New Transaction"/>
                    <div className="user-page submit-property content-area-7">
                        <div className="container">
                            <div className="row">
                                <TransactionForm/>
                                <ShippingForm/>
                            </div>
                            <div className="row">
                                <Term/>
                                <Confirm/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
