import React, { Component } from "react";

export default class Index extends Component {
    render() {
        return (
            // viet luon lay tu file nao
            // index 5 kha' dep.
            <div className="banner" id="banner">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner banner-max-height">
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100"
                                src="img/banner-3.jpg"
                                alt="banner-1"
                            />
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                                <div className="carousel-content container">
                                    <div className="text-center">
                                        <h1 data-animation="animated fadeInDown delay-05s">
                                            We love make things <br />amazing
                                            and simple
                                        </h1>
                                        <p data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template
                                            based on Bootstrap 4 framework.
                                        </p>
                                        <a
                                            data-animation="animated fadeInUp delay-10s"
                                            href="#"
                                            className="btn btn-lg btn-round btn-theme"
                                        >
                                            Get Started Now
                                        </a>
                                        <a
                                            data-animation="animated fadeInUp delay-12s"
                                            href="#"
                                            className="btn btn-lg btn-round btn-white-lg-outline"
                                        >
                                            Free Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="img/banner-3.jpg"
                                alt="banner-2"
                            />
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                                <div className="carousel-content container">
                                    <div className="text-center">
                                        <h1 data-animation="animated fadeInDown delay-05s">
                                            Find Your <br /> Dream Properties
                                        </h1>
                                        <p data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template
                                            based on Bootstrap 4 framework.
                                        </p>
                                        <a
                                            data-animation="animated fadeInUp delay-10s"
                                            href="#"
                                            className="btn btn-lg btn-round btn-theme"
                                        >
                                            Get Started Now
                                        </a>
                                        <a
                                            data-animation="animated fadeInUp delay-12s"
                                            href="#"
                                            className="btn btn-lg btn-round btn-white-lg-outline"
                                        >
                                            Free Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="img/banner-3.jpg"
                                alt="banner-3"
                            />
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                                <div className="carousel-content container">
                                    <div className="text-center">
                                        <h1 data-animation="animated fadeInUp delay-05s">
                                            Best Place For <br /> Sell
                                            Properties
                                        </h1>
                                        <p data-animation="animated fadeInUp delay-10s">
                                            This is real estate website template
                                            based on Bootstrap 4 framework.
                                        </p>
                                        <a
                                            data-animation="animated fadeInUp delay-10s"
                                            href="#"
                                            className="btn btn-lg btn-round btn-theme"
                                        >
                                            Get Started Now
                                        </a>
                                        <a
                                            data-animation="animated fadeInUp delay-12s"
                                            href="#"
                                            className="btn btn-lg btn-round btn-white-lg-outline"
                                        >
                                            Free Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="slider-mover-left" aria-hidden="true">
                            <i className="fa fa-angle-left" />
                        </span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span className="slider-mover-right" aria-hidden="true">
                            <i className="fa fa-angle-right" />
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}
