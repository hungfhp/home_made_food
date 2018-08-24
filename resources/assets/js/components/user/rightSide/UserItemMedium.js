import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class FormShow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let user = this.props.user;
        let title = this.props.title;
        return (
            <div id="tab-profile" className="my-address contact-2 widget">
                <h3 className="heading font-size-20 color-red-black">{title}</h3>
                <form action="#" encType="multipart/form-data">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="form-group name">
                                <div className="margin-left-15 color-red-black"><i className="fa fa-user"></i> <Link to={"/users/"+user.id}>{user.name}</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <div className="form-group subject">
                                <div className="margin-left-15"><i className="fa fa-phone"></i> {user.phone}</div>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <div className="form-group number">
                                <div className="margin-left-15"><i className="fa fa-envelope-open"></i> {user.email}</div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group email">
                                <div className="margin-left-15"><i className="fa fa-map-marker"></i> {user.address}</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
