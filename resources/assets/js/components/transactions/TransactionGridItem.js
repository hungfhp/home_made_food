import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class TransactionGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="blog-grid-box">
                    <img className="blog-theme img-fluid" src="/img/property-10.jpg" alt="property-10"/>
                    <div className="detail">
                        <div className="date-box">
                            <h5>03</h5>
                            <h5>May</h5>
                        </div>
                        <h3>
                            <a href="blog-single-sidebar-right.html">Buying a Home</a>
                        </h3>
                        <div className="post-meta">
                            <span><a href="#"><i className="fa fa-user"></i>John Antony</a></span>
                            <span><a href="#"><i className="fa fa-commenting-o"></i>24 Comment</a></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus,</p>
                        <a href="blog-single-sidebar-right.html" className="btn-read-more">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}