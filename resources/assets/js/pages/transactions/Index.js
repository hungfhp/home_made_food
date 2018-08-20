import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { getProfile, logoutSuccess } from '@/actions/AuthActions';
import { getTransactions, getTransactionsRecent } from '@/actions/TransactionsActions';
import { updateTransaction }  from '@/actions/TransactionActions';
import { getDealsNewest }  from '@/actions/DealsActions';


import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import Total from "../../components/transaction/Total";
import List from "../../components/transaction/List";
import LeftSide from "@/components/transactions/LeftSide";
import RightSide from "@/components/transactions/RightSide";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.location.hash ? this.props.location.hash.substr(1):"all",
            page: 1
        }
        this.getTransactionsPaging = this.getTransactionsPaging.bind(this);
        this.updateTransaction = this.updateTransaction.bind(this);
    }
    componentWillMount() {
        this.props.dispatchGetTransactions({page: this.state.page, status: this.state.status});
        this.props.dispatchGetTransactionsRecent({page: 1, status: "recent"});
    }
    componentDidMount() {
        $('.search-area select').selectBox().change( () => {
            this.setState({
                status: $('.search-area select').selectBox().val()
            })
            window.location.hash = '#'+this.state.status;
            this.getTransactionsPaging(this.state.page);
        });
    }
    componentWillReceiveProps(nextProps) {
        this.props = {nextProps};
    }
    getTransactionsPaging(page) {
        this.setState({
            page: page
        })
        this.props.dispatchGetTransactions({page: this.state.page, status: this.state.status});
    }
    updateTransaction(new_transaction) {
        this.props.dispatchUpdateTransaction(new_transaction);
        this.getTransactionsPaging(this.state.page);
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
                                                <select defaultValue={this.state.status} className="selectpicker search-fields" name="location">
                                                    <option href="all" value="all" >All</option>
                                                    <option value="required" >Required</option>
                                                    <option value="cooked" >Cooked</option>
                                                    <option value="dealed" >Dealed</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <LeftSide {...this.props} status={this.state.status} getTransactionsPaging={this.getTransactionsPaging} updateTransaction={this.updateTransaction} />
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <RightSide deals_newest={this.props.deals_newest} transactions_recent={this.props.transactions_recent} />
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
        transactions: state.transactions.index,
        transactions_recent: state.transactions.recent,
        transaction_action: state.transaction,
        deals_newest: state.deals.newest
    };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getProfile()),
        dispatchGetDealsNewest: dispatch(getDealsNewest()),
        dispatchGetTransactions: (params) => dispatch(getTransactions(params)),
        dispatchGetTransactionsRecent: (params) => dispatch(getTransactionsRecent(params)),
        dispatchUpdateTransaction: (transaction) => dispatch(updateTransaction(transaction)),
        logoutSuccess: () => dispatch(logoutSuccess())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
