import React, { Component } from "react";

export default class TransactionDetailTabDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.updateTransactionToShipping = this.updateTransactionToShipping.bind(this);
        this.updateTransactionToDone = this.updateTransactionToDone.bind(this);
        this.updateTransactionToCancel = this.updateTransactionToCancel.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    updateTransactionToShipping() {
        this.props.updateTransaction({...this.props.transaction, shipper_id: this.props.auth.user.id, status: "shipping"});
    }
    updateTransactionToDone() {
        this.props.updateTransaction({...this.props.transaction, status:"done"});
    }
    updateTransactionToCancel() {
        this.props.updateTransaction({...this.props.transaction, status:"cancel"});
    }

    render() {
        let auth = this.props.auth;
        let transaction =  this.props.transaction;
        let is_my_shipping_transaction =  this.props.is_my_shipping_transaction;

        return (
            <div className="tab-pane fade active show" id="one" role="tabpanel" aria-labelledby="one-tab">
                {/* <h3 className="heading">Description</h3> */}
                <p>{transaction.description}</p>

                <div className="property-details mb-60">
                    {/* <h3 className="heading">Property Details</h3> */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <ul>
                                <li>
                                    <b><i className="fa fa-map-marker custom"></i> Ship from: </b>{transaction.address_from || transaction.cooker && transaction.cooker.address}
                                </li>
                                <li>
                                    <b><i className="fa fa-location-arrow custom"></i> 2 km</b>
                                </li>
                                <li>
                                    <b><i className="fa fa-map-marker custom"></i> Ship to: </b> {transaction.address_to || transaction.requirer && transaction.requirer.address }
                                </li>
                                {
                                    transaction.status == "dealed" && 
                                    <button className="btn btn-read-more cursor-pointer" 
                                        style={{backgroundColor: "#0d5804d9", fontWeight: 700, color: "aliceblue"}} 
                                        onClick={this.updateTransactionToShipping}>
                                        Ship now
                                    </button>
                                }
                                {transaction.status == "shipping" && is_my_shipping_transaction && <b>Shipping: </b> }
                                {transaction.status == "shipping" && is_my_shipping_transaction && 
                                    <button className="btn btn-sm btn-success btn-read-more cursor-pointer" 
                                        style={{fontWeight: 700, color: "aliceblue", marginRight: "5px", padding: "1px 13px"}}
                                        onClick={this.updateTransactionToDone}>
                                        Done
                                    </button>
                                }
                                {transaction.status == "shipping" && is_my_shipping_transaction && 
                                    <button className="btn btn-sm btn-warning btn-read-more cursor-pointer" 
                                    style={{fontWeight: 700, color: "aliceblue", padding: "1px 13px"}}
                                    onClick={this.updateTransactionToCancel}>
                                    Cancel
                                    </button> 
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )                                
    }
}
