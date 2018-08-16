import React, { Component } from "react";
import {Link} from "react-router-dom";
import TransactionGridItem from "@/components/transactions/TransactionGridItem";
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
        console.log(this);

        return (
            <div className="row">
                {
                    is_loading ? (<div>Loading...</div>):(
                        transactions.length ? (
                            transactions.map((transaction, index) => {
                                return <TransactionGridItem key={index} auth={auth} transaction={transaction} />
                            })
                        ):null

                    )
                }
                <div className="col-lg-12">

                {

                    // this.props.transactions.pagination && 
                    // <Pagination current_page={this.props.transactions.pagination.current_page} last_page={this.props.transactions.pagination.last_page} getDataPaging={this.props.getTransactions}/>
                }
                </div>

            </div>
        );
    }
}