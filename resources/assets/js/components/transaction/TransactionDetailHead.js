import React, { Component } from "react";
import {Link} from "react-router-dom";

import {getStatus} from "@/utils/TransactionUtil";
import {getDistance} from "@/utils/GoogleAPIUtil";

export default class TransactionDetailHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
   
    render() {
        let transaction = this.props.transaction;
        let auth = this.props.auth;
        
        return (
            <div className="heading-properties">
                <div className="row">
                    {
                    transaction.food &&
                    <div className="col-md-12">
                        <div className="pull-left max-width-70-per">
                            <h3 className="post-title font-size-20 color-red-black"><span className={"transaction-"+getStatus(transaction)+"-color"}>{getStatus(transaction)}</span> - {transaction.food.name}</h3>
                            <p title="Location"><i className="material-icons">location_on</i>{transaction.address_from || transaction.address_to}</p>
                        </div>
                        <div className="p-r max-width-30-per">
                            <h3 className="price-text">{transaction.food.price} VND</h3>
                            <a>
                                <i className="material-icons favourite" title="Like">thumb_up</i> &emsp;
                                <i className="material-icons favourite" title="Dislike">thumb_down</i> &emsp;
                                <i className="material-icons favourite" style={{color: 'red', cursor: 'pointer'}} title="Favourite">favorite_border</i>
                            </a>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}


