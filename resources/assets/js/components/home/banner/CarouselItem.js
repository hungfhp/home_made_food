import React, { Component } from "react";

export default class CarouselItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // image_url: this.props.image_url
        };
    }
    render() {
        return (
            <div className={"carousel-item " + this.props.slide.status}>
                <img
                    className="d-block w-100"
                    src={this.props.slide.img_src}
                    alt="banner-1"
                />
                <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                    <div className="carousel-content container">
                        <div className="text-center">
                            <h1 data-animation="animated fadeInDown delay-05s">
                                {this.props.slide.contents[0].text}
                            </h1>
                            <p data-animation="animated fadeInUp delay-10s">
                                {this.props.slide.contents[1].text}
                            </p>
                            <a
                                data-animation="animated fadeInUp delay-10s"
                                href={this.props.slide.buttons[0].link_to}
                                className="btn btn-lg btn-round btn-theme"
                            >
                                {this.props.slide.buttons[0].text}
                            </a>
                            <a
                                data-animation="animated fadeInUp delay-12s"
                                href={this.props.slide.buttons[1].link_to}
                                className="btn btn-lg btn-round btn-white-lg-outline"
                            >
                                {this.props.slide.buttons[1].text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
