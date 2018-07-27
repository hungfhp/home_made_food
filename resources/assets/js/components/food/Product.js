import React, { Component } from "react";

export default class Product extends Component {
    render() {
        return (
            <div className="col-lg-8 col-md-12">
                <div className="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block">
                    <div className="row clearfix">
                        <div className="col-xl-4 col-lg-5 col-md-5 col-sm-5">
                            <h4>
                                <span className="heading-icon">
                                    <i className="fa fa-caret-right icon-design"></i>
                                    <i className="fa fa-th-list"></i>
                                </span>
                                <span className="heading">List Food</span>
                            </h4>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-7 col-sm-7">
                            <div className="sorting-options clearfix">
                                <a href="properties-list-rightside.html" className="change-view-btn active-view-btn"><i className="fa fa-th-list"></i></a>
                                <a href="properties-grid-rightside.html" className="change-view-btn"><i className="fa fa-th-large"></i></a>
                            </div>
                            <div className="search-area">
                                <select className="selectpicker search-fields" name="location">
                                    <option>High to Low</option>
                                    <option>Low to High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subtitle">
                    20 Result Found
                </div>

                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
                                        <i className="fa fa-link"></i>
                                    </a>
                                    <a className="overlay-link property-video" title="Test Title">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="/img/property-1.jpg" className="overlay-link">
                                            <i className="fa fa-expand"></i>
                                        </a>
                                        <a href="/img/property-6.jpg" className="hidden"></a>
                                        <a href="/img/property-4.jpg" className="hidden"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Modern Family Home</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-2" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
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
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Relaxing Apartment</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-3" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
                                        <i className="fa fa-link"></i>
                                    </a>
                                    <a className="overlay-link property-video" title="Test Title">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="/img/property-3.jpg" className="overlay-link">
                                            <i className="fa fa-expand"></i>
                                        </a>
                                        <a href="/img/property-6.jpg" className="hidden"></a>
                                        <a href="/img/property-4.jpg" className="hidden"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Beautiful Single Home</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-4" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
                                        <i className="fa fa-link"></i>
                                    </a>
                                    <a className="overlay-link property-video" title="Test Title">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="/img/property-4.jpg" className="overlay-link">
                                            <i className="fa fa-expand"></i>
                                        </a>
                                        <a href="/img/property-6.jpg" className="hidden"></a>
                                        <a href="/img/property-5.jpg" className="hidden"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Real Luxury Villa</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-5" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
                                        <i className="fa fa-link"></i>
                                    </a>
                                    <a className="overlay-link property-video" title="Test Title">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="/img/property-5.jpg" className="overlay-link">
                                            <i className="fa fa-expand"></i>
                                        </a>
                                        <a href="/img/property-6.jpg" className="hidden"></a>
                                        <a href="/img/property-4.jpg" className="hidden"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Masons Villas</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-6" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
                                        <i className="fa fa-link"></i>
                                    </a>
                                    <a className="overlay-link property-video" title="Test Title">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="/img/property-6.jpg" className="overlay-link">
                                            <i className="fa fa-expand"></i>
                                        </a>
                                        <a href="/img/property-9.jpg" className="hidden"></a>
                                        <a href="/img/property-4.jpg" className="hidden"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Sweet Family Home</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-7" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
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
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Masons Villas</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-8" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
                                        <i className="fa fa-link"></i>
                                    </a>
                                    <a className="overlay-link property-video" title="Test Title">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="/img/property-8.jpg" className="overlay-link">
                                            <i className="fa fa-expand"></i>
                                        </a>
                                        <a href="/img/property-6.jpg" className="hidden"></a>
                                        <a href="/img/property-5.jpg" className="hidden"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Big Head House</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-9" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
                                        <i className="fa fa-link"></i>
                                    </a>
                                    <a className="overlay-link property-video" title="Test Title">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="/img/property-9.jpg" className="overlay-link">
                                            <i className="fa fa-expand"></i>
                                        </a>
                                        <a href="/img/property-6.jpg" className="hidden"></a>
                                        <a href="/img/property-5.jpg" className="hidden"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">

                                <h1 className="title">
                                    <a href="/foods/id">Park avenue</a>
                                </h1>

                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>

                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property-box-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-pad">
                            <div className="property-thumbnail">
                                <a href="/foods/id" className="property-img">
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-3" className="img-fluid"/>
                                </a>
                                <div className="property-overlay">
                                    <a href="/foods/id" className="overlay-link">
                                        <i className="fa fa-link"></i>
                                    </a>
                                    <a className="overlay-link property-video" title="Test Title">
                                        <i className="fa fa-video-camera"></i>
                                    </a>
                                    <div className="property-magnify-gallery">
                                        <a href="/img/property-3.jpg" className="overlay-link">
                                            <i className="fa fa-expand"></i>
                                        </a>
                                        <a href="/img/property-6.jpg" className="hidden"></a>
                                        <a href="/img/property-5.jpg" className="hidden"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 align-self-center col-pad">
                            <div className="detail">
                                <h1 className="title">
                                    <a href="/foods/id">Luxury Villa</a>
                                </h1>
                                <div className="location">
                                    <a href="/foods/id">
                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt…</p>
                                <ul className="facilities-list clearfix">
                                    <li>
                                        <i className="flaticon-bed"></i> 3 Beds
                                    </li>
                                    <li>
                                        <i className="flaticon-bath"></i> 2 Baths
                                    </li>
                                    <li>
                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
                                    </li>
                                    <li>
                                        <i className="flaticon-car-repair"></i> 1 Garage
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pagination-box hidden-mb-45">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#"><span aria-hidden="true">«</span></a></li>
                            <li className="page-item"><a className="page-link active" href="/foods">1</a></li>
                            <li className="page-item"><a className="page-link" href="/foods">2</a></li>
                            <li className="page-item"><a className="page-link" href="/foods">3</a></li>
                            <li className="page-item"><a className="page-link" href="/foods"><span aria-hidden="true">»</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
