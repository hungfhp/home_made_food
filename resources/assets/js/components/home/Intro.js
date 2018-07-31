import React, { Component } from "react";

export default class Intro extends Component {
    render() {
        return (
            <div className="intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-sm-12">
                            <img src="/img/logos/logo-white.png" alt="loo" />
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="intro-text">
                                <h3>Looking To Sell Or Rent Your Property?</h3>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <a href="#" className="btn btn-md">
                                Submit Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
