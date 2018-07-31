import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router'

import HeaderTop from "./HeaderTop";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.logout = this.logout.bind(this);
    }
    componentWillMount() {
        if (localStorage.getItem("loggedIn")) {
            this.setState({
                userLinks: (
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            {localStorage.getItem("username")}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                            <a className="dropdown-item" href={"/users/" + localStorage.userId}>
                                Profile
                            </a>
                            <a className="dropdown-item" href="/">
                                My Foods
                            </a>
                            <a onClick={this.logout} className="dropdown-item" href="/">
                                Logout
                            </a>
                        </div>
                    </li>
                )
            })
        } else {
            this.setState({
                userLinks: ""
            })
        }
    }
    logout() {
        axios.get('/api/logout').then(function () {
            localStorage.clear();
        }).catch(function (error) {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <title>{this.props.title}</title>
                <HeaderTop />
                <header className="main-header do-sticky" id="main-header-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-lg navbar-light rounded">
                                    <a href="/" className="navbar-brand logo">
                                        <img src="/img/logos/black-logo.png" alt="logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="fa fa-bars" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbar">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item dropdown active">
                                                <a className="nav-link" href="/" id="navbarDropdownMenuLink" >
                                                    Home
                                                </a>                                    
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="/foods" id="navbarDropdownMenuLink2">
                                                    Foods
                                                </a>
                                                {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Properties
                                                </a> */}
                                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <li className="dropdown-submenu">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            List Layout
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="properties-list-rightside.html">
                                                                    Right Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-list-leftside.html">
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-list-fullwidth.html">
                                                                    Fullwidth
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Grid Layout
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="properties-grid-rightside.html">
                                                                    Right Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-grid-leftside.html">
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-grid-fullwidth.html">
                                                                    Fullwidth
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Map View
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="properties-map-rightside-list.html">
                                                                    Map List Right Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-map-leftside-list.html">
                                                                    Map List Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-map-rightside-grid.html">
                                                                    Map Grid Right Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-map-leftside-grid.html">
                                                                    Map Grid Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-map-full.html">
                                                                    Map FullWidth
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Property Detail
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="properties-details.html">
                                                                    Property Detail 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-details-2.html">
                                                                    Property Detail 2
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="properties-details-3.html">
                                                                    Property Detail 3
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="nav-item dropdown megamenu-li">
                                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Hot
                                                </a>
                                                <div className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                                                    <div className="megamenu-area">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Most rating
                                                                    </h6>
                                                                    <a className="dropdown-item" href="about-1.html">
                                                                        About 1
                                                                    </a>
                                                                    <a className="dropdown-item" href="about-2.html">
                                                                        About 2
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Pages
                                                                    </h6>
                                                                    <a className="dropdown-item" href="agent-list.html">
                                                                        Agent List 1
                                                                    </a>
                                                                    <a className="dropdown-item" href="agent-list-2.html">
                                                                        Agent List 2
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Pages
                                                                    </h6>
                                                                    <a className="dropdown-item" href="gallery-2column.html">
                                                                        Gallery 2 column
                                                                    </a>
                                                                    <a className="dropdown-item" href="gallery-3column.html">
                                                                        Gallery 3 column
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Pages
                                                                    </h6>
                                                                    <a className="dropdown-item" href="user-profile.html">
                                                                        User profile
                                                                    </a>
                                                                    <a className="dropdown-item" href="my-properties.html">
                                                                        My Properties
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-3 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Others
                                                                    </h6>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9 col-lg-9">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Others
                                                                    </h6>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum. Lorem
                                                                        ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem
                                                                        aperiam nequ quaera molestias voluptatibus harum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink5" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Blog
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <li className="dropdown-submenu">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Classic
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="blog-classic-sidebar-right.html">
                                                                    Right Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-classic-sidebar-left.html">
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Columns
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="blog-columns-2col.html">
                                                                    2 Columns
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-columns-3col.html">
                                                                    3 Columns
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Masonry
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="blog-masonry-2col.html">
                                                                    2 Masonry
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-masonry-3col.html">
                                                                    3 Masonry
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Blog Details
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="blog-single-sidebar-right.html">
                                                                    Right Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-single-sidebar-left.html">
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Shop
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                                    <a className="dropdown-item" href="shop-list.html">
                                                        Shop List
                                                    </a>
                                                    <a className="dropdown-item" href="shop-cart.html">
                                                        Shop Cart
                                                    </a>
                                                </div>
                                            </li>
                                            {this.state.userLinks}
                                            <li className="nav-item dropdown">
                                                <a href="#full-page-search" className="nav-link">
                                                    <i className="fa fa-search" />
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="open-offcanvas nav-link" href="#">
                                                    <span />
                                                    <span className="fa fa-bars" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}