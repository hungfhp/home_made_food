import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FormLogin from "../../components/auth/login/FormLogin";
import FormLoggedIn from "../../components/auth/login/FormLoggedIn";
import { connect } from "react-redux";
import { loginSuccess, logoutSuccess } from '@/actions/AuthActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentForm: ""
        };
        this.renderForm = this.renderForm.bind(this);
    }
    componentWillMount() {
        this.renderForm();
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        this.renderForm();
    }
    renderForm() {
        if (this.props.auth.isAuth) {
            this.setState({
                contentForm: <FormLoggedIn {...this.props} />
            });
        } else {
            this.setState({
                contentForm: <FormLogin {...this.props} />
            });
        }
    }
    render() {
        // login 2
        return (
            <div className="login-page cnt-bg-photo overview-bgi" style={{ backgroundImage: "url(/img/banner-1.jpg)" }}>
            <title>Login</title>
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
                                {this.state.contentForm}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

function mapDispatchToProps(dispatch) {
    return {
        loginSuccess: (email, password) => dispatch(loginSuccess(email, password)),
        logoutSuccess: ()  => dispatch(logoutSuccess())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
