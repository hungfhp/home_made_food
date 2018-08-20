import React, { Component } from "react";

export default class ChangePassword extends Component {
    render() {
        return (
            <div id="tab-change-password" className="my-address contact-2 widget hdn-mb-30">
                <h3 className="heading">Change Password</h3>
                <form action="#">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="form-group name">
                                <label>Current Password</label>
                                <input type="password" name="current-password" className="form-control" placeholder="Current Password"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group email">
                                <label>New Password</label>
                                <input type="password" name="new-password" className="form-control" placeholder="New Password"/>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <div className="form-group subject">
                                <label>Confirm New Password</label>
                                <input type="password" name="confirm-new-password" className="form-control" placeholder="Confirm New Password"/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="send-btn">
                                <button type="submit" className="btn btn-color btn-md btn-message">Update Password</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
