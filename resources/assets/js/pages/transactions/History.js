import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';
import { getTransactionsHitory, getTransactionsHitoryTotal } from '@/actions/TransactionsActions';

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import Total from "../../components/transaction/Total";
import List from "../../components/transaction/List";
import axios from "axios";

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount(){
        let params = {
            page: 1,
            status: "required"
        }
        this.props.dispatchGetTransactionsHitory(params);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        return (
            <div>
                <Header title="Homemade - Transaction history" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                <SubHeader title="Homemade - Transaction history"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Total total_cart={this.props.total_cart} />
                            </div>
                            <div className="col-lg-12">
                                <List {...this.props}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        transactions_history: state.transactions.history,
        total_cart: state.transactions.total_cart
    };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        dispatchGetTransactionsHitory: (params) => dispatch(getTransactionsHitory(params)),
        default3: dispatch(getTransactionsHitoryTotal()),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(History);