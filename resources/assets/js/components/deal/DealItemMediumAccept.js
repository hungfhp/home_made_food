import React, { Component } from "react";
import {Link} from "react-router-dom";

import {getStatus} from "@/utils/TransactionUtil";

export default class DealItemMediumEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.updateTransactionToDealed = this.updateTransactionToDealed.bind(this);
    }
    updateTransactionToDealed(dealer_id) {
        if (getStatus(this.props.transaction) == "required") {
            this.props.updateTransaction({...this.props.transaction, cooker_id: dealer_id, status: "dealed"});
        } else {
            this.props.updateTransaction({...this.props.transaction, requirer_id: dealer_id, status: "dealed"});
        }
    }
    render() {
        let auth = this.props.auth;
        let transaction = this.props.transaction;
        let deal = this.props.deal;
        return (
            <div className="row comment">
                <div className="col-md-1">
                    <img src={deal.user.avatar} className="rounded-circle" alt="avatar-2" width="100%"/>
                </div>
                <div className="col-md-8">
                    <div className="comment-meta">
                        <div className="comment-meta-author">
                            <Link className="color-red-black" to={"/users/"+deal.user.id}>{deal.user.name}</Link>
                        </div>
                        <div className="comment-meta-date">
                            <span>{deal.updated_at}</span>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div><b><i className="fa fa-map-marker custom"></i></b> <span className="text-muted font-size-13">{deal.user.address} <br/> </span></div>
                    <p className="overflow-hidden max-height-70 text-overflow-ellipsis font-size-16px">{deal.comment}</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-success cursor-pointer" onClick={(dealer_id)=>this.updateTransactionToDealed(deal.user_id)}>Accept</button>
                </div>
            </div>
        );
    }
}
