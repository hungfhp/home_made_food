import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FormLogin from "../../components/auth/login/FormLogin";
import FormLoggedIn from "../../components/auth/login/FormLoggedIn";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, profile } from '@/actions/AuthActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth,
            email: "",
            password: "",
            contentForm: ""
        };
        this.renderForm = this.renderForm.bind(this);
        console.log(this);
    }
    componentWillMount() {
        this.renderForm();
    }
    renderForm() {
        console.log(this);
        if (this.props.auth.isAuth) {
            this.setState({
                contentForm: <FormLoggedIn {...this.props} />
            });
        } else {
            this.setState({
                contentForm: <FormLogin {...this.props} renderFrom={this.renderForm.bind(this)} />
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
    console.log('login state', state);
    return {
        auth: state.auth
    };
};

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
