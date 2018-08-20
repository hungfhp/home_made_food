import React, { Component } from "react";

import TransactionItemSmall from "../transaction/TransactionItemSmall";

export default class TransactionsListSmall extends Component {
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
        return (
            <div>
                {
                    is_loading && <div>Loading...</div>
                }
                {
                    transactions.length ? (
                        transactions.map((transaction, index) => {
                            return <TransactionItemSmall key={index} transaction={transaction} />
                        })
                    ):null
                }
            </div>
        );
    }
}