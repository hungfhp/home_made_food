import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';
import { getTransactions, getTransactionsHitory, getTransactionsHitoryTotal } from '@/actions/TransactionsActions';

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import Total from "../../components/transaction/Total";
import List from "../../components/transaction/List";
import LeftSide from "@/components/Transactions/LeftSide";
import RightSide from "@/components/Transactions/RightSide";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.props.getTransactions(1);
    } 
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        console.log(this);
        return (
            <div>
                <Header title="Homemade - Transactions" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                <SubHeader title="Transactions"/>
                <div className="blog-section content-area-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <LeftSide {...this.props} />
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <RightSide />
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
        transactions: state.transactions
    };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        getTransactions: (page) => dispatch(getTransactions(page)),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);