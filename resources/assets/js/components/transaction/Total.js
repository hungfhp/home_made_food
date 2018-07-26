import React, { Component } from "react";

export default class Total extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="cart-total-box bg-white hdn-mb-30 mb-30">
                    <h5>Transactions Total</h5>
                    <hr/>
                    <ul>
                        <li>
                            Cancel (2)<span className="pull-right">70 000VND</span>
                        </li>
                        <li>
                            Done (3)<span className="pull-right">120 000VND</span>
                        </li>
                        <li>
                            Required (1)<span className="pull-right">30 000VND</span>
                        </li>
                        <li>
                            Cooked (1)<span className="pull-right">25 000VND</span>
                        </li>
                        <li>
                            Shipping (0)<span className="pull-right">0VND</span>
                        </li>
                    </ul>
                    <hr/>
                    <p className="mar-b-50">
                        Total (not include Cancel and Done)<span className="pull-right">55 000VND</span>
                    </p>
                    <br/>

                    <button className="btn btn-dark btn-block btn-md" type="submit">Update Cart</button>
                    <button className="btn btn-color btn-block btn-md" type="submit">Proceed To Checkout</button>
                </div>
            </div>
        );
    }
}
