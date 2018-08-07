import React, { Component } from "react";

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
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
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
                            <a href ="#user-page" onClick={() => this.handleChangeTab("profile")} className="profile leftside-active">
                                <i className="flaticon-user"></i>Profile
                            </a>
                        </li>
                        <li>
                            <a href ="#user-page" onClick={() => this.handleChangeTab("cooked-foods")} className="cooked-foods leftside-active">
                                <i className="flaticon-house"></i>Cooked Foods
                            </a>
                        </li>
                        <li>
                            <a href ="#user-page" onClick={() => this.handleChangeTab("favorited-foods")} className="favorited-foods leftside-active">
                                <i className="flaticon-heart-shape-outline"></i>Favorited Foods
                            </a>
                        </li>
                        <li>
                            <a href ="#user-page" onClick={() => this.handleChangeTab("liked-foods")} className="liked-foods leftside-active">
                                <i className="fa fa-thumbs-o-up"></i>Liked Foods
                            </a>
                        </li>
                        <TabCertificate is_my_profile={this.props.is_my_profile} handleChangeTab={this.handleChangeTab} />
                        <TabChangePassword is_my_profile={this.props.is_my_profile} handleChangeTab={this.handleChangeTab} />
                    </ul>
                </div>
            </div>
        )
    }
}


class TabCertificate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.is_my_profile) {
            return (
                <li>
                    <a href ="#user-page" onClick={() => this.props.handleChangeTab("certificate")} className="certificate leftside-active">
                        <i className="flaticon-draw-check-mark"></i>Certificate
                    </a>
                </li>
            )
        } else {
            return null;
        }
    }
}
class TabChangePassword extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.is_my_profile) {
            return (
                <li>
                <a href ="#user-page" onClick={() => this.props.handleChangeTab("change-password")} className="change-password" >
                    <i className="flaticon-locked-padlock"></i>Change Password
                </a>
            </li>
            )
        } else {
            return null;
        }
    }
}