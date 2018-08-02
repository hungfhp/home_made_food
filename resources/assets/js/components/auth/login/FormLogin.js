import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FormLoggedIn from "./FormLoggedIn";

export default class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            alertError: "",
            loggedIn: localStorage.getItem("loggedIn")
        }
        this.submitLogin = this.submitLogin.bind(this);
    }
    submitLogin(e) {
        e.preventDefault();
        this.state.email = this.refs.email.value;
        this.state.password = this.refs.password.value;
        axios
            .post("/api/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                localStorage.setItem("userId", res.data.success.user_id);
                localStorage.setItem("token", res.data.success.token);
                localStorage.setItem("username", res.data.success.username);
                localStorage.setItem("loggedIn", true);
                history.back();
                this.setState({
                    loggedIn: true
                });
            })
            .catch(error => {
                console.log(error);
                localStorage.clear();
                let alertError = "Sai email hoặc password";
                this.setState({
                    alertError
                })
            })
    }
    render() {
        if (this.state.loggedIn) {
            return (
                <FormLoggedIn/>
            )
        } else {
            return (
                <div>
                    <form action="#">
                        <p>
                            Please enter your user name and password to login
                        </p>
                        <div className="alert-danger">{this.state.alertError}</div>
                        <br/>
                        <div className="form-group">
                            <input ref="email" type="email" className="form-control" name="email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input ref="password" type="Password" className="form-control" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <div className="form-check checkbox-theme">
                                <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Keep Me Signed In
                                </label>
                            </div>
                        </div>
                        <button type="submit" onClick={this.submitLogin} className="btn btn-color btn-md pull-right">
                            Login
                        </button>
                    </form>
                    <button className="btn btn-warning btn-md pull-left">
                        <a href="/">Home</a>
                    </button>
                </div>
            )
        }
    }
}
