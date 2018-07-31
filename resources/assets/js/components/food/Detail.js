import React, { Component } from "react";

export default class Detail extends Component {
    render() {
        return(
            <div className="col-lg-8 col-md-12 col-xs-12 slider">
                <div id="propertiesDetailsSlider" className="carousel properties-details-sliders slide mb-60">
                    <div className="heading-properties">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pull-left">
                                    <h3>Beautiful Single Home</h3>
                                    <p><i className="fa fa-map-marker"></i> 20/F Green Road, Dhanmondi, Dhaka</p>
                                </div>
                                <div className="p-r">
                                    <h3>$420,00</h3>
                                    <p><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-inner">
                        <div className="active item carousel-item" data-slide-number="0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                        </div>
                        <div className="item carousel-item" data-slide-number="1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                        </div>
                        <div className="item carousel-item" data-slide-number="2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                        </div>
                        <div className="item carousel-item" data-slide-number="4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                        </div>
                        <div className="item carousel-item" data-slide-number="5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                        </div>

                        <a className="carousel-control left" href="#propertiesDetailsSlider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                        <a className="carousel-control right" href="#propertiesDetailsSlider" data-slide="next"><i className="fa fa-angle-right"></i></a>

                    </div>

                    <ul className="carousel-indicators smail-properties list-inline nav nav-justified">
                        <li className="list-inline-item active">
                            <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#propertiesDetailsSlider">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a id="carousel-selector-1" data-slide-to="1" data-target="#propertiesDetailsSlider">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a id="carousel-selector-2" data-slide-to="2" data-target="#propertiesDetailsSlider">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a id="carousel-selector-3" data-slide-to="3" data-target="#propertiesDetailsSlider">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a id="carousel-selector-4" data-slide-to="4" data-target="#propertiesDetailsSlider">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="widget-2 search-area d-lg-none d-xl-none">
                    <h5 className="sidebar-title">Advanced Search</h5>
                    <div className="search-area-inner">
                        <div className="search-contents ">
                            <form method="GET">
                                <div className="form-group">
                                    <label>Area From</label>
                                    <select className="selectpicker search-fields" name="area">
                                        <option>Area From</option>
                                        <option>1500</option>
                                        <option>1200</option>
                                        <option>900</option>
                                        <option>600</option>
                                        <option>300</option>
                                        <option>100</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Property Status</label>
                                    <select className="selectpicker search-fields" name="Status">
                                        <option>Property Status</option>
                                        <option>For Sale</option>
                                        <option>For Rent</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <select className="selectpicker search-fields" name="Location">
                                        <option>Location</option>
                                        <option>United Kingdom</option>
                                        <option>American Samoa</option>
                                        <option>Belgium</option>
                                        <option>Canada</option>
                                        <option>Delaware</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Property Types</label>
                                    <select className="selectpicker search-fields" name="types">
                                        <option>Property Types</option>
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Land</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Bedrooms</label>
                                    <select className="selectpicker search-fields" name="bedrooms">
                                        <option>Bedrooms</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>2 Bathrooms</label>
                                    <select className="selectpicker search-fields" name="bedrooms">
                                        <option>2 Bathrooms</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label>Price</label>
                                    <div className="range-slider">
                                        <div data-min="0" data-max="150000" data-unit="USD" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider" aria-disabled="false"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <br/>
                                <button className="search-button btn-md btn-color">Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="tabbing tabbing-box mb-60">
                    <ul className="nav nav-tabs" id="carTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active show" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="false">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">Floor Plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="true">Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="4-tab" data-toggle="tab" href="#4" role="tab" aria-controls="4" aria-selected="true">Video</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="5-tab" data-toggle="tab" href="#5" role="tab" aria-controls="5" aria-selected="true">Location</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="6-tab" data-toggle="tab" href="#6" role="tab" aria-controls="6" aria-selected="true">Related Properties</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="carTabContent">
                        <div className="tab-pane fade active show" id="one" role="tabpanel" aria-labelledby="one-tab">
                            <h3 className="heading">Property Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel,dapibus tempus nulla. Donec vel nulla dui. Pellentesque sed ante sed ligula hendrerit condimentum.
                                Suspendisse rhoncus fringilla ipsum quis porta. Morbi tincidunt viverra pharetra.</p>
                            <p>Vestibulum vel mauris et odio lobortis laoreet eget eu magna. Proin mauris erat, luctus at nulla ut, lobortis mattis magna. Morbi a arcu lacus. Maecenas tristique velit vitae nisi consectetur, in mattis diam sodales. Mauris sagittis sem mattis justo bibendum, a eleifend dolor facilisis. Mauris
                                nec pharetra tortor, ac aliquam felis. Nunc pretium erat sed quam consectetur fringilla.</p>
                            <p>Aliquam ultricies nunc porta metus interdum mollis. Donec porttitor libero augue, vehicula tincidunt lectus placerat a. Sed tincidunt dolor non sem dictum dignissim. Nulla vulputate orci felis, ac ornare purus ultricies a. Fusce euismod magna orci, sit amet aliquam turpis dignissim ac. In at
                                tortor at ligula pharetra sollicitudin. Sed tincidunt, purus eget laoreet elementum, felis est pharetra ante, tincidunt feugiat libero enim sed risus.</p>
                            <p>Sed at leo sit amet mi bibendum aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent cursus varius odio, non faucibus dui. Nunc vehicula lectus sed velit suscipit aliquam vitae eu ipsum. adipiscing elit.</p>
                        </div>
                        <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
                            <div className="floor-plans mb-60">
                                <h3 className="heading">Floor Plans</h3>
                                <table>
                                    <tbody><tr>
                                        <td><strong>Size</strong></td>
                                        <td><strong>Rooms</strong></td>
                                        <td><strong>2 Bathrooms</strong></td>
                                    </tr>
                                    <tr>
                                        <td>1600</td>
                                        <td>3</td>
                                        <td>2</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="three" role="tabpanel" aria-labelledby="three-tab">
                            <div className="property-details">
                                <h3 className="heading">Property Details</h3>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <ul>
                                            <li>
                                                <strong>Property Id:</strong>215
                                            </li>
                                            <li>
                                                <strong>Price:</strong>$1240/ Month
                                            </li>
                                            <li>
                                                <strong>Property Type:</strong>House
                                            </li>
                                            <li>
                                                <strong>Bathrooms:</strong>3
                                            </li>
                                            <li>
                                                <strong>Bathrooms:</strong>2
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <ul>
                                            <li>
                                                <strong>Property Lot Size:</strong>800 ft2
                                            </li>
                                            <li>
                                                <strong>Land area:</strong>230 ft2
                                            </li>
                                            <li>
                                                <strong>Year Built:</strong>2018
                                            </li>
                                            <li>
                                                <strong>Available From:</strong>2018
                                            </li>
                                            <li>
                                                <strong>Garages:</strong>2
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <ul>
                                            <li>
                                                <strong>Sold:</strong>Yes
                                            </li>
                                            <li>
                                                <strong>City:</strong>Usa
                                            </li>
                                            <li>
                                                <strong>Parking:</strong>Yes
                                            </li>
                                            <li>
                                                <strong>Property Owner:</strong>Sohel Rana
                                            </li>
                                            <li>
                                                <strong>Zip Code: </strong>2451
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="4" role="tabpanel" aria-labelledby="4-tab">
                            <div className="property-video">
                                <h3 className="heading">Property Video</h3>
                                <iframe src="https://www.youtube.com/embed/m5_AKjDdqaU"></iframe>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="5" role="tabpanel" aria-labelledby="5-tab">
                            <div className="section location">
                                <h3 className="heading">Property Location</h3>
                                <div className="map">
                                    <div id="contactMap" className="contact-map"></div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="6" role="tabpanel" aria-labelledby="6-tab">
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
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
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
                                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                                    </a>
                                                </div>
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> 3 Bedrooms
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-bath"></i> 2 Bathrooms
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
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
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
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
                                                        <i className="fa fa-map-marker"></i>123 Kathal St. Tampa City,
                                                    </a>
                                                </div>
                                                <ul className="facilities-list clearfix">
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> 3 Bedrooms
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-bath"></i> 2 Bathrooms
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-square-layouting-with-black-square-in-east-area"></i> Sq Ft:3400
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
                    </div>
                </div>

                <div className="amenities-box mb-60">
                    <h3 className="heading">Condition</h3>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <ul>
                                <li><span><i className="flaticon-bed"></i> 3 Beds</span></li>
                                <li><span><i className="flaticon-bath"></i> 2 Bathroom</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <ul>
                                <li><span><i className="flaticon-car-repair"></i> 1 Garage</span></li>
                                <li><span><i className="flaticon-balcony-and-door"></i>1 Balcony</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <ul>
                                <li><span><i className="flaticon-square-layouting-with-black-square-in-east-area"></i> 4800 sq ft</span></li>
                                <li><span><i className="flaticon-monitor"></i> TV</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="features-opions mb-60">
                    <h3 className="heading">Features</h3>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <ul>
                                <li>
                                    <i className="flaticon-air-conditioner"></i>
                                    Air conditioning
                                </li>
                                <li>
                                    <i className="flaticon-wifi-connection-signal-symbol"></i>
                                    Wifi
                                </li>
                                <li>
                                    <i className="flaticon-swimmer"></i>
                                    Swimming Pool
                                </li>
                                <li>
                                    <i className="flaticon-bed"></i>
                                    Double Bed
                                </li>
                                <li>
                                    <i className="flaticon-balcony-and-door"></i>
                                    Balcony
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <ul>
                                <li>
                                    <i className="flaticon-old-typical-phone"></i>
                                    Telephone
                                </li>
                                <li>
                                    <i className="flaticon-car-repair"></i>
                                    Garage
                                </li>
                                <li>
                                    <i className="flaticon-parking"></i>
                                    Parking
                                </li>
                                <li>
                                    <i className="flaticon-monitor"></i>
                                    TV
                                </li>
                                <li>
                                    <i className="flaticon-theatre-masks"></i>
                                    Home Theater
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <ul>
                                <li>
                                    <i className="fa fa-clock-o"></i>
                                    Alarm
                                </li>
                                <li>
                                    <i className="flaticon-padlock"></i>
                                    Security
                                </li>
                                <li>
                                    <i className="flaticon-weightlifting"></i>
                                    Gym
                                </li>
                                <li>
                                    <i className="flaticon-idea"></i>
                                    Electric Range
                                </li>
                                <li>
                                    <i className="flaticon-green-park-city-space"></i>
                                    Private space
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="comments-section">
                    <h3 className="heading">Comments Section</h3>
                    <ul className="comments">
                        <li>
                            <div className="comment">
                                <div className="comment-author">
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="comment-content">
                                    <div className="comment-meta">
                                        <div className="comment-meta-author">
                                            Jane Doe
                                        </div>
                                        <div className="comment-meta-reply">
                                            <a href="#">Reply</a>
                                        </div>
                                        <div className="comment-meta-date">
                                            <span>8:42 PM 10/3/2018</span>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="comment-body">
                                        <div className="comment-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui. Pellentesque sed ante sed.</p>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <div className="comment">
                                        <div className="comment-author">
                                            <a href="#">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                                            </a>
                                        </div>

                                        <div className="comment-content">
                                            <div className="comment-meta">
                                                <div className="comment-meta-author">
                                                    Jane Doe
                                                </div>

                                                <div className="comment-meta-reply">
                                                    <a href="#">Reply</a>
                                                </div>

                                                <div className="comment-meta-date">
                                                    <span>8:42 PM 10/3/2018</span>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="comment-body">
                                                <div className="comment-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="comment">
                                <div className="comment-author">
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="property-1" className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="comment-content">
                                    <div className="comment-meta">
                                        <div className="comment-meta-author">
                                            Jane Doe
                                        </div>
                                        <div className="comment-meta-reply">
                                            <a href="#">Reply</a>
                                        </div>
                                        <div className="comment-meta-date">
                                            <span>8:42 PM 10/3/2018</span>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="comment-body">
                                        <div className="comment-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui. Pellentesque.</p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>

                <div className="contact-3 mb-60">
                    <h3 className="heading">Leave a Comment</h3>
                    <div className="container">
                        <div className="row">
                            <form action="#" method="GET" encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group name">
                                            <input type="text" name="name" className="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group email">
                                            <input type="email" name="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group subject">
                                            <input type="text" name="subject" className="form-control" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group number">
                                            <input type="text" name="phone" className="form-control" placeholder="Number"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group message">
                                            <textarea className="form-control" name="message" placeholder="Write message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <div className="send-btn">
                                            <button type="submit" className="btn btn-color btn-md btn-message">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
