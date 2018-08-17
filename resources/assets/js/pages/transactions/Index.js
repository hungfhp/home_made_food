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
        return (
            <div>
                <Header title="Homemade - Transactions" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                <SubHeader title="Transactions"/>
                <div id="list-top"></div>
                <div className="blog-section content-area-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block">
                                    <div className="row clearfix">
                                        <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5">
                                            <h4>
                                                <span className="heading-icon">
                                                    <i className="fa fa-caret-right icon-design"></i>
                                                    <i className="fa fa-th-large"></i>
                                                </span>
                                                <span className="heading">Transactions</span>
                                            </h4>
                                        </div>

                                        <div className="col-xl-8 col-lg-7 col-md-7 col-sm-7">
                                            <div className="sorting-options clearfix">
                                                <a href="properties-list-rightside.html" className="change-view-btn"><i className="fa fa-th-list"></i></a>
                                                <a href="properties-grid-rightside.html" className="change-view-btn active-view-btn"><i className="fa fa-th-large"></i></a>
                                            </div>
                                            <div className="search-area">
                                                <select className="selectpicker search-fields" name="location">
                                                    <option>All</option>
                                                    <option>Required</option>
                                                    <option>Cooked</option>
                                                    <option>Dealed</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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