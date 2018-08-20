import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class TransactionItemSmall extends Component {
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
        return (
            <div className="media mb-4">
                <Link className="pr-4" to={"/transactions/"+transaction.id}>
                    <img src={transaction.food.feature_image.link} alt="sub-property"/>
                </Link>
                <div className="media-body align-self-center">
                    <h5>
                        <Link to={"/transactions/"+transaction.id}>{transaction.food.name}</Link>
                    </h5>
                    <p>{transaction.updated_at}</p>
                    <p> <strong className="color-red-black">{transaction.price} Đ</strong></p>
                </div>
            </div>
        );
    }
}