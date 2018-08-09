import React, { Component } from "react";
import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import User from "../../components/favourite/User";
import Footer from "../../components/layouts/Footer";
import ListFavourite from "../../components/favourite/ListFavourite";


export default class Index extends Component {
    render() {
        return (
            //favourite properties
            <div>
                <Header title="Homemade - Favourite foods"/>
                <SubHeader title="Favourite foods"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <User/>
                            <ListFavourite/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
