import React, { Component } from "react";

export default class FeaturedCategories extends Component {
    render() {
        return (
            <div className="featured-properties content-area-2">
                <div className="container">
                    <div className="main-title">
                        <h1>Featured Properties</h1>
                    </div>
                    <ul className="list-inline-listing filters filteriz-navigation">
                        <li
                            className="active btn filtr-button filtr"
                            data-filter="all"
                        >
                            All
                        </li>
                        <li
                            data-filter="1"
                            className="btn btn-inline filtr-button filtr"
                        >
                            Audi
                        </li>
                        <li
                            data-filter="2"
                            className="btn btn-inline filtr-button filtr"
                        >
                            Mercedes
                        </li>
                        <li
                            data-filter="3"
                            className="btn btn-inline filtr-button filtr"
                        >
                            Ferrari
                        </li>
                    </ul>
                    <div className="row filter-portfolio">
                        <div className="">
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="3"
                            >
                                <div className="property-box-4">
                                    {/* <d!-- Property Img --> */}
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <img
                                                src="img/property-1.jpg"
                                                alt="property-1"
                                                className="img-fluid"
                                            />
                                        </a>
                                        <div className="property-overlay">
                                            <a
                                                href="properties-details.html"
                                                className="overlay-link"
                                            >
                                                <i className="fa fa-link" />
                                            </a>
                                            <a
                                                className="overlay-link property-video"
                                                title="Test Title"
                                            >
                                                <i className="fa fa-video-camera" />
                                            </a>
                                            <div className="property-magnify-gallery">
                                                <a
                                                    href="img/property-1.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="img/property-4.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="pull-left">
                                                <a href="properties-details.html">
                                                    Masons Villas
                                                </a>
                                            </div>
                                            <div className="pull-right price">
                                                $320.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="3, 2, 1"
                            >
                                <div className="property-box-4">
                                    {/* <!-- Property Img --> */}
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <img
                                                src="img/property-5.jpg"
                                                alt="property-5"
                                                className="img-fluid"
                                            />
                                        </a>
                                        <div className="property-overlay">
                                            <a
                                                href="properties-details.html"
                                                className="overlay-link"
                                            >
                                                <i className="fa fa-link" />
                                            </a>
                                            <a
                                                className="overlay-link property-video"
                                                title="Test Title"
                                            >
                                                <i className="fa fa-video-camera" />
                                            </a>
                                            <div className="property-magnify-gallery">
                                                <a
                                                    href="img/property-5.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="img/property-4.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="pull-left">
                                                <a href="properties-details.html">
                                                    Modern Family Home
                                                </a>
                                            </div>
                                            <div className="pull-right price">
                                                $320.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="1, 2"
                            >
                                <div className="property-box-4">
                                    {/* <!-- Property Img --> */}
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <img
                                                src="img/property-7.jpg"
                                                alt="property-7"
                                                className="img-fluid"
                                            />
                                        </a>
                                        <div className="property-overlay">
                                            <a
                                                href="properties-details.html"
                                                className="overlay-link"
                                            >
                                                <i className="fa fa-link" />
                                            </a>
                                            <a
                                                className="overlay-link property-video"
                                                title="Test Title"
                                            >
                                                <i className="fa fa-video-camera" />
                                            </a>
                                            <div className="property-magnify-gallery">
                                                <a
                                                    href="img/property-7.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="img/property-4.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="pull-left">
                                                <a href="properties-details.html">
                                                    Real Luxury Villa
                                                </a>
                                            </div>
                                            <div className="pull-right price">
                                                $320.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="3, 2"
                            >
                                <div className="property-box-4">
                                    {/* <!-- Property Img --> */}
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <img
                                                src="img/property-4.jpg"
                                                alt="property-4"
                                                className="img-fluid"
                                            />
                                        </a>
                                        <div className="property-overlay">
                                            <a
                                                href="properties-details.html"
                                                className="overlay-link"
                                            >
                                                <i className="fa fa-link" />
                                            </a>
                                            <a
                                                className="overlay-link property-video"
                                                title="Test Title"
                                            >
                                                <i className="fa fa-video-camera" />
                                            </a>
                                            <div className="property-magnify-gallery">
                                                <a
                                                    href="img/property-4.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="img/property-4.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="pull-left">
                                                <a href="properties-details.html">
                                                    Beautiful Single Home
                                                </a>
                                            </div>
                                            <div className="pull-right price">
                                                $320.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="2, 1"
                            >
                                <div className="property-box-4">
                                    {/* <!-- Property Img --> */}
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <img
                                                src="img/property-9.jpg"
                                                alt="property-9"
                                                className="img-fluid"
                                            />
                                        </a>
                                        <div className="property-overlay">
                                            <a
                                                href="properties-details.html"
                                                className="overlay-link"
                                            >
                                                <i className="fa fa-link" />
                                            </a>
                                            <a
                                                className="overlay-link property-video"
                                                title="Test Title"
                                            >
                                                <i className="fa fa-video-camera" />
                                            </a>
                                            <div className="property-magnify-gallery">
                                                <a
                                                    href="img/property-9.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="img/property-2.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="img/property-4.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="pull-left">
                                                <a href="properties-details.html">
                                                    Relaxing Apartment
                                                </a>
                                            </div>
                                            <div className="pull-right price">
                                                $320.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="3, 1, 2"
                            >
                                <div className="property-box-4">
                                    {/* <!-- Property Img --> */}
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <img
                                                src="img/property-6.jpg"
                                                alt="property-6"
                                                className="img-fluid"
                                            />
                                        </a>
                                        <div className="property-overlay">
                                            <a
                                                href="properties-details.html"
                                                className="overlay-link"
                                            >
                                                <i className="fa fa-link" />
                                            </a>
                                            <a
                                                className="overlay-link property-video"
                                                title="Test Title"
                                            >
                                                <i className="fa fa-video-camera" />
                                            </a>
                                            <div className="property-magnify-gallery">
                                                <a
                                                    href="img/property-6.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="img/property-1.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="img/property-4.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <div className="pull-left">
                                                <a href="properties-details.html">
                                                    Sweet Family Home
                                                </a>
                                            </div>
                                            <div className="pull-right price">
                                                $320.00
                                            </div>
                                        </div>
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
