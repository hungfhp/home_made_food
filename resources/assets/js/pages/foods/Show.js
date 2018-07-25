import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import Subheader from "../../components/food/Subheader";
import Footer from "../../components/layouts/Footer";
import Tool from "../../components/food/Tool";
import Detail from "../../components/food/Detail";

export default class Show extends Component {
    render() {
        return (
            //properties detail 3
            <div>
                <Header title="Homemade - Product"/>
                <Subheader title="Product"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <Detail/>
                            <Tool/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
