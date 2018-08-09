import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
var browserHistory = require("react-router").browserHistory;
import { I18nextProvider } from "react-i18next";
import { Redirect } from "react-router";
import i18n from "./i18n";
import { I18n } from "react-i18next";
import SwitchRoute from "./Route";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStore from '@/reducers/configureStore';
const store = configureStore();

// layout
import ModalCanvasSidebar from "./components/modal/CanvasSidebar";
import ModalFood from "./components/modal/Food";
import ModalFullPageSearch from "./components/modal/FullPageSearch";

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <Router history={browserHistory}>
                        <div>
                            {/* Pages */}
                            <SwitchRoute />
                            {/* Layout */}
                            <ModalCanvasSidebar />

                            <ModalFood />
                            <ModalFullPageSearch />
                        </div>
                    </Router>
                </I18nextProvider>
            </Provider>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
