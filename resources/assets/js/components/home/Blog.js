import React, { Component } from "react";

export default class Blog extends Component {
    render() {
        return (
            <div className="blog-2 content-area-2">
                <div className="container">
                    <div className="main-title">
                        <h1>Blog</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 wow fadeInLeft delay-04s">
                            <div className="row blog-list">
                                <div className="col-lg-5 col-md-12 col-pad ">
                                    <div className="photo">
                                        <img
                                            src="/img/blog/blog-6.jpg"
                                            alt="blog-4"
                                            className="img-fluid fit-cover h-100"
                                        />
                                        <div className="date-box">
                                            <h5>03</h5>
                                            <h5>May</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-pad align-self-center">
                                    <div className="detail">
                                        <h3>
                                            <a href="blog-single-sidebar-right.html">
                                                Buying a Home
                                            </a>
                                        </h3>
                                        <div className="post-meta">
                                            <span>
                                                <a href="#">
                                                    <i className="fa fa-user" />John
                                                    Antony
                                                </a>
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i className="fa fa-clock-o" />7
                                                    Comment
                                                </a>
                                            </span>
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInRight delay-04s">
                            <div className="row blog-list">
                                <div className="col-lg-5 col-md-12 col-pad ">
                                    <div className="photo">
                                        <img
                                            src="/img/blog/blog-5.jpg"
                                            alt="blog-5"
                                            className="img-fluid fit-cover h-100"
                                        />
                                        <div className="date-box">
                                            <h5>03</h5>
                                            <h5>May</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-pad align-self-center">
                                    <div className="detail">
                                        <h3>
                                            <a href="blog-single-sidebar-right.html">
                                                Selling Your Home
                                            </a>
                                        </h3>
                                        <div className="post-meta">
                                            <span>
                                                <a href="#">
                                                    <i className="fa fa-user" />John
                                                    Antony
                                                </a>
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i className="fa fa-clock-o" />7
                                                    Comment
                                                </a>
                                            </span>
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
