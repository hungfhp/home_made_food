import React, { Component } from "react";

export default class Tool extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-12">
                <div className="sidebar mbl">
                    <div className="widget search-area">
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
                                        <label>Bathrooms</label>
                                        <select className="selectpicker search-fields" name="bedrooms">
                                            <option>Bathrooms</option>
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
                                            <h5 className="sidebar-title">Features</h5>
                                            <div className="form-group">
                                                <div className="form-check checkbox-theme">
                                                    <input className="form-check-input" type="checkbox" value="" id="audi"/>
                                                    <label className="form-check-label" htmlFor="audi">
                                                        Air Condition
                                                    </label>
                                                </div>
                                                <div className="form-check checkbox-theme">
                                                    <input className="form-check-input" type="checkbox" value="" id="honda"/>
                                                    <label className="form-check-label" htmlFor="honda">
                                                        Free Parking
                                                    </label>

                                                </div>
                                                <div className="form-check checkbox-theme">
                                                    <input className="form-check-input" type="checkbox" value="" id="volkswagen"/>
                                                    <label className="form-check-label" htmlFor="volkswagen">
                                                        Swimming Pool
                                                    </label>

                                                </div>
                                                <div className="form-check checkbox-theme">
                                                    <input className="form-check-input" type="checkbox" value="" id="lamborghini"/>
                                                    <label className="form-check-label" htmlFor="lamborghini">
                                                        Laundry Room
                                                    </label>

                                                </div>
                                                <div className="form-check checkbox-theme">
                                                    <input className="form-check-input" type="checkbox" value="" id="bmw"/>
                                                    <label className="form-check-label" htmlFor="bmw">
                                                        Central Heating
                                                    </label>

                                                </div>
                                                <div className="form-check checkbox-theme">
                                                    <input className="form-check-input" type="checkbox" value="" id="toyota"/>
                                                    <label className="form-check-label" htmlFor="toyota">
                                                        Window Covering
                                                    </label>

                                                </div>
                                            </div>
                                            <button className="search-button btn-md btn-color">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="widget categories">
                        <h5 className="sidebar-title">Categories</h5>
                        <ul>
                            <li><a href="#">Apartments<span>(12)</span></a></li>
                            <li><a href="#">Houses<span>(8)</span></a></li>
                            <li><a href="#">Family Houses<span>(23)</span></a></li>
                            <li><a href="#">Offices<span>(5)</span></a></li>
                            <li><a href="#">Villas<span>(63)</span></a></li>
                            <li><a href="#">Other<span>(7)</span></a></li>
                        </ul>
                    </div>

                    <div className="widget recent-posts">
                        <h5 className="sidebar-title">Recent Properties</h5>
                        <div className="media mb-4">
                            <a className="pr-4" href="properties-details.html">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="sub-property"/>
                            </a>
                            <div className="media-body align-self-center">
                                <h5>
                                    <a href="properties-details.html">Beautiful Single Home</a>
                                </h5>
                                <p>February 27, 2018</p>
                                <p> <strong>$245,000</strong></p>
                            </div>
                        </div>
                        <div className="media mb-4">
                            <a className="pr-4" href="properties-details.html">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="sub-property-2"/>
                            </a>
                            <div className="media-body align-self-center">
                                <h5>
                                    <a href="properties-details.html">Sweet Family Home</a>
                                </h5>
                                <p>February 27, 2018</p>
                                <p> <strong>$245,000</strong></p>
                            </div>
                        </div>
                        <div className="media">
                            <a className="pr-4" href="properties-details.html">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" alt="sub-property-3"/>
                            </a>
                            <div className="media-body align-self-center">
                                <h5>
                                    <a href="properties-details.html">Real Luxury Villa</a>
                                </h5>
                                <p>February 27, 2018</p>
                                <p> <strong>$245,000</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="recent-comments widget">
                        <h5 className="sidebar-title">Recent comments</h5>
                        <div className="media mb-4">
                            <a className="pr-4" href="#">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr" className="rounded-circle" alt="avatar"/>
                            </a>
                            <div className="media-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamrisus tortor,</p>
                                <p>By <span>John Doe</span></p>
                            </div>
                        </div>
                        <div className="media">
                            <a className="pr-4" href="#">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqz5zchFqgkS5CDzmtyHMz9BBi8EyF68S_NsijMk7lP4E97Lr  " className="rounded-circle" alt="avatar-2"/>
                            </a>
                            <div className="media-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamrisus tortor,</p>
                                <p>By <span>Karen Paran</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
