import React, { Component } from "react";
import CarouselItem from "./banner/CarouselItem";

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    status: "active",
                    img_src: "/img/banner-3.jpg",
                    contents: [
                        {
                            text: "We love make things <br />amazing and simple"
                        },
                        {
                            text:
                                "This is real estate website template based on Bootstrap 4 framework."
                        }
                    ],
                    buttons: [
                        {
                            text: "Get Started Now",
                            link_to: "/categories"
                        },
                        {
                            text: "Free Download",
                            link_to: "/categories"
                        }
                    ]
                },
                {
                    status: "",
                    img_src: "/img/banner-3.jpg",
                    contents: [
                        {
                            text: "We love make things <br />amazing and simple"
                        },
                        {
                            text:
                                "This is real estate website template based on Bootstrap 4 framework."
                        }
                    ],
                    buttons: [
                        {
                            text: "Get Started Now",
                            link_to: "/categories"
                        },
                        {
                            text: "Free Download",
                            link_to: "/categories"
                        }
                    ]
                },
                {
                    status: "",
                    img_src: "/img/banner-3.jpg",
                    contents: [
                        {
                            text: "We love make things <br />amazing and simple"
                        },
                        {
                            text:
                                "This is real estate website template based on Bootstrap 4 framework."
                        }
                    ],
                    buttons: [
                        {
                            text: "Get Started Now",
                            link_to: "/categories"
                        },
                        {
                            text: "Free Download",
                            link_to: "/categories"
                        }
                    ]
                }
            ]
        };
    }
    render() {
        return (
            // index 6
            <div className="banner" id="banner">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner banner-max-height">
                        <CarouselItem slide={this.state.slides[0]} />
                        <CarouselItem slide={this.state.slides[1]} />
                        <CarouselItem slide={this.state.slides[2]} />
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
