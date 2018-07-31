import React, { Component } from "react";

export default class User extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="user-profile-box mrb">
                    <div className="header clearfix">
                        <h2>Emma Connor</h2>
                        <h4>Creative Director</h4>
                        <img src="/img/ava.png" alt="avatar" className="img-fluid profile-img"/>
                    </div>
                    <div className="detail clearfix">
                        <ul>
                            <li>
                                <a href="user-profile.html">
                                    <i className="flaticon-user"></i>Profile
                                </a>
                            </li>
                            <li>
                                <a href="my-properties.html">
                                    <i className="flaticon-house"></i>My Properties
                                </a>
                            </li>
                            <li>
                                <a href="favorited-properties.html" className="active">
                                    <i className="flaticon-heart-shape-outline"></i>Favorited Properties
                                </a>
                            </li>
                            <li>
                                <a href="submit-property.html">
                                    <i className="flaticon-add"></i>Submit New Property
                                </a>
                            </li>
                            <li>
                                <a href="change-password.html">
                                    <i className="flaticon-locked-padlock"></i>Change Password
                                </a>
                            </li>
                            <li>
                                <a href="index.html">
                                    <i className="flaticon-logout"></i>Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
