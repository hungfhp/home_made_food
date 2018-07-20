/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
// import App component
import App from "./components/App";
import Head from "./components/layouts/Head";
// import Home from "./pages/Home";
import Main from "./pages/Main";
require("./bootstrap");
require("./theme.js");

// change the getElementId from example to app
// render App component instead of Example
if (document.getElementById("root")) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/head" component={Head} exact={true} />
                    {/* <Route path="/home" component={Home} exact={true} /> */}
                    <App />
                </Switch>
            </div>
        </BrowserRouter>,
        document.getElementById("root")
    );
}
