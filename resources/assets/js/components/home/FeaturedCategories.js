import React, { Component } from "react";

export default class FeaturedCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    renderTitle(active, title, data_filter) {
        return (
            <li
                className={"btn btn-inline filtr-button filtr " + active}
                data-filter={data_filter}
            >
                {title}
            </li>
        );
    }
    render() {
        return (
            <div className="featured-properties content-area-2">
                <div className="container">
                    <div className="main-title">
                        <h1>Featured Properties</h1>
                    </div>
                    <ul className="list-inline-listing filters filteriz-navigation">
                        {this.renderTitle("active", "All", "all")}
                        {this.renderTitle("", "Apartment", "1")}
                        {this.renderTitle("", "House", "2")}
                        {this.renderTitle("", "Office", "3")}
                    </ul>
                    <div className="row filter-portfolio">
                        <div className="cars">
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="3"
                            >
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <div className="tag button alt featured">
                                                Featured
                                            </div>
                                            <div className="price-ratings-box">
                                                <p className="price">
                                                    $178,000
                                                </p>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                </div>
                                            </div>
                                            <img
                                                src="/img/property-7.jpg"
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
                                                    href="/img/property-7.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="/img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="/img/property-3.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">
                                                Relaxing Apartment
                                            </a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps" />123
                                                Kathal St. Tampa City,
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-bed" /> 3
                                                Bedrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-bath" />{" "}
                                                2 Bathrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-square-layouting-with-black-square-in-east-area" />{" "}
                                                Sq Ft:3400
                                            </li>
                                            <li>
                                                <i className="flaticon-car-repair" />{" "}
                                                1 Garage
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer">
                                        <a href="#">
                                            <i className="fa fa-user" /> Jhon
                                            Doe
                                        </a>
                                        <span>
                                            <i className="fa fa-calendar-o" /> 2
                                            years ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="3, 2, 1"
                            >
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <div className="tag button alt featured">
                                                Featured
                                            </div>
                                            <div className="price-ratings-box">
                                                <p className="price">
                                                    $178,000
                                                </p>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                </div>
                                            </div>
                                            <img
                                                src="/img/property-2.jpg"
                                                alt="property-2"
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
                                                    href="/img/property-2.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="/img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="/img/property-3.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">
                                                Modern Family Home
                                            </a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps" />123
                                                Kathal St. Tampa City,
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-bed" /> 3
                                                Bedrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-bath" />{" "}
                                                2 Bathrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-square-layouting-with-black-square-in-east-area" />{" "}
                                                Sq Ft:3400
                                            </li>
                                            <li>
                                                <i className="flaticon-car-repair" />{" "}
                                                1 Garage
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer">
                                        <a href="#">
                                            <i className="fa fa-user" /> Jhon
                                            Doe
                                        </a>
                                        <span>
                                            <i className="fa fa-calendar-o" /> 2
                                            years ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="1, 2"
                            >
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <div className="tag button alt featured">
                                                Featured
                                            </div>
                                            <div className="price-ratings-box">
                                                <p className="price">
                                                    $178,000
                                                </p>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                </div>
                                            </div>
                                            <img
                                                src="/img/property-3.jpg"
                                                alt="property-3"
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
                                                    href="/img/property-3.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="/img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="/img/property-1.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">
                                                Beautiful Single Home
                                            </a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps" />123
                                                Kathal St. Tampa City,
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-bed" /> 3
                                                Bedrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-bath" />{" "}
                                                2 Bathrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-square-layouting-with-black-square-in-east-area" />{" "}
                                                Sq Ft:3400
                                            </li>
                                            <li>
                                                <i className="flaticon-car-repair" />{" "}
                                                1 Garage
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer">
                                        <a href="#">
                                            <i className="fa fa-user" /> Jhon
                                            Doe
                                        </a>
                                        <span>
                                            <i className="fa fa-calendar-o" /> 2
                                            years ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="3, 2"
                            >
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <div className="tag button alt featured">
                                                Featured
                                            </div>
                                            <div className="price-ratings-box">
                                                <p className="price">
                                                    $178,000
                                                </p>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                </div>
                                            </div>
                                            <img
                                                src="/img/property-5.jpg"
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
                                                    href="/img/property-5.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="/img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="/img/property-3.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">
                                                Real Luxury Villa
                                            </a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps" />123
                                                Kathal St. Tampa City,
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-bed" /> 3
                                                Bedrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-bath" />{" "}
                                                2 Bathrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-square-layouting-with-black-square-in-east-area" />{" "}
                                                Sq Ft:3400
                                            </li>
                                            <li>
                                                <i className="flaticon-car-repair" />{" "}
                                                1 Garage
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer">
                                        <a href="#">
                                            <i className="fa fa-user" /> Jhon
                                            Doe
                                        </a>
                                        <span>
                                            <i className="fa fa-calendar-o" /> 2
                                            years ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="2, 1"
                            >
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <div className="tag button alt featured">
                                                Featured
                                            </div>
                                            <div className="price-ratings-box">
                                                <p className="price">
                                                    $178,000
                                                </p>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                </div>
                                            </div>
                                            <img
                                                src="/img/property-6.jpg"
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
                                                    href="/img/property-6.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="/img/property-2.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="/img/property-3.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">
                                                Masons Villas
                                            </a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps" />123
                                                Kathal St. Tampa City,
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-bed" /> 3
                                                Bedrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-bath" />{" "}
                                                2 Bathrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-square-layouting-with-black-square-in-east-area" />{" "}
                                                Sq Ft:3400
                                            </li>
                                            <li>
                                                <i className="flaticon-square-layouting-with-black-square-in-east-area" />{" "}
                                                1 Garage
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer">
                                        <a href="#">
                                            <i className="fa fa-user" /> Jhon
                                            Doe
                                        </a>
                                        <span>
                                            <i className="fa fa-calendar-o" /> 2
                                            years ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 filtr-item"
                                data-category="3, 1, 2"
                            >
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a
                                            href="properties-details.html"
                                            className="property-img"
                                        >
                                            <div className="tag button alt featured">
                                                Featured
                                            </div>
                                            <div className="price-ratings-box">
                                                <p className="price">
                                                    $178,000
                                                </p>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o" />
                                                </div>
                                            </div>
                                            <img
                                                src="/img/property-1.jpg"
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
                                                    href="/img/property-1.jpg"
                                                    className="overlay-link"
                                                >
                                                    <i className="fa fa-expand" />
                                                </a>
                                                <a
                                                    href="/img/property-6.jpg"
                                                    className="hidden"
                                                />
                                                <a
                                                    href="/img/property-3.jpg"
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="properties-details.html">
                                                Sweet Family Home
                                            </a>
                                        </h1>
                                        <div className="location">
                                            <a href="properties-details.html">
                                                <i className="flaticon-facebook-placeholder-for-locate-places-on-maps" />123
                                                Kathal St. Tampa City,
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-bed" /> 3
                                                Bedrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-bath" />{" "}
                                                2 Bathrooms
                                            </li>
                                            <li>
                                                <i className="flaticon-square-layouting-with-black-square-in-east-area" />{" "}
                                                Sq Ft:3400
                                            </li>
                                            <li>
                                                <i className="flaticon-square-layouting-with-black-square-in-east-area" />{" "}
                                                1 Garage
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer">
                                        <a href="#">
                                            <i className="fa fa-user" /> Jhon
                                            Doe
                                        </a>
                                        <span>
                                            <i className="fa fa-calendar-o" /> 2
                                            years ago
                                        </span>
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
