import React, { Component } from "react";

export default class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        let total_cart = this.props.total_cart.data;
        let is_loading = total_cart.is_loading;
        console.log(total_cart);
        return (
                <div className="cart-total-box bg-white hdn-mb-30 mb-30">
                    <h5>Transactions Total</h5>
                    <hr/>
                    {
                        is_loading && <div>Loading...</div>
                    }
                    {
                        total_cart.total ? (
                            <ul>
                                <li>
                                    Required ({total_cart.required.quantity})<span className="pull-right">{total_cart.required.total_price} Đ</span>
                                </li>
                                <li>
                                    Cooked ({total_cart.cooked.quantity})<span className="pull-right">{total_cart.cooked.total_price} Đ</span>
                                </li>
                                <li>
                                    Dealed ({total_cart.dealed.quantity})<span className="pull-right">{total_cart.dealed.total_price} Đ</span>
                                </li>
                                <li>
                                    Shipping ({total_cart.shipping.quantity})<span className="pull-right">{total_cart.shipping.total_price} Đ</span>
                                </li>
                                <li>
                                    Done ({total_cart.done.quantity})<span className="pull-right">{total_cart.done.total_price} Đ</span>
                                </li>
                                <li>
                                    Cancel ({total_cart.cancel.quantity})<span className="pull-right">{total_cart.cancel.total_price} Đ</span>
                                </li>
                            </ul>
                        ) : null
                    }
                        <hr/>
                    {
                        total_cart.total ? (
                            <p className="mar-b-50">
                                Total ({total_cart.total.quantity})<span className="pull-right">{total_cart.total.price} Đ</span>
                            </p>
                        ) : null
                    }
                    <br/>
            </div>
        );
    }
}
