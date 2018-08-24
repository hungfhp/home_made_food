
import React, { Component } from "react";

import {getStatus} from "@/utils/TransactionUtil";

import DealItemMedium from "@/components/deal/DealItemMedium";
import DealItemMediumAccept from "@/components/deal/DealItemMediumAccept";
import DealItemUpdate from "@/components/deal/DealItemUpdate";
import DealItemCreate from "@/components/deal/DealItemCreate";

export default class DealsListMedium extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let deals = this.props.deals;
        let auth = this.props.auth;
        let transaction = this.props.transaction;
        let is_my_transaction = this.props.is_my_transaction;
        let my_dealed = this.props.my_dealed;

        return (
            <div>
                <h3 className="heading">
                    {deals.length} 
                    {transaction.status == "dealing" && " Dealing"}
                    {transaction.status != "dealing" && " Dealed"}
                </h3>
                <br/>
                {
                    deals.length ? (
                        deals.map((deal, index) => {
                            if (is_my_transaction && transaction.status == "dealing") {
                                return <DealItemMediumAccept key={index} auth={auth} transaction={transaction} updateTransaction={this.props.updateTransaction} deal={deal} />
                            } else {
                                return <DealItemMedium key={index} auth={auth} transaction={transaction} deal={deal} />
                            }
                        })
                    ) : null
                }
                <h3 className="heading">
                    {auth.isAuth && !is_my_transaction && !my_dealed && "Deal Now"}
                    {auth.isAuth && !is_my_transaction && my_dealed && "Edit My dealed"}
                </h3>
                {!auth.isAuth && !is_my_transaction && "Please Login !"}
                {auth.isAuth && !is_my_transaction && !my_dealed && <DealItemCreate auth={auth} transaction={transaction} createDeal={this.props.createDeal}/>}
                {auth.isAuth && !is_my_transaction && my_dealed && <DealItemUpdate auth={auth} transaction={transaction} my_dealed={my_dealed} updateDeal={this.props.updateDeal}/>}
            </div>
        )
    }
}
