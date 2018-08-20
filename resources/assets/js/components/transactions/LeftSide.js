import React, { Component } from "react";
import {Link} from "react-router-dom";
import TransactionItemGrid from "@/components/transaction/TransactionItemGrid";
import Pagination from "@/components/layouts/Pagination";

export default class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        let transactions = this.props.transactions.data;
        let is_loading = this.props.transactions.is_loading;
        let pagination = this.props.transactions.pagination;
        let auth = this.props.auth;
        return (
            <div className="row">
                {
                    is_loading ? (<div>Loading...</div>):(
                        transactions.length ? (
                            transactions.map((transaction, index) => {
                                return <TransactionItemGrid key={index} auth={auth} transaction={transaction} updateTransaction={this.props.updateTransaction} />
                            })
                        ):null

                    )
                }
                <div className="col-lg-12">
                {
                    pagination && 
                    <Pagination href_to="#list-top" pagination={pagination} getDataPaging={this.props.getTransactionsPaging}/>
                }
                </div>

            </div>
        );
    }
}