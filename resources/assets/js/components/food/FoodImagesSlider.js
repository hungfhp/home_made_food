import React, { Component } from "react";
import {convertImageLink} from "@/utils/ConvertUtil"

export default class FoodDetailImagesSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        let images = this.props.images;

        let images_slider = images.map((image, index) => {
            return (
                <div key={image.id} className={index == 1 ? "item carousel-item active" : "item carousel-item"} data-slide-number={index}>
                    <img
                        src={convertImageLink(image.link)}
                        alt={index} style={{width: "700px", height: "400px"}}/>
                </div>
            );
        });

        let carousel_indicator = images.map((image, index) => {
            return (
                <li key={image.id} className={index == 1 ? "list-inline-item active" : "list-inline-item"}>
                    <a id={index} data-slide-to={index} className="selected"
                        data-target="#propertiesDetailsSlider">
                        <img
                            src={convertImageLink(image.link)}
                            alt={index} style={{width: "150px", height: "110px"}}/>
                    </a>
                </li>
            );
        });

        //main return
        return (
            <div id="propertiesDetailsSlider" className="carousel properties-details-sliders slide mb-60">
                <div className="carousel-inner">
                    {images_slider}

                    <a className="carousel-control left" href="#propertiesDetailsSlider" data-slide="prev"><i
                        className="fa fa-angle-left"></i></a>
                    <a className="carousel-control right" href="#propertiesDetailsSlider" data-slide="next"><i
                        className="fa fa-angle-right"></i></a>
                </div>

                <ul className="carousel-indicators smail-properties list-inline nav nav-justified">
                    {carousel_indicator}
                </ul>
            </div>
        )                  
    }
}
