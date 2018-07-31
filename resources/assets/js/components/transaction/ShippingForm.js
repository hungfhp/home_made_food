import React, { Component } from "react";

export default class ShippingForm extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="heading-2">
                    <h4>Shipping Address</h4>
                </div>
                <form action="#" method="GET" enctype="multipart/form-data">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Company Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Address"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Town / City"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="State / Country"/>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Post Code"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
