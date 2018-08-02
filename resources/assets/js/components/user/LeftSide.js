import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
        this.handleChangeTab = this.handleChangeTab.bind(this);
    }
    componentWillMount() {
    }
    handleChangeTab(tab) {
        this.props.switchRightSide(tab);
    }
    render() {
        return (
            <div className="user-profile-box mrb">
                <div className="header clearfix">
                    <h2>{this.props.user.name}</h2>
                    <h4>{this.props.user.email}</h4>
                    <img src={this.props.user.avatar} alt="avatar" className="img-fluid profile-img" />
                </div>
                <div className="detail clearfix">
                    <ul>
                        <li>
                            <a href ="#profile" onClick={() => this.handleChangeTab("profile")} className="profile leftside-active">
                                <i className="flaticon-user"></i>Profile
                            </a>
                        </li>
                        <li>
                            <a href ="#cooked-foods" onClick={() => this.handleChangeTab("cooked-foods")} className="cooked-foods leftside-active">
                                <i className="flaticon-house"></i>Cooked Foods
                            </a>
                        </li>
                        <li>
                            <a href ="#favorited-foods" onClick={() => this.handleChangeTab("favorited-foods")} className="favorited-foods leftside-active">
                                <i className="flaticon-heart-shape-outline"></i>Favorited Foods
                            </a>
                        </li>
                        <li>
                            <a href ="#liked-foods" onClick={() => this.handleChangeTab("liked-foods")} className="liked-foods leftside-active">
                                <i className="fa fa-thumbs-o-up"></i>Liked Foods
                            </a>
                        </li>
                        <li>
                            <a href ="#certificate" onClick={() => this.handleChangeTab("certificate")} className="certificate leftside-active">
                                <i className="flaticon-draw-check-mark"></i>Certificate
                            </a>
                        </li>
                        <li>
                            <a href ="#change-password" onClick={() => this.handleChangeTab("change-password")} className="change-password" >
                                <i className="flaticon-locked-padlock"></i>Change Password
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
