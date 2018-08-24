
import React, { Component } from "react";

import {getStatus} from "@/utils/TransactionUtil";

import DealItemMedium from "@/components/deal/DealItemMedium";
import DealItemMediumEdit from "@/components/deal/DealItemMediumEdit";

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
        
        return (
            <div>
                <div className="product-name text-info" >{deals.length} 
                    {getStatus(transaction) == "dealing" && <span> Dealing</span>}
                    {getStatus(transaction) != "dealing" && <span> Dealed</span>}
                </div>
                <br/>
                {
                    deals.length ? (
                        deals.map((deal, index) => {
                            if (is_my_transaction && getStatus(transaction) == "dealing") {
                                return <DealItemMediumEdit key={index} auth={auth} transaction={transaction} deal={deal} />
                            } else {
                                return <DealItemMedium key={index} auth={auth} transaction={transaction} deal={deal} />
                            }
                        })
                    ) : null
                }
            </div>
        )
   
    }
}
