import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
var browserHistory = require("react-router").browserHistory;
import { I18nextProvider } from "react-i18next";
import { Redirect } from 'react-router';
import axios from "axios";
import i18n from './i18n';
import { I18n } from "react-i18next";

// auth
import AuthForgotPassword from "./pages/auth/ForgotPassword";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AuthResetPassword from "./pages/auth/ResetPassword";
// categories
import CategoriesCreate from "./pages/categories/Create";
import CategoriesDelete from "./pages/categories/Delete";
import CategoriesEdit from "./pages/categories/Edit";
import CategoriesIndex from "./pages/categories/Index";
import CategoriesShow from "./pages/categories/Show";
// error
import ErrorShow from "./pages/error/Show";
// favorites
import FavoritesCreate from "./pages/favorites/Create";
import FavoritesDelete from "./pages/favorites/Delete";
import FavoritesEdit from "./pages/favorites/Edit";
import FavoritesIndex from "./pages/favorites/Index";
import FavoritesShow from "./pages/favorites/Show";
// foods
import FoodsCreate from "./pages/foods/Create";
import FoodsDelete from "./pages/foods/Delete";
import FoodsEdit from "./pages/foods/Edit";
import FoodsIndex from "./pages/foods/Index";
import FoodsShow from "./pages/foods/Show";
// home
import HomeIndex from "./pages/home/Index";
// transactions
import TransactionsCreate from "./pages/transactions/Create";
import TransactionsDelete from "./pages/transactions/Delete";
import TransactionsEdit from "./pages/transactions/Edit";
import TransactionsIndex from "./pages/transactions/Index";
import TransactionsShow from "./pages/transactions/Show";
// users
import UsersCreate from "./pages/users/Create";
import UsersDelete from "./pages/users/Delete";
import UsersEdit from "./pages/users/Edit";
import UsersIndex from "./pages/users/Index";
import UsersShow from "./pages/users/Show";
// votes
import VotesCreate from "./pages/votes/Create";
import VotesDelete from "./pages/votes/Delete";
import VotesEdit from "./pages/votes/Edit";
import VotesIndex from "./pages/votes/Index";
import VotesShow from "./pages/votes/Show";
// common
import ModalCanvasSidebar from "./components/modal/CanvasSidebar";
import ModalFood from "./components/modal/Food";
import ModalFullPageSearch from "./components/modal/FullPageSearch";
import Lang from "./components/Lang";
export default class Main extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    {/* Pages */}
                    <Switch>
                        {/* auth */}
                        <Route exact path="/forgot-password" component={AuthForgotPassword} />
                        <Route exact path="/login" component={AuthLogin} />
                        <Route exact path="/register" component={AuthRegister} />
                        <Route exact path="/reset-password" component={AuthResetPassword} />
                        {/* categories */}
                        <Route exact path="/categories/create" component={CategoriesCreate} />
                        <Route exact path="/categories/:id/delete" component={CategoriesDelete} />
                        <Route exact path="/categories/:id/edit" component={CategoriesEdit} />
                        <Route exact path="/categories" component={CategoriesIndex} />
                        <Route exact path="/categories/:id" component={CategoriesShow} />
                        {/* error */}
                        <Route exact path="/error" component={ErrorShow} />
                        {/* favorites */}
                        <Route exact path="/favorites/create" component={FavoritesCreate} />
                        <Route exact path="/favorites/:id/delete" component={FavoritesDelete} />
                        <Route exact path="/favorites/:id/edit" component={FavoritesEdit} />
                        <Route exact path="/favorites" component={FavoritesIndex} />
                        <Route exact path="/favorites/:id" component={FavoritesShow} />
                        {/* foods */}
                        <Route exact path="/foods/create" component={FoodsCreate} />
                        <Route exact path="/foods/:id/delete" component={FoodsDelete} />
                        {/* <Route exact path="/foods/:id/edit" component={FoodsEdit} onEnter={this.requireAuth} /> */}
                        < Route exact path = "/foods/:id/edit"
                        render = {
                            () => (
                                localStorage.getItem("loggedIn") ? (<Redirect to = "/foods/:id/edit" />) : (<Redirect to = "/login" />)
                            )
                        }
                        />
                        <Route exact path="/foods" component={FoodsIndex} />
                        <Route exact path="/foods/:id" component={FoodsShow} />
                        {/* home */}
                        <Route exact path="/" component={HomeIndex} />
                        <Route exact path="/home" component={HomeIndex} />
                        {/* transactions */}
                        <Route exact path="/transactions/create" component={TransactionsCreate} />
                        <Route exact path="/transactions/:id/delete" component={TransactionsDelete} />
                        <Route exact path="/transactions/:id/edit" component={TransactionsEdit} />
                        <Route exact path="/transactions" component={TransactionsIndex} />
                        <Route exact path="/transactions/:id" component={TransactionsShow} />
                        {/* users */}
                        <Route exact path="/users/create" component={UsersCreate} />
                        <Route exact path="/users/:id/delete" component={UsersDelete} />
                        <Route exact path="/users/:id/edit" component={UsersEdit} />
                        <Route exact path="/users" component={UsersIndex} />
                        <Route exact path="/users/:id" component={UsersShow} />
                        {/* votes */}
                        <Route exact path="/votes/create" component={VotesCreate} />
                        <Route exact path="/votes/:id/delete" component={VotesDelete} />
                        <Route exact path="/votes/:id/edit" component={VotesEdit} />
                        <Route exact path="/votes" component={VotesIndex} />
                        <Route exact path="/votes/:id" component={VotesShow} />
                    </Switch>
                    {/* common */}
                    <ModalCanvasSidebar/>
                    <ModalFood/>
                    <ModalFullPageSearch/>
                </div>
            </Router>
        );
    }
}


if (document.getElementById("root")) {
    ReactDOM.render(<I18nextProvider i18n={ i18n }><Main /></I18nextProvider>, document.getElementById("root"));
}