import React, { Component } from "react";
import axios from "axios";

export default class FormShow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="my-address contact-2 widget">
                <h3 className="heading">Info</h3>
                <form action="#" encType="multipart/form-data">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="form-group name">
                                <label>User name</label>
                                <div className="margin-left-15">{this.props.user.name}</div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group email">
                                <label>Address</label>
                                <div className="margin-left-15">{this.props.user.address}</div>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <div className="form-group subject">
                                <label>Phone</label>
                                <div className="margin-left-15">{this.props.user.phone}</div>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <div className="form-group number">
                                <label>Email</label>
                                <div className="margin-left-15">{this.props.user.email}</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
