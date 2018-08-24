import React, { Component } from "react";
import {Link} from "react-router-dom";

import TransactionsListSmall from "../transactions/TransactionsListSmall";
import DealsListSmall from "../deals/DealsListSmall";
import SearchArea from "@/components/home/SearchArea";

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
        let deals_newest = this.props.deals_newest;
        let transactions_recent = this.props.transactions_recent;
        this.props.transactions_recent.data.length ? transactions_recent.data = this.props.transactions_recent.data.slice(0,3) : transactions_recent.data={};
        
        return (
            <div className="sidebar mbl">
                <div className="widget search-box">
                    <h5 className="sidebar-title">Search</h5>
                    <form className="form-search" method="GET">
                        {/* <input type="text" className="form-control" placeholder="Search"/> */}
                        {/* <button type="submit" className="btn"><i className="fa fa-search"></i></button> */}
                        <SearchArea />
                    </form>
                </div>

                <div className="widget recent-posts">
                    <h5 className="sidebar-title">For You</h5>
                    <TransactionsListSmall transactions={transactions_recent} />
                </div>

                {/* <div className="widget tags clearfix">
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
                </div> */}

                <div className="widget recent-comments">
                    <h5 className="sidebar-title">New discussion</h5>
                    <DealsListSmall deals={deals_newest} />
                </div>

                {/* <div className="widget latest-tweet">
                    <h5 className="sidebar-title">Latest Tweet</h5>
                    <p><a href="#">Lorem Ipsum is simply</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text,</p>
                    <p>@Lorem ipsum dolor<a href="#">sit amet, consectetur</a> adipiscing elit. Aenean id dignissim justo. Maecenas urna lacus,</p>
                </div> */}
            </div>
        );
    }
}