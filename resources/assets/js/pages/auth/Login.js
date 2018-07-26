import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
                console.log(res);
                // set state
                // this.setState({
                //     tasks: [res.data, ...this.state.tasks]
                // });
                // // then clear the value of textarea
                // this.setState({
                //     name: ""
                // });
            });
    }
    render() {
        // login 2
    return (
        <div className="login-page cnt-bg-photo overview-bgi" style={{ backgroundImage: "url(img/banner-1.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content-form-box forgot-box clearfix">
                            <div className="login-header clearfix">
                                <div className="pull-left">
                                    <img src="img/logos/black-logo.png" alt="logo" />
                                </div>
                                <div className="pull-right">
                                    <h4>Login</h4>
                                </div>
                            </div>
                            <p>
                                Please enter your user name and password to login
                            </p>
                            <form action="#login">
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
                                <button onClick={this.submitLogin} className="btn btn-color btn-md pull-right">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
