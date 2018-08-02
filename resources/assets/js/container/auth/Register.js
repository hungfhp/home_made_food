import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Register extends Component {
    render() {
        return (
            <div className="register-page">
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="col-lg-7 col-md-7 cnt-bg-photo d-none d-xl-block d-lg-block d-md-block"
                            style={{ backgroundImage: "url(/img/img-31.jpg)" }}
                        >
                            <div className="register-info">
                                <img
                                    src="/img/logos/black-logo.png"
                                    alt="logo"
                                />
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 align-self-center">
                            <div className="content-form-box register-box">
                                <div className="login-header">
                                    <h4>Create Your account</h4>
                                </div>
                                <form action="#" method="GET">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="Password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Re-type Password</label>
                                        <input
                                            type="Password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-color btn-md btn-block"
                                        >
                                            Create New Account
                                        </button>
                                    </div>
                                    <div className="login-footer text-center">
                                        <p>
                                            Already have an account?<a href="login.html">
                                                {" "}
                                                Sign In
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
