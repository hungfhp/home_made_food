import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Form from "../../components/food/Form";

export default class Create extends Component {
    render() {
        return (
            //submit properties
            <div>
                <Header title="Homemade - New food"/>
                <SubHeader title="New food"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
