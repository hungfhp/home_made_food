import React, { Component } from "react";
import Footer from "../../components/layouts/Footer";
import { translate, Trans } from 'react-i18next';
import Header from "../../components/layouts/Header";
import Subheader from "../../components/food/Subheader";
import Tool from "../../components/food/Tool";
import Product from "../../components/food/Product";

class Index extends Component {
    render() {
        return (
            //index 6
            <div>
                <Header title="Homemade - Foods"/>
                <Subheader title="Foods"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <Product/>
                            <Tool/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default translate('translations')(Index);
