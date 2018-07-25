import React, { Component } from "react";

export default class Subheader extends Component {
    render() {
        return (
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>List food</h1>
                        <ul className="breadcrumbs">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">List food</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
