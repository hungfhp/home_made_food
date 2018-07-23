import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* Pages */}
                    <Switch>
                        {/* auth */}
                        <Route
                            exact
                            path="/auth/hihi1"
                            component={AuthForgotPassword}
                        />
                        <Route exact path="/auth/hihi2" component={AuthLogin} />
                        <Route
                            exact
                            path="/auth/hihi3"
                            component={AuthRegister}
                        />
                        <Route
                            exact
                            path="/auth/hihi4"
                            component={AuthResetPassword}
                        />
                        {/* categories */}
                        <Route
                            exact
                            path="/categories/create"
                            component={CategoriesCreate}
                        />
                        <Route
                            exact
                            path="/categories/:id/delete"
                            component={CategoriesDelete}
                        />
                        <Route
                            exact
                            path="/categories/:id/edit"
                            component={CategoriesEdit}
                        />
                        <Route
                            exact
                            path="/categories/:id"
                            component={CategoriesIndex}
                        />
                        <Route
                            exact
                            path="/categories"
                            component={CategoriesShow}
                        />
                        {/* error */}
                        <Route exact path="/error" component={ErrorShow} />
                        {/* favorites */}
                        <Route
                            exact
                            path="/favorites/create"
                            component={FavoritesCreate}
                        />
                        <Route
                            exact
                            path="/favorites/:id/delete"
                            component={FavoritesDelete}
                        />
                        <Route
                            exact
                            path="/favorites/:id/edit"
                            component={FavoritesEdit}
                        />
                        <Route
                            exact
                            path="/favorites/:id"
                            component={FavoritesShow}
                        />
                        <Route
                            exact
                            path="/favorites"
                            component={FavoritesIndex}
                        />
                        {/* foods */}
                        <Route
                            exact
                            path="/foods/create"
                            component={FoodsCreate}
                        />
                        <Route
                            exact
                            path="/foods/:id/delete"
                            component={FoodsDelete}
                        />
                        <Route
                            exact
                            path="/foods/:id/edit"
                            component={FoodsEdit}
                        />
                        <Route exact path="/foods/:id" component={FoodsShow} />
                        <Route exact path="/foods" component={FoodsIndex} />
                        {/* home */}
                        <Route exact path="/home" component={HomeIndex} />
                        {/* transactions */}
                        <Route
                            exact
                            path="/transactions/create"
                            component={TransactionsCreate}
                        />
                        <Route
                            exact
                            path="/transactions/:id/delete"
                            component={TransactionsDelete}
                        />
                        <Route
                            exact
                            path="/transactions/:id/edit"
                            component={TransactionsEdit}
                        />
                        <Route
                            exact
                            path="/transactions/:id"
                            component={TransactionsShow}
                        />
                        <Route
                            exact
                            path="/transactions"
                            component={TransactionsIndex}
                        />
                        {/* users */}
                        <Route
                            exact
                            path="/users/create"
                            component={UsersCreate}
                        />
                        <Route
                            exact
                            path="/users/:id/delete"
                            component={UsersDelete}
                        />
                        <Route
                            exact
                            path="/users/:id/edit"
                            component={UsersEdit}
                        />
                        <Route exact path="/users/:id" component={UsersShow} />
                        <Route exact path="/users" component={UsersIndex} />
                        {/* votes */}
                        <Route
                            exact
                            path="/votes/create"
                            component={VotesCreate}
                        />
                        <Route
                            exact
                            path="/votes/:id/delete"
                            component={VotesDelete}
                        />
                        <Route
                            exact
                            path="/votes/:id/edit"
                            component={VotesEdit}
                        />
                        <Route exact path="/votes/:id" component={VotesShow} />
                        <Route exact path="/votes" component={VotesIndex} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
