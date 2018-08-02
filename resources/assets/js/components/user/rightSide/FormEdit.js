import React, { Component } from "react";
import axios from "axios";
import swal2 from "sweetalert2";

export default class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
        console.log(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState ({
            user: nextProps.user
        });
    }
    handleChange() {
        $(".js-btn-submit").removeClass("disabled");
        this.setState({
            isChanged: true
        })
    }
    handleSubmit() {
        if (this.state.isChanged) {
            this.state.isChanged = false;
            $(".js-btn-submit").addClass("disabled");
            this.props.handleSubmitUpdate(this.refs.name.value, this.refs.address.value, this.refs.phone.value);
        } else {
            console.log("Please change before update!");
            swal2({
                type: 'warning',
                title: 'Please change before update!',
                showConfirmButton: false,
                heightAuto: true,
                width: "auto",
                timer: 2200
            });
        }
    }
    render() {
        return (
            <div id="profile" className="my-address contact-2 widget">
                <h3 className="heading">Update</h3>
                <form action="javascript:void(0)">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="form-group name">
                            <label>User name</label>
                            <input type="text" ref="name" onChange={this.handleChange} defaultValue={this.props.user.name} className="form-control color-default" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group email">
                            <label>Address</label>
                            <input type="text" ref="address" onChange={this.handleChange} defaultValue={this.props.user.address} className="form-control color-default" />
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="form-group subject">
                            <label>Phone</label>
                            <input type="text" ref="phone" onChange={this.handleChange} defaultValue={this.props.user.phone} className="form-control color-default" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="send-btn">
                            <button type="submit" onClick={this.handleSubmit} className="btn btn-color btn-md btn-message js-btn-submit disabled">Save Changes</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
