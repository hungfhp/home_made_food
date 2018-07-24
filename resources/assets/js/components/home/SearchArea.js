import React, { Component } from "react";

export default class SearchArea extends Component {
    render() {
        return (
            <div className="search-area" id="search-area-1">
                <div className="container">
                    <div className="search-area-inner">
                        <div className="search-contents ">
                            <form
                                action="https://storage.googleapis.com/themevessel-xero/index.html"
                                method="GET"
                            >
                                <div className="row">
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select
                                                className="selectpicker search-fields"
                                                name="brand"
                                            >
                                                <option>Area From</option>
                                                <option>1500</option>
                                                <option>1200</option>
                                                <option>900</option>
                                                <option>600</option>
                                                <option>300</option>
                                                <option>100</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select
                                                className="selectpicker search-fields"
                                                name="property-status"
                                            >
                                                <option>Property Status</option>
                                                <option>For Sale</option>
                                                <option>For Rent</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select
                                                className="selectpicker search-fields"
                                                name="location"
                                            >
                                                <option>Location</option>
                                                <option>United Kingdom</option>
                                                <option>American Samoa</option>
                                                <option>Belgium</option>
                                                <option>Canada</option>
                                                <option>Delaware</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select
                                                className="selectpicker search-fields"
                                                name="category"
                                            >
                                                <option>Property Types</option>
                                                <option>Residential</option>
                                                <option>Commercial</option>
                                                <option>Land</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select
                                                className="selectpicker search-fields"
                                                name="body"
                                            >
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
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <select
                                                className="selectpicker search-fields"
                                                name="transmission"
                                            >
                                                <option>Bathrooms</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <div className="range-slider">
                                                <div
                                                    data-min="0"
                                                    data-max="150000"
                                                    data-unit="USD"
                                                    data-min-name="min_price"
                                                    data-max-name="max_price"
                                                    className="range-slider-ui ui-slider"
                                                    aria-disabled="false"
                                                />
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-3">
                                        <div className="form-group">
                                            <button
                                                className="search-button btn-md btn-color"
                                                type="submit"
                                            >
                                                Search
                                            </button>
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
