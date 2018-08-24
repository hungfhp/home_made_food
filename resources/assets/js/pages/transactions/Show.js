import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';
import {Redirect} from "react-router-dom";

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import TransactionForm from "../../components/transaction/TransactionForm";
import ShippingForm from "../../components/transaction/ShippingForm";
import Term from "../../components/transaction/Term";
import Confirm from "../../components/transaction/Confirm";

class Show extends Component {
    constructor(props) {
        super (props);
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        if (this.props.auth.isAuth) {
            return (
                <div>
                    <div>
                        <Header title="New Transaction" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess}/>
                        <SubHeader title="New Transaction"/>
                        <div className="user-page submit-property content-area-7">
                            <div className="container">
                                <div className="row">
                                    <TransactionForm {...this.props}/>
                                    <ShippingForm {...this.props}/>
                                </div>
                                <div className="row">
                                    <Term/>
                                    <Confirm/>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            );
        }
        else {
            return (
                <Redirect to='/login'/>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
