import React, { Component } from "react";

export default class PopularCategories extends Component {
    render() {
        return (
            <div className="most-popular-places content-area-3">
                <div className="container">
                    <div className="main-title">
                        <h1>Most Popular Places</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="row">
                                    <div className="col-md-12 col-pad wow fadeInLeft delay-04s">
                                        <div className="overview overview-box">
                                            <img
                                                src="/img/popular-places/popular-places.jpg"
                                                alt="popular-places"
                                            />
                                            <div className="mask">
                                                <h2>New York</h2>
                                                <p>14 Properties</p>
                                                <a
                                                    href="properties-details.html"
                                                    className="btn btn-border"
                                                >
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-pad wow fadeInUp delay-04s">
                                        <div className="overview overview-box">
                                            <img
                                                src="/img/popular-places/popular-places-2.jpg"
                                                alt="popular-places-2"
                                            />
                                            <div className="mask">
                                                <h2>Canada</h2>
                                                <p>25 Properties</p>
                                                <a
                                                    href="properties-details.html"
                                                    className="btn btn-border"
                                                >
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-pad wow fadeInUp delay-04s">
                                        <div className="overview overview-box">
                                            <img
                                                src="/img/popular-places/popular-places-4.jpg"
                                                alt="popular-places-4"
                                            />
                                            <div className="mask">
                                                <h2>California</h2>
                                                <p>12 Properties</p>
                                                <a
                                                    href="properties-details.html"
                                                    className="btn btn-border"
                                                >
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-pad wow fadeInRight delay-04s">
                                <div className="overview aa overview-box">
                                    <img
                                        src="/img/popular-places/popular-places-3.jpg"
                                        alt="popular-places-3"
                                        className="big-img"
                                    />
                                    <div className="mask">
                                        <h2>Florida</h2>
                                        <p>45 Properties</p>
                                        <a
                                            href="properties-details.html"
                                            className="btn btn-border"
                                        >
                                            Read more
                                        </a>
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
