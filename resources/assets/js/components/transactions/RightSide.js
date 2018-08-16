import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class RightSide extends Component {
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
            <div className="sidebar mbl">
                <div className="widget search-box">
                    <h5 className="sidebar-title">Search</h5>
                    <form className="form-search" method="GET">
                        <input type="text" className="form-control" placeholder="Search"/>
                        <button type="submit" className="btn"><i className="fa fa-search"></i></button>
                    </form>
                </div>

                <div className="widget categories">
                    <h5 className="sidebar-title">Categories</h5>
                    <ul>
                        <li><a href="#">Apartments<span>(12)</span></a></li>
                        <li><a href="#">Houses<span>(8)</span></a></li>
                        <li><a href="#">Family Houses<span>(23)</span></a></li>
                        <li><a href="#">Offices<span>(5)</span></a></li>
                        <li><a href="#">Villas<span>(63)</span></a></li>
                        <li><a href="#">Other<span>(7)</span></a></li>
                    </ul>
                </div>

                <div className="widget recent-posts">
                    <h5 className="sidebar-title">Recent Properties</h5>
                    <div className="media mb-4">
                        <a className="pr-4" href="properties-details.html">
                            <img src="/img/sub-property/sub-property.jpg" alt="sub-property"/>
                        </a>
                        <div className="media-body align-self-center">
                            <h5>
                                <a href="properties-details.html">Beautiful Single Home</a>
                            </h5>
                            <p>February 27, 2018</p>
                            <p> <strong>$245,000</strong></p>
                        </div>
                    </div>
                    <div className="media mb-4">
                        <a className="pr-4" href="properties-details.html">
                            <img src="/img/sub-property/sub-property-2.jpg" alt="sub-property-2"/>
                        </a>
                        <div className="media-body align-self-center">
                            <h5>
                                <a href="properties-details.html">Sweet Family Home</a>
                            </h5>
                            <p>February 27, 2018</p>
                            <p> <strong>$245,000</strong></p>
                        </div>
                    </div>
                    <div className="media">
                        <a className="pr-4" href="properties-details.html">
                            <img src="/img/sub-property/sub-property-3.jpg" alt="sub-property-3"/>
                        </a>
                        <div className="media-body align-self-center">
                            <h5>
                                <a href="properties-details.html">Real Luxury Villa</a>
                            </h5>
                            <p>February 27, 2018</p>
                            <p> <strong>$245,000</strong></p>
                        </div>
                    </div>
                </div>

                <div className="widget tags clearfix">
                    <h5 className="sidebar-title">Tags</h5>
                    <ul className="tags">
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Real Estate</a></li>
                        <li><a href="#">Luxury</a></li>
                        <li><a href="#">Theme</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Outdoor</a></li>
                        <li><a href="#">UI-UX</a></li>
                        <li><a href="#">Buy Website</a></li>
                        <li><a href="#">Villa</a></li>
                        <li><a href="#">Sellers</a></li>
                    </ul>
                </div>

                <div className="widget recent-comments">
                    <h5 className="sidebar-title">Recent comments</h5>
                    <div className="media mb-4">
                        <a className="pr-3" href="#">
                            <img src="/img/avatar/avatar.jpg" className="rounded-circle" alt="avatar"/>
                        </a>
                        <div className="media-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamrisus tortor,</p>
                            <p>By <span>John Doe</span></p>
                        </div>
                    </div>
                    <div className="media">
                        <a className="pr-3" href="#">
                            <img src="/img/avatar/avatar-2.jpg" className="rounded-circle" alt="avatar-2"/>
                        </a>
                        <div className="media-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamrisus tortor,</p>
                            <p>By <span>Karen Paran</span></p>
                        </div>
                    </div>
                </div>

                <div className="widget latest-tweet">
                    <h5 className="sidebar-title">Latest Tweet</h5>
                    <p><a href="#">Lorem Ipsum is simply</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text,</p>
                    <p>@Lorem ipsum dolor<a href="#">sit amet, consectetur</a> adipiscing elit. Aenean id dignissim justo. Maecenas urna lacus,</p>
                </div>
            </div>
        );
    }
}