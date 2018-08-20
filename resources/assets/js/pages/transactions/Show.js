import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import TransactionForm from "../../components/transaction/TransactionForm";
import ShippingForm from "../../components/transaction/ShippingForm";
import Term from "../../components/transaction/Term";
import Confirm from "../../components/transaction/Confirm";

class Show extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header title="Transaction's Info" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                    <SubHeader title="Transaction's Info"/>
                    <div className="user-page submit-property content-area-7">
                        <div className="container">
                            <div className="row">
                                <TransactionForm/>
                                <ShippingForm/>
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
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);