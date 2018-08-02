import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FormLoggedIn from "./FormLoggedIn";
import { bindActionCreators } from "redux";

export default class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth
        };
        this.submitLogin = this.submitLogin.bind(this);
        console.log(this);
    }
    componentWillReceiveProps(nextProps) {
        
        // this.setState ({
        //     auth: nextProps.auth
        // });
        console.log("next", this);
    }
    submitLogin(e) {
        this.props.login(this.refs.email.value, this.refs.password.value);

        // this.setState({
        //     this.state = this.props.login(this.refs.email.value, this.refs.password.value);
        // })
        // console.log("get", this.props.profile());
        console.log(this);
        
        // dispatch({type: 'LOGIN'});
    }
    render() {
        // if (this.props.auth) {
            // return <FormLoggedIn />;
        // } else {
            return (
                <div>
                    <form action="#">
                        <p>Please enter your user name and password to login</p>
                        <div className="alert-danger">
                            {/* {this.state.auth.error} */}
                        </div>
                        <br />
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
            );
        }
    }
// }

// function mapStateToProps(state) {
//     console.log('form login', state.auth);
//     return {
//         auth: state.auth
//     };
// };

// function mapDispatchToProps(dispatch) {
//     return {
//         login: (email, password) => dispatch(login(email, password)),
//         profile: () => dispatch(profile())
//     };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(FormLogin);
