import React, { Component } from "react";

export default class Term extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="heading-2">
                    <h4>Terms</h4>
                </div>
                <div className="our-payment">
                    <div className="payment-box">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                                Direct Bank Transfer
                        </label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                    <div className="payment-box">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                                Direct Bank Transfer
                        </label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                    <div className="payment-box">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                                Direct Bank Transfer
                        </label>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                </div>
            </div>
        );
    }
}
