import React, { Component } from "react";

export default class FoodDetailTabRelated extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    
    render() {
        return (
            <div className="tab-pane fade " id="four" role="tabpanel" aria-labelledby="four-tab">
                <div className="related-properties">
                    <h3 className="heading">Related Properties</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="property-box">
                                <div className="property-thumbnail">
                                    <a href="properties-details.html" className="property-img">
                                        <div className="tag button alt featured">Featured</div>
                                        <div className="price-ratings-box">
                                            <p className="price">
                                                $178,000
                                            </p>
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                        </div>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr"
                                            alt="property-1" className="img-fluid"/>
                                    </a>
                                    <div className="property-overlay">
                                        <a href="properties-details.html" className="overlay-link">
                                            <i className="fa fa-link"></i>
                                        </a>
                                        <a className="overlay-link property-video" title="Test Title">
                                            <i className="fa fa-video-camera"></i>
                                        </a>
                                        <div className="property-magnify-gallery">
                                            <a href="/img/property-2.jpg" className="overlay-link">
                                                <i className="fa fa-expand"></i>
                                            </a>
                                            <a href="/img/property-6.jpg" className="hidden"></a>
                                            <a href="/img/property-4.jpg" className="hidden"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail">
                                    <h1 className="title">
                                        <a href="properties-details.html">Modern Family Home</a>
                                    </h1>
                                    <div className="location">
                                        <a href="properties-details.html">
                                            <i className="fa fa-map-marker"></i>123 Kathal St. Tampa
                                            City,
                                        </a>
                                    </div>
                                    <ul className="facilities-list clearfix">
                                        <li>
                                            <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> 3
                                            Bedrooms
                                        </li>
                                        <li>
                                            <i className="flaticon-bath"></i> 2 Bathrooms
                                        </li>
                                        <li>
                                            <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq
                                            Ft:3400
                                        </li>
                                        <li>
                                            <i className="flaticon-car-repair"></i> 1 Garage
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer">
                                    <a href="#">
                                        <i className="fa fa-user"></i> Jhon Doe
                                    </a>
                                    <span>
                                        <i className="fa fa-calendar-o"></i> 2 years ago
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="property-box">
                                <div className="property-thumbnail">
                                    <a href="properties-details.html" className="property-img">
                                        <div className="tag button alt featured">Featured</div>
                                        <div className="price-ratings-box">
                                            <p className="price">
                                                $178,000
                                            </p>
                                            <div className="ratings">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                        </div>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr"
                                            alt="property-1" className="img-fluid"/>
                                    </a>
                                    <div className="property-overlay">
                                        <a href="properties-details.html" className="overlay-link">
                                            <i className="fa fa-link"></i>
                                        </a>
                                        <a className="overlay-link property-video" title="Test Title">
                                            <i className="fa fa-video-camera"></i>
                                        </a>
                                        <div className="property-magnify-gallery">
                                            <a href="/img/property-7.jpg" className="overlay-link">
                                                <i className="fa fa-expand"></i>
                                            </a>
                                            <a href="/img/property-6.jpg" className="hidden"></a>
                                            <a href="/img/property-4.jpg" className="hidden"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail">
                                    <h1 className="title">
                                        <a href="properties-details.html">Relaxing Apartment</a>
                                    </h1>
                                    <div className="location">
                                        <a href="properties-details.html">
                                            <i className="fa fa-map-marker"></i>123 Kathal St. Tampa
                                            City,
                                        </a>
                                    </div>
                                    <ul className="facilities-list clearfix">
                                        <li>
                                            <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> 3
                                            Bedrooms
                                        </li>
                                        <li>
                                            <i className="flaticon-bath"></i> 2 Bathrooms
                                        </li>
                                        <li>
                                            <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq
                                            Ft:3400
                                        </li>
                                        <li>
                                            <i className="flaticon-car-repair"></i> 1 Garage
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer">
                                    <a href="#">
                                        <i className="fa fa-user"></i> Jhon Doe
                                    </a>
                                    <span>
                                    <i className="fa fa-calendar-o"></i> 2 years ago
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )                  
    }
}
