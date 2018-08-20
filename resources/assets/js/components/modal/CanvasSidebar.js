import React, { Component } from "react";

export default class CanvasSidebar extends Component {
    render() {
        return (
            <div className="off-canvas-sidebar">
                <div className="off-canvas-sidebar-wrapper">
                    <div className="off-canvas-header">
                        <a className="close-offcanvas" href="#">
                            <span className="fa fa-times" />
                        </a>
                    </div>
                    <div className="off-canvas-content">
                        <aside className="canvas-widget">
                            <div className="logo text-center">
                                <img src="/img/logos/logo.png" alt="logo" />
                            </div>
                        </aside>
                        <aside className="canvas-widget">
                            <ul className="menu">
                                <li className="menu-item menu-item-has-children">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="menu-item">
                                    <a href="properties-grid-leftside.html">
                                        Properties List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="properties-details.html">
                                        Property Detail
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="blog-single-sidebar-right.html">
                                        Blog
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="about-1.html">About US</a>
                                </li>
                                <li className="menu-item">
                                    <a href="contact-1.html">Contact US</a>
                                </li>
                            </ul>
                        </aside>
                        <aside className="canvas-widget">
                            <ul className="social-icons">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-vk" />
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}
