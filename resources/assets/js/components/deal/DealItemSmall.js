import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class DealItemSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let deal = this.props.deal;
        return (
            <div className="media">
                <a className="pr-3" href="#">
                    <img src={deal.user.avatar} className="rounded-circle" alt="avatar-2"/>
                </a>
                <div className="media-body">
                    <p className="overflow-hidden max-height-70 text-overflow-ellipsis"><span><Link className="color-red-black" to={"/users/"+deal.user.id}>{deal.user.name}</Link></span>: {deal.comment}</p>
                    <p>On <span><Link className="text-uppercase" to={"/transactions/"+deal.transaction.id}>{deal.transaction.food.name}</Link></span></p>
                    <br/>
                </div>
            </div>
        );
    }
}
