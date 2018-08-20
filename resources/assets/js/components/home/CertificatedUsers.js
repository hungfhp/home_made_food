import React, { Component } from "react";

export default class CertificatedUsers extends Component {
    render() {
        return (
            <div
                className="testimonial overview-bgi wow fadeInUp delay-04s"
                style={{
                    backgroundImage: "url(/img/testimonial-property-2.jpg)"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="testimonial-inner">
                                <header className="testimonia-header">
                                    <h1>Testimonial</h1>
                                </header>
                                <div
                                    id="carouselExampleIndicators2"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselExampleIndicators2"
                                            data-slide-to="0"
                                            className="active"
                                        />
                                        <li
                                            data-target="#carouselExampleIndicators2"
                                            data-slide-to="1"
                                        />
                                        <li
                                            data-target="#carouselExampleIndicators2"
                                            data-slide-to="2"
                                        />
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="avatar">
                                                <img
                                                    src="/img/avatar/avatar.jpg"
                                                    alt="avatar"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </div>
                                            <p className="lead">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat.
                                            </p>
                                            <div className="author-name">
                                                Martin Smith
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="avatar">
                                                <img
                                                    src="/img/avatar/avatar-2.jpg"
                                                    alt="avatar-2"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </div>
                                            <p className="lead">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat.
                                            </p>
                                            <div className="author-name">
                                                Emma Connor
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="avatar">
                                                <img
                                                    src="/img/avatar/avatar-3.jpg"
                                                    alt="avatar-3"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </div>
                                            <p className="lead">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat.
                                            </p>
                                            <div className="author-name">
                                                John Antony
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
