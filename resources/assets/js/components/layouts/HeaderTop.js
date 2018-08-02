import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { login, profile } from '@/actions/AuthActions';

class HeaderTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentWillMount() {
        console.log("this", this);
        if (localStorage.getItem("logged_in")) {
            this.setState({
                userForm: (
                    <li>
                        <a href={"/users/" + localStorage.user_id} className="sign-in">
                            <i className="fa fa-user" /> {this.state.username}
                        </a>
                    </li>
                )
            });
        } else {
            this.setState({
                userForm: (
                    <li>
                        <a href="/login" className="sign-in">
                            <i className="fa fa-sign-in" /> Login{" "}
                        </a>
                        <a href="/register" className="sign-in">
                            <i className="fa fa-user" /> Register
                        </a>
                    </li>
                )
            });
        }
    }
    
    render() {
        return (
            <header
                className="top-header top-header-bg d-none d-xl-block d-lg-block d-md-block"
                id="top-header-2"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="list-inline">
                                <a href="tel:0123456789">
                                    <i className="fa fa-phone" />0123-456-789
                                </a>
                                <a href="tel:hihi@hihi.com">
                                    <i className="fa fa-envelope" />hihi@hihi.com
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <ul className="top-social-media pull-right">
                                <li>
                                    <a href="#" className="facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="google">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="linkedin">
                                        <i className="fa fa-linkedin" />{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="rss">
                                        <i className="fa fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">/</a>
                                </li>
                                {this.state.userForm}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
        auth: state.auth
    };
};

function mapDispatchToProps(dispatch) {
    console.log('sdfs');
    return {
        // auth: dispatch(profile())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);