import React, { Component } from "react";

export default class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    handleChangeHash(hash) {
        this.props.handleChangeHash(hash);
    }
    render() {
        let total_cart = this.props.total_cart.data;
        let is_loading = total_cart.is_loading;
        let hash = location.hash ? location.hash.substr(1):"all";

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
                                <li className={"cursor-pointer hover-green-black " + (hash == "required" ? "font-weight-700" : null)} onClick={()=>this.handleChangeHash("required")}>
                                    Required ({total_cart.required.quantity})<span className="pull-right">{total_cart.required.total_price} Đ</span>
                                </li>
                                <li className={"cursor-pointer hover-green-black " + (hash == "cooked" ? "font-weight-700" : null)} onClick={()=>this.handleChangeHash("cooked")}>
                                    Cooked ({total_cart.cooked.quantity})<span className="pull-right">{total_cart.cooked.total_price} Đ</span>
                                </li>
                                <li className={"cursor-pointer hover-green-black " + (hash == "dealed" ? "font-weight-700" : null)} onClick={()=>this.handleChangeHash("dealed")}>
                                    Dealed ({total_cart.dealed.quantity})<span className="pull-right">{total_cart.dealed.total_price} Đ</span>
                                </li>
                                <li className={"cursor-pointer hover-green-black " + (hash == "shipping" ? "font-weight-700" : null)} onClick={()=>this.handleChangeHash("shipping")}>
                                    Shipping ({total_cart.shipping.quantity})<span className="pull-right">{total_cart.shipping.total_price} Đ</span>
                                </li>
                                <li className={"cursor-pointer hover-green-black " + (hash == "done" ? "font-weight-700" : null)} onClick={()=>this.handleChangeHash("done")}>
                                    Done ({total_cart.done.quantity})<span className="pull-right">{total_cart.done.total_price} Đ</span>
                                </li>
                                <li className={"cursor-pointer hover-green-black " + (hash == "cancel" ? "font-weight-700" : null)} onClick={()=>this.handleChangeHash("cancel")}>
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
