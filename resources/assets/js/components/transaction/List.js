import React, { Component } from "react";

import TrTransaction from "@/components/transaction/TrTransaction";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        let transactions =  this.props.transactions_history.data;
        let is_loading =    this.props.transactions_history.is_loading;
        let auth = this.props.auth;
        return (
            <table className="shop-table cart">
                <thead>
                <tr style={{textAlign: 'center'}}>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Description</th>
                    <th className="product-subtotal">Status</th>
                    <th className="product-subtotal">Created time</th>
                    <th className="product-subtotal">Desired time</th>
                    <th className="product-subtotal">Actions</th>
                    <th className="product-remove">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                    {
                        is_loading && <tr><td>Loading...</td></tr>
                    }
                    {
                        transactions.length ? (
                            transactions.map((transaction, index) => {
                                return <TrTransaction key={index} auth={auth} transaction={transaction} />
                            })
                        ) : null
                    }
                </tbody>
                
            </table>
            
        );
    }
}
