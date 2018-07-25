import React, { Component } from "react";

export default class Subheader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sub-banner overview-bgi">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>{this.props.title}</h1>
                        <ul className="breadcrumbs">
                            <li><a href="/home">Home</a></li>
                            <li className="active">{this.props.title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
