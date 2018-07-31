import React, { Component } from "react";

export default class Food extends Component {
    render() {
        return (
            <div
                className="modal property-modal fade"
                id="propertyModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="propertyModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="propertyModalLabel">
                                Find Your Dream Properties
                            </h5>
                            <p>123 Kathal St. Tampa City,</p>
                            <span className="ratings">
                                <i
                                    className="fa fa-star s1 active"
                                    data-score="1"
                                />
                                <i
                                    className="fa fa-star s2 active"
                                    data-score="2"
                                />
                                <i
                                    className="fa fa-star s3 active"
                                    data-score="3"
                                />
                                <i
                                    className="fa fa-star s4 active"
                                    data-score="4"
                                />
                                <i
                                    className="fa fa-star s5 active"
                                    data-score="5"
                                />
                            </span>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 modal-left">
                                    <div className="modal-left-content">
                                        <div
                                            id="modalCarousel"
                                            className="carousel slide"
                                            data-ride="carousel"
                                        >
                                            <div
                                                className="carousel-inner"
                                                role="listbox"
                                            >
                                                <div className="carousel-item active">
                                                    <iframe
                                                        className="modalIframe"
                                                        src="https://www.youtube.com/embed/5e0LxrLSzok"
                                                        allowFullScreen
                                                    />
                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        src="/img/property-1.jpg"
                                                        alt="Test ALT"
                                                    />
                                                </div>
                                                <div className="carousel-item">
                                                    <img
                                                        src="/img/property-1.jpg"
                                                        alt="Test ALT"
                                                    />
                                                </div>
                                            </div>
                                            <a
                                                className="control control-prev"
                                                href="#modalCarousel"
                                                role="button"
                                                data-slide="prev"
                                            >
                                                <i className="fa fa-angle-left" />
                                            </a>
                                            <a
                                                className="control control-next"
                                                href="#modalCarousel"
                                                role="button"
                                                data-slide="next"
                                            >
                                                <i className="fa fa-angle-right" />
                                            </a>
                                        </div>
                                        <div className="description">
                                            <h3>Description</h3>
                                            <p>
                                                Curabitur odio nibh, luctus non
                                                pulvinar a, ultricies ac diam.
                                                Donec neque massa, viverra
                                                interdum eros ut, imperdiet
                                                pellentesque mauris. Proin sit
                                                amet scelerisque risus. Donec
                                                semper semper erat ut mollis.
                                                Curabitur suscipit, justo eu
                                                dignissim lacinia, ante sapien
                                                pharetra duin consectetur eros
                                                augue sed ex. Donec a odio
                                                rutrum,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 modal-right">
                                    <div className="modal-right-content bg-white">
                                        <strong className="price">
                                            $178,000
                                        </strong>
                                        <section>
                                            <h3>Features</h3>
                                            <ul className="bullets">
                                                <li>
                                                    <i className="flaticon-bed" />{" "}
                                                    Double Bed
                                                </li>
                                                <li>
                                                    <i className="flaticon-swimmer" />{" "}
                                                    Swimming Pool
                                                </li>
                                                <li>
                                                    <i className="flaticon-bath" />{" "}
                                                    2 Bathroom
                                                </li>
                                                <li>
                                                    <i className="flaticon-car-repair" />{" "}
                                                    Garage
                                                </li>
                                                <li>
                                                    <i className="flaticon-parking" />{" "}
                                                    Parking
                                                </li>
                                                <li>
                                                    <i className="flaticon-theatre-masks" />{" "}
                                                    Home Theater
                                                </li>
                                                <li>
                                                    <i className="flaticon-old-typical-phone" />{" "}
                                                    Telephone
                                                </li>
                                                <li>
                                                    <i className="flaticon-green-park-city-space" />{" "}
                                                    Private space
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h3>Overview</h3>
                                            <dl>
                                                <dt>Area</dt>
                                                <dd>2500 Sq Ft:3400</dd>
                                                <dt>Condition</dt>
                                                <dd>New</dd>
                                                <dt>Year</dt>
                                                <dd>2018</dd>
                                                <dt>Price</dt>
                                                <dd>$178,000</dd>
                                            </dl>
                                        </section>
                                        <section>
                                            <h3>Last Review</h3>
                                            <div
                                                className="ratings"
                                                data-rating="5"
                                            >
                                                <span>
                                                    <i
                                                        className="fa fa-star s1 active"
                                                        data-score="1"
                                                    />
                                                    <i
                                                        className="fa fa-star s2 active"
                                                        data-score="2"
                                                    />
                                                    <i
                                                        className="fa fa-star s3 active"
                                                        data-score="3"
                                                    />
                                                    <i
                                                        className="fa fa-star s4 active"
                                                        data-score="4"
                                                    />
                                                    <i
                                                        className="fa fa-star s5 active"
                                                        data-score="5"
                                                    />
                                                </span>
                                            </div>
                                            <p>
                                                Curabitur odio nibh, luctus non
                                                pulvinar a, ultricies ac diam.
                                                Donec neque massa, viverra
                                                interdum
                                            </p>
                                        </section>
                                        <a
                                            href="properties-details.html"
                                            className="btn btn-black"
                                        >
                                            Show Detail
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
