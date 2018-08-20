import React, { Component } from "react";
import CarouselItem from "./banner/CarouselItem";

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    status: "active",
                    img_src: "/img/banner1.jpg",
                    contents: [
                        {
                            text: "We love connecting people"
                        },
                        {
                            text:
                                "To every one can get delecious meals."
                        }
                    ],
                    buttons: [
                        {
                            text: "View your meals",
                            link_to: "/foods"
                        },
                        {
                            text: "Join us",
                            link_to: "/register"
                        }
                    ]
                },
                {
                    status: "",
                    img_src: "/img/banner2.jpg",
                    contents: [
                        {
                            text: "I  want family foods..."
                        },
                        {
                            text:
                                "... I dont want to eat fastfood anymore"
                        }
                    ],
                    buttons: [
                        {
                            text: "View your meals",
                            link_to: "/foods"
                        },
                        {
                            text: "Join us",
                            link_to: "/register"
                        }
                    ]
                },
                {
                    status: "",
                    img_src: "/img/banner3.jpg",
                    contents: [
                        {
                            text: "I like to cook healthy food..."
                        },
                        {
                            text:
                                "... and share them to anyone who want"
                        }
                    ],
                    buttons: [
                        {
                            text: "View your meals",
                            link_to: "/foods"
                        },
                        {
                            text: "Join us",
                            link_to: "/register"
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
