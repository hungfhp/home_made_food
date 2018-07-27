import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FormLogin from "../../components/auth/login/FormLogin";
import FormLoggedIn from "../../components/auth/login/FormLoggedIn";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            alertError: "",
            form: "",
            loggedIn: localStorage.getItem("loggedIn")
        }
        if (this.state.loggedIn) {
            this.state.form = <FormLoggedIn />;
        } else {
            this.state.form = <FormLogin renderFrom={this.renderForm}/>;
        }
        this.renderForm = this.renderForm.bind(this);
    }
    componentWillMount() {
        this.renderForm();
    }
    renderForm() {
        this.state.loggedIn = localStorage.getItem("loggedIn");
        if (this.state.loggedIn) {
            this.setState({
                form: <FormLoggedIn />
            });
        } else {
            this.setState({
                form: <FormLogin renderFrom={this.renderForm.bind(this)}/>
            });
        }
    }
    render() {
        // login 2
        return (
            <div className="login-page cnt-bg-photo overview-bgi" style={{ backgroundImage: "url(/img/banner-1.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-form-box forgot-box clearfix">
                                <div className="login-header clearfix">
                                    <div className="pull-left">
                                        <img src="/img/logos/black-logo.png" alt="logo" />
                                    </div>
                                    <div className="pull-right">
                                        <h4>Login</h4>
                                    </div>
                                </div>
                                {/* {this.state.formLogin}
                                */}
                                {this.state.form}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
