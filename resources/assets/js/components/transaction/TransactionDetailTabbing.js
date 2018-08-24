import React, { Component } from "react";
import TransactionDetailTabDescription from "@/components/transaction/TransactionDetailTabDescription";
import FoodDetailTabInfo from "@/components/food/FoodDetailTabInfo";
import FoodDetailTabMap from "@/components/food/FoodDetailTabMap";
import FoodDetailTabRelated from "@/components/food/FoodDetailTabRelated";

export default class TransactionDetailTabbing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        let auth = this.props.auth;
        let is_my_transaction = this.props.is_my_transaction;
        let is_my_shipping_transaction = this.props.is_my_shipping_transaction;
        let transaction = this.props.transaction;
        return (
            <div className="tabbing tabbing-box mb-60">
                <ul className="nav nav-tabs" id="carTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active show" id="one-tab" data-toggle="tab" href="#one"
                            role="tab" aria-controls="one" aria-selected="false">Description</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab"
                            aria-controls="three" aria-selected="true">Location</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab"
                            aria-controls="four" aria-selected="true">Related Foods</a>
                    </li> */}
                </ul>
                <div className="tab-content" id="carTabContent">
                    <TransactionDetailTabDescription auth={auth} transaction={transaction} updateTransaction={this.props.updateTransaction} is_my_transaction={is_my_transaction} is_my_shipping_transaction={is_my_shipping_transaction} />
                    <FoodDetailTabMap />
                    {/* <FoodDetailTabRelated /> */}
                </div>
            </div>
        );
    }
}
