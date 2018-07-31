import React, { Component } from "react";

export default class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
    }
    render() {
        return (
            <div className="my-address contact-2 widget">
                <h3 className="heading">Update</h3>
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="form-group name">
                            <label>User name</label>
                            <input type="text" defaultValue={this.state.user.name} className="form-control color-default" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group email">
                            <label>Address</label>
                            <input type="text" defaultValue={this.state.user.address} className="form-control color-default" />
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="form-group subject">
                            <label>Phone</label>
                            <input type="text" defaultValue={this.state.user.phone} className="form-control color-default" />
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="form-group number">
                            <label>Email</label>
                            <input type="email" defaultValue={this.state.user.email} className="form-control color-default" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="send-btn">
                            <button type="submit" className="btn btn-color btn-md btn-message">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
