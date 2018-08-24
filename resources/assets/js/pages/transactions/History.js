import React, { Component } from "react";
import { connect } from "react-redux";

import { getProfile, logoutSuccess } from '@/actions/AuthActions';
import { getTransactionsHitory, getTransactionsHitoryTotal } from '@/actions/TransactionsActions';

import { convertURL } from "@/utils/ConvertUtil";
import { parsedSearch } from "@/utils/ConvertUtil";

import Header from "../../components/layouts/Header";
import SubHeader from "../../components/layouts/SubHeader";
import Footer from "../../components/layouts/Footer";
import Total from "../../components/transaction/Total";
import List from "../../components/transaction/List";
import Pagination from "@/components/layouts/Pagination";

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: parsedSearch().page || 1,
            status: this.props.location.hash ? this.props.location.hash.substr(1):"all"
        };
        this.handleChangeHash = this.handleChangeHash.bind(this);
        this.getTransactionsHitoryPaging = this.getTransactionsHitoryPaging.bind(this);
    }
    componentDidMount(){
        this.props.dispatchGetTransactionsHitory({page: this.state.page, status: this.state.status});
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    handleChangeHash(hash) {
        this.setState({
            status: hash
        })
        window.location.hash = '#'+hash;
        this.props.dispatchGetTransactionsHitory({page: this.state.page, status: hash});
        // this.getTransactionsHitoryPaging(this.state.page);
    }
    getTransactionsHitoryPaging(page) {
        this.setState({
            page: page
        })
        convertURL({page: page, status: this.state.status});
        this.props.dispatchGetTransactionsHitory({page: page, status: this.state.status});
    }
    render() {
        let pagination = this.props.transactions_history.pagination;
        return (
            <div>
                <Header title="Homemade - Transaction history" auth={this.props.auth} logoutSuccess={this.props.logoutSuccess} />
                <SubHeader title="Homemade - Transaction history"/>
                <div className="user-page submit-property content-area-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Total total_cart={this.props.total_cart} handleChangeHash={this.handleChangeHash} />
                            </div>
                            <div className="col-lg-12">
                                <div id="history-top"></div>
                                <List {...this.props}/>
                                <Pagination href_to="#history-top" pagination={pagination} getDataPaging={this.getTransactionsHitoryPaging} />
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
