import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    handleRegister() {
        let user = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            c_password: this.refs.c_password.value
        }
        this.props.register(user);
    }
    render() {
        return (
            <div className="content-form-box register-box">
                <div className="login-header">
                    <h4>Create Your account</h4>
                </div>
                <form action="javascript:void(0)">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" ref="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" ref="email" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="Password" className="form-control" ref="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label>Re-type Password</label>
                        <input type="Password" className="form-control" ref="c_password" placeholder="Confirm Password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={this.handleRegister} className="btn btn-color btn-md btn-block">
                            Create New Account
                        </button>
                    </div>
                    <div className="login-footer text-center">
                        <p>
                            Already have an account?
                            <Link to={'/login'}>
                                {" "} Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
