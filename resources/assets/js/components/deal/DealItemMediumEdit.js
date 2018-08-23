import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class DealItemMediumEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let auth = this.props.auth;
        // let is_my_transaction = this.props.is_my_transaction;
        let deal = this.props.deal;
        return (
            <div className="row">
                <div className="col-md-1">
                    <img src={deal.user.avatar} className="rounded-circle" alt="avatar-2" width="100%"/>
                </div>
                <div className="col-md-8">
                    <span><Link className="color-red-black" to={"/users/"+deal.user.id}>{deal.user.name}</Link></span> <br/>
                    <div><b><i className="fa fa-map-marker custom"></i></b> <span className="text-muted font-size-14">{deal.user.address} <br/> </span></div>
                    <p className="overflow-hidden max-height-70 text-overflow-ellipsis font-size-16px">{deal.comment}</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-success cursor-pointer">Accept</button>
                </div>
            </div>
        );
    }
}
