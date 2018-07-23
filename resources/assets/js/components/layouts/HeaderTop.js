import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class HeaderTop extends Component {
    render() {
        return (
            <header
                className="top-header top-header-bg d-none d-xl-block d-lg-block d-md-block"
                id="top-header-2"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="list-inline">
                                <a href="tel:0123456789">
                                    <i className="fa fa-phone" />0123-456-789
                                </a>
                                <a href="tel:hihi@hihi.com">
                                    <i className="fa fa-envelope" />hihi@hihi.com
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <ul className="top-social-media pull-right">
                                <li>
                                    <a href="#" className="facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="google">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="linkedin">
                                        <i className="fa fa-linkedin" />{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="rss">
                                        <i className="fa fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">/</a>
                                </li>
                                <li>
                                    <a href="login" className="sign-in">
                                        <i className="fa fa-sign-in" /> Login{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="login" className="sign-in">
                                        <i className="fa fa-user" /> Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
