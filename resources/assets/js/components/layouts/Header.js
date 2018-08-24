import React, { Component } from "react";
import {Link} from 'react-router-dom';
import HeaderTop from "./HeaderTop";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: 0
        };
        this.logout = this.logout.bind(this);
        this.renderLink = this.renderLink.bind(this);
    }
    componentDidMount() {
        axios.get("/api/categories/")
            .then(
                response =>{
                    this.setState({categories: response.data.data});
                }
            ).catch(
            error => console.log("categories error!")
        );
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        this.setState({
            userLinks: this.renderLink()
        })
    }
    componentWilMount() {
        this.setState({
            userLinks: this.renderLink()
        })
    }
    renderLink() {
        if (this.props.auth.isAuth) {
            return (
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            {this.props.auth.user.name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                            <Link className="dropdown-item" to={'/users/' + this.props.auth.user.id}>
                                Profile
                            </Link>
                            <Link className="dropdown-item" to={'/users/' + this.props.auth.user.id + "#cooked-foods"}>
                                My Foods
                            </Link>
                            <Link className="dropdown-item" to="/transactions/history">
                                My Transactions
                            </Link>
                            <a onClick={this.logout} className="dropdown-item" href="javascript:void(0)">
                                Logout
                            </a>
                        </div>
                    </li>
                )
        } else {
            return (
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Account
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                        <Link className="dropdown-item" to={"/login"}>
                            Login
                        </Link>
                        <Link className="dropdown-item" to={"/register"}>
                            Register
                        </Link>
                    </div>
                </li>
            )
        }
    }

    logout() {
        axios.get('/api/logout').then(res => {
            this.props.logoutSuccess();
        }).catch(error =>{
            console.log(error);
        })
    }

    render() {
        if (this.state.categories != 0) {
            const categories_list = this.state.categories.map((category)=> {
                return(
                    <div  key={category.id}>
                        <a className="dropdown-item" href={"/categories/" + category.id}>
                            {category.name}
                        </a>
                    </div>
                );
            });
            return (
                <div>
                    <title>{this.props.title}</title>
                    <HeaderTop {...this.props} />
                    <header className="main-header do-sticky" id="main-header-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <nav className="navbar navbar-expand-lg navbar-light rounded">
                                        <a href="/" className="navbar-brand logo">
                                            <img src="/img/logos/black-logo.png" alt="logo"/>
                                        </a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#navbar" aria-controls="navbar" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                            <span className="fa fa-bars"/>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbar">
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item dropdown active">
                                                    <a className="nav-link" href="/" id="navbarDropdownMenuLink">
                                                        Home
                                                    </a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link" href="/foods" id="navbarDropdownMenuLink2">
                                                        Foods
                                                    </a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#"
                                                       id="navbarDropdownMenuLink5" data-toggle="dropdown"
                                                       aria-haspopup="true"
                                                       aria-expanded="false">
                                                        Categories
                                                    </a>
                                                    <ul className="dropdown-menu"
                                                        aria-labelledby="navbarDropdownMenuLink">
                                                        <li className="dropdown-submenu">
                                                            {categories_list}
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                        Transactions
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                                        <Link className="dropdown-item" to={"/transactions#all"}>
                                                            All
                                                        </Link>
                                                        <Link className="dropdown-item" to={"/transactions#required"}>
                                                            Required
                                                        </Link>
                                                        <Link className="dropdown-item" to={"/transactions#cooked"}>
                                                            Cooked
                                                        </Link>
                                                        <Link className="dropdown-item" to={"/transactions#dealed"}>
                                                            Dealed
                                                        </Link>
                                                    </div>
                                                </li>
                                                {/*<li className="nav-item dropdown megamenu-li">*/}
                                                    {/*<a className="nav-link dropdown-toggle" href="#" id="dropdown01"*/}
                                                       {/*data-toggle="dropdown" aria-haspopup="true"*/}
                                                       {/*aria-expanded="false">*/}
                                                        {/*Hot*/}
                                                    {/*</a>*/}
                                                    {/*<div className="dropdown-menu megamenu"*/}
                                                         {/*aria-labelledby="dropdown01">*/}
                                                        {/*<div className="megamenu-area">*/}
                                                            {/*<div className="row">*/}
                                                                {/*<div className="col-sm-6 col-lg-3">*/}
                                                                    {/*<div className="megamenu-section">*/}
                                                                        {/*<h6 className="megamenu-title">*/}
                                                                            {/*Most rating*/}
                                                                        {/*</h6>*/}
                                                                        {/*<a className="dropdown-item"*/}
                                                                           {/*href="about-1.html">*/}
                                                                            {/*About 1*/}
                                                                        {/*</a>*/}
                                                                    {/*</div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="col-sm-6 col-lg-3">*/}
                                                                    {/*<div className="megamenu-section">*/}
                                                                        {/*<h6 className="megamenu-title">*/}
                                                                            {/*Pages*/}
                                                                        {/*</h6>*/}
                                                                        {/*<a className="dropdown-item"*/}
                                                                           {/*href="agent-list.html">*/}
                                                                            {/*Agent List 1*/}
                                                                        {/*</a>*/}
                                                                    {/*</div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="col-sm-6 col-lg-3">*/}
                                                                    {/*<div className="megamenu-section">*/}
                                                                        {/*<h6 className="megamenu-title">*/}
                                                                            {/*Pages*/}
                                                                        {/*</h6>*/}
                                                                        {/*<a className="dropdown-item"*/}
                                                                           {/*href="gallery-2column.html">*/}
                                                                            {/*Gallery 2 column*/}
                                                                        {/*</a>*/}
                                                                    {/*</div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="col-sm-6 col-lg-3">*/}
                                                                    {/*<div className="megamenu-section">*/}
                                                                        {/*<h6 className="megamenu-title">*/}
                                                                            {/*Pages*/}
                                                                        {/*</h6>*/}
                                                                        {/*<a className="dropdown-item"*/}
                                                                           {/*href="user-profile.html">*/}
                                                                            {/*User profile*/}
                                                                        {/*</a>*/}
                                                                    {/*</div>*/}
                                                                {/*</div>*/}
                                                            {/*</div>*/}
                                                            {/*<div className="row">*/}
                                                                {/*<div className="col-sm-3 col-lg-3">*/}
                                                                    {/*<div className="megamenu-section">*/}
                                                                        {/*<h6 className="megamenu-title">*/}
                                                                            {/*Others*/}
                                                                        {/*</h6>*/}
                                                                        {/*<p>*/}
                                                                            {/*Lorem ipsum dolor sit amet, consectetu*/}
                                                                            {/*radipisi cing elitBeatae autem aperiam nequ*/}
                                                                            {/*quaera molestias voluptatibus harum.*/}
                                                                        {/*</p>*/}
                                                                    {/*</div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="col-sm-9 col-lg-9">*/}
                                                                    {/*<div className="megamenu-section">*/}
                                                                        {/*<h6 className="megamenu-title">*/}
                                                                            {/*Others*/}
                                                                        {/*</h6>*/}
                                                                        {/*<p>*/}
                                                                            {/*Lorem ipsum dolor sit amet, consectetu*/}
                                                                            {/*radipisi cing elitBeatae autem aperiam nequ*/}
                                                                            {/*quaera molestias voluptatibus harum. Lorem*/}
                                                                            {/*ipsum dolor sit amet, consectetu radipisi*/}
                                                                            {/*cing elitBeatae autem*/}
                                                                            {/*aperiam nequ quaera molestias voluptatibus*/}
                                                                            {/*harum.*/}
                                                                        {/*</p>*/}
                                                                    {/*</div>*/}
                                                                {/*</div>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</li>*/}
                                                {/* <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#"
                                                       id="navbarDropdown4" role="button" data-toggle="dropdown"
                                                       aria-haspopup="true"
                                                       aria-expanded="false">
                                                        Shop
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                                        <a className="dropdown-item" href="shop-list.html">
                                                            Shop List
                                                        </a>
                                                    </div>
                                                </li> */}
                                                {this.state.userLinks}
                                                <li className="nav-item dropdown">
                                                    <a href="#full-page-search" className="nav-link">
                                                        <i className="fa fa-search"/>
                                                    </a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="open-offcanvas nav-link" href="#">
                                                        <span/>
                                                        <span className="fa fa-bars"/>
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
        } else return (
            <div></div>
        );
    }
}