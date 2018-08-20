import React, { Component } from "react";
import FormRegister from "@/components/auth/register/FormRegister";
import { connect } from "react-redux";
import {register, getProfile} from '@/actions/AuthActions';

class Register extends Component {
    render() {
        return (
            <div className="register-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 cnt-bg-photo d-none d-xl-block d-lg-block d-md-block" style={{ backgroundImage:
                            "url(/img/img-31.jpg)" }}>
                            <div className="register-info">
                                <img src="/img/logos/black-logo.png" alt="logo" />
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 align-self-center">
                            <FormRegister {...this.props} />
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
        default: dispatch(getProfile()),
        register: (user) => dispatch(register(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);