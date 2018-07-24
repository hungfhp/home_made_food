import React, { Component } from "react";
import ReactDOM from "react-dom";

import HeaderTop from "./HeaderTop";

export default class Header extends Component {
    render() {
        return (
            <div>
                <HeaderTop />
                <header className="main-header do-sticky" id="main-header-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-lg navbar-light rounded">
                                    <a
                                        className="navbar-brand logo"
                                        href="index.html"
                                    >
                                        <img
                                            src="img/logos/black-logo.png"
                                            alt="logo"
                                        />
                                    </a>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbar"
                                        aria-controls="navbar"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="fa fa-bars" />
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbar"
                                    >
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item dropdown active">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    id="navbarDropdownMenuLink"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Index
                                                </a>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdownMenuLink"
                                                >
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="index.html"
                                                        >
                                                            Index 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="index-2.html"
                                                        >
                                                            Index 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="index-3.html"
                                                        >
                                                            Index 3 (Map)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="index-4.html"
                                                        >
                                                            Index 4
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="index-5.html"
                                                        >
                                                            Index 5
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="index-6.html"
                                                        >
                                                            Index 6
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="index-7.html"
                                                        >
                                                            Index 7
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="index-8.html"
                                                        >
                                                            Index 8 (Video)
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    id="navbarDropdownMenuLink2"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Properties
                                                </a>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdownMenuLink"
                                                >
                                                    <li className="dropdown-submenu">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            List Layout
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-list-rightside.html"
                                                                >
                                                                    Right
                                                                    Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-list-leftside.html"
                                                                >
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-list-fullwidth.html"
                                                                >
                                                                    Fullwidth
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            Grid Layout
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-grid-rightside.html"
                                                                >
                                                                    Right
                                                                    Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-grid-leftside.html"
                                                                >
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-grid-fullwidth.html"
                                                                >
                                                                    Fullwidth
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            Map View
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-map-rightside-list.html"
                                                                >
                                                                    Map List
                                                                    Right
                                                                    Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-map-leftside-list.html"
                                                                >
                                                                    Map List
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-map-rightside-grid.html"
                                                                >
                                                                    Map Grid
                                                                    Right
                                                                    Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-map-leftside-grid.html"
                                                                >
                                                                    Map Grid
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-map-full.html"
                                                                >
                                                                    Map
                                                                    FullWidth
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            Property Detail
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-details.html"
                                                                >
                                                                    Property
                                                                    Detail 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-details-2.html"
                                                                >
                                                                    Property
                                                                    Detail 2
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="properties-details-3.html"
                                                                >
                                                                    Property
                                                                    Detail 3
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown megamenu-li">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    id="dropdown01"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Pages
                                                </a>
                                                <div
                                                    className="dropdown-menu megamenu"
                                                    aria-labelledby="dropdown01"
                                                >
                                                    <div className="megamenu-area">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Pages
                                                                    </h6>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="about-1.html"
                                                                    >
                                                                        About 1
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="about-2.html"
                                                                    >
                                                                        About 2
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="properties-comparison.html"
                                                                    >
                                                                        Properties
                                                                        Comparison
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="search-brand.html"
                                                                    >
                                                                        Properties
                                                                        Brands
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="properties-list-rightside.html"
                                                                    >
                                                                        Properties
                                                                        List
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="properties-grid-rightside.html"
                                                                    >
                                                                        Properties
                                                                        Grid
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="services-1.html"
                                                                    >
                                                                        Services
                                                                        1
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="services-2.html"
                                                                    >
                                                                        Services
                                                                        2
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="coming-soon.html"
                                                                    >
                                                                        Coming
                                                                        Soon
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Pages
                                                                    </h6>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="agent-list.html"
                                                                    >
                                                                        Agent
                                                                        List 1
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="agent-list-2.html"
                                                                    >
                                                                        Agent
                                                                        List 2
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="agent-grid.html"
                                                                    >
                                                                        Agent
                                                                        Grid 1
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="agent-grid-2.html"
                                                                    >
                                                                        Agent
                                                                        Grid 2
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="agent-grid-3.html"
                                                                    >
                                                                        Agent
                                                                        Grid 3
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="agent-detail.html"
                                                                    >
                                                                        Agent
                                                                        Detail
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="pricing-tables-1.html"
                                                                    >
                                                                        Pricing
                                                                        Tables 1
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="pricing-tables-2.html"
                                                                    >
                                                                        Pricing
                                                                        Tables 2
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Pages
                                                                    </h6>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="gallery-2column.html"
                                                                    >
                                                                        Gallery
                                                                        2 column
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="gallery-3column.html"
                                                                    >
                                                                        Gallery
                                                                        3 column
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="gallery-4column.html"
                                                                    >
                                                                        Gallery
                                                                        4 column
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="faq-1.html"
                                                                    >
                                                                        Faq 1
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="faq-2.html"
                                                                    >
                                                                        Faq 2
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="pages-404.html"
                                                                    >
                                                                        Pages
                                                                        404
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="typography.html"
                                                                    >
                                                                        Typography
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="typography-2.html"
                                                                    >
                                                                        Typography
                                                                        2
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 col-lg-3">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Pages
                                                                    </h6>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="user-profile.html"
                                                                    >
                                                                        User
                                                                        profile
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="my-properties.html"
                                                                    >
                                                                        My
                                                                        Properties
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="favorited-properties.html"
                                                                    >
                                                                        Favorited
                                                                        Properties
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="submit-property.html"
                                                                    >
                                                                        Submit
                                                                        Property
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="login.html"
                                                                    >
                                                                        Login
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="login-2.html"
                                                                    >
                                                                        Login 2
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="forgot-password.html"
                                                                    >
                                                                        Forgot
                                                                        Password
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="register.html"
                                                                    >
                                                                        Register
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
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetu
                                                                        radipisi
                                                                        cing
                                                                        elitBeatae
                                                                        autem
                                                                        aperiam
                                                                        nequ
                                                                        quaera
                                                                        molestias
                                                                        voluptatibus
                                                                        harum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9 col-lg-9">
                                                                <div className="megamenu-section">
                                                                    <h6 className="megamenu-title">
                                                                        Others
                                                                    </h6>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetu
                                                                        radipisi
                                                                        cing
                                                                        elitBeatae
                                                                        autem
                                                                        aperiam
                                                                        nequ
                                                                        quaera
                                                                        molestias
                                                                        voluptatibus
                                                                        harum.
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetu
                                                                        radipisi
                                                                        cing
                                                                        elitBeatae
                                                                        autem
                                                                        aperiam
                                                                        nequ
                                                                        quaera
                                                                        molestias
                                                                        voluptatibus
                                                                        harum.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    id="navbarDropdownMenuLink5"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Blog
                                                </a>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdownMenuLink"
                                                >
                                                    <li className="dropdown-submenu">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            Classic
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-classic-sidebar-right.html"
                                                                >
                                                                    Right
                                                                    Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-classic-sidebar-left.html"
                                                                >
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-classic-fullwidth.html"
                                                                >
                                                                    FullWidth
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            Columns
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-columns-2col.html"
                                                                >
                                                                    2 Columns
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-columns-3col.html"
                                                                >
                                                                    3 Columns
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            Masonry
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-masonry-2col.html"
                                                                >
                                                                    2 Masonry
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-masonry-3col.html"
                                                                >
                                                                    3 Masonry
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown-submenu">
                                                        <a
                                                            className="dropdown-item dropdown-toggle"
                                                            href="#"
                                                        >
                                                            Blog Details
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-single-sidebar-right.html"
                                                                >
                                                                    Right
                                                                    Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-single-sidebar-left.html"
                                                                >
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="blog-single-fullwidth.html"
                                                                >
                                                                    Fullwidth
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    id="navbarDropdown4"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Shop
                                                </a>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdown3"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="shop-list.html"
                                                    >
                                                        Shop List
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="shop-cart.html"
                                                    >
                                                        Shop Cart
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="shop-checkout.html"
                                                    >
                                                        Shop Checkout
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="shop-single.html"
                                                    >
                                                        Shop Details
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    id="navbarDropdown3"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Contact
                                                </a>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdown3"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="contact-1.html"
                                                    >
                                                        Contact 1
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="contact-2.html"
                                                    >
                                                        Contact 2
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="contact-3.html"
                                                    >
                                                        Contact 3
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    href="#full-page-search"
                                                    className="nav-link"
                                                >
                                                    <i className="fa fa-search" />
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="open-offcanvas nav-link"
                                                    href="#"
                                                >
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
