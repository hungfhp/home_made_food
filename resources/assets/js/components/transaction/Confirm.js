import React, { Component } from "react";

export default class Confirm extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="cart-total-box bg-white">
                    <h5>Cart Totals</h5>
                    <hr/>
                        <ul>
                            <li>
                                Subtotal<span className="pull-right">$170.00</span>
                            </li>
                            <li>
                                Shipping Charge<span className="pull-right">$234.00</span>
                            </li>
                            <li>
                                Local Delivery <span className="pull-right">$334</span>
                            </li>
                            <li>
                                Flat Rate<span className="pull-right">$1234</span>
                            </li>
                            <li>
                                International<span className="pull-right">$652</span>
                            </li>
                        </ul>
                        <hr/>
                            <p className="mar-b-50">
                                Grand Total<span className="pull-right">$9531</span>
                            </p>
                            <br/>
                                <button className="btn btn-dark btn-block btn-md" type="submit">Update Cart</button>
                                <button className="btn btn-color btn-block btn-md" type="submit">Proceed To Checkout</button>
                </div>
            </div>
        );
    }
}
