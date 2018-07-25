import React, { Component } from "react";

export default class Form extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="notification-box mb-60">
                    <h3>Don't Have an Account?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae accumsan.</p>
                </div>

                <div className="search-area contact-2">
                    <div className="search-area-inner">
                        <div className="search-contents ">
                            <form method="GET">
                                <h3 className="heading">Basic Information</h3>
                                <div className="row mb-50">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Property Title</label>
                                            <input type="text" name="property-title" className="form-control" placeholder="Property Title"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>For Sale</option>
                                                <option>For Rent</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Type</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>Apartment</option>
                                                <option>House</option>
                                                <option>Commercial</option>
                                                <option>Garage</option>
                                                <option>Lot</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="text" name="price" className="form-control" placeholder="USD"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <label>Area/Location</label>
                                            <input type="text" name="price" className="form-control" placeholder="SqFt"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <label>Bedrooms</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-group">
                                            <label>Bathroom</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="heading">Property Gallery</h3>
                                <div className="row mb-50">
                                    <div className="col-lg-12">
                                        <div id="myDropZone" className="dropzone-design mb-50">
                                            <div className="dz-default dz-message"><span>Drop files here to upload</span></div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="heading">Location</h3>
                                <div className="row mb-50">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" name="address" className="form-control" placeholder="Address"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>City</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>Choose City</option>
                                                <option>New York</option>
                                                <option>Chicago</option>
                                                <option>Queens</option>
                                                <option>Manhattan</option>
                                                <option>San Antonio</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>State</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>Choose State</option>
                                                <option>Alabama</option>
                                                <option>California</option>
                                                <option>Connecticut</option>
                                                <option>Florida</option>
                                                <option>Georgia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Postal Code</label>
                                            <input type="text" name="postal-code" className="form-control" placeholder="Postal Code"/>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="heading">Detailed Information</h3>
                                <div className="row mb-50">
                                    <div className="col-lg-12">
                                        <div className="form-group message">
                                            <label>Detailed Information</label>
                                            <textarea className="form-control" name="message" placeholder="Detailed Information"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label>Building Age (optional)</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>0-5 Years</option>
                                                <option>0-10 Years</option>
                                                <option>0-15 Years</option>
                                                <option>0-20 Years</option>
                                                <option>0-25 Years</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label>Bedrooms (optional)</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label>Bathrooms (optional)</label>
                                            <select className="selectpicker search-fields" name="Status">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="heading">Features (optional)</h3>
                                <div className="row mb-50">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="air-condition"/>
                                                    <label className="form-check-label" htmlFor="air-condition">
                                                        Air Condition
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="free-parking"/>
                                                    <label className="form-check-label" htmlFor="free-parking">
                                                        Free Parking
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="swimming-pool"/>
                                                    <label className="form-check-label" htmlFor="swimming-pool">
                                                        Swimming Pool
                                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="laundry-room"/>
                                                    <label className="form-check-label" htmlFor="laundry-room">
                                                        Laundry Room
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="window-covering"/>
                                                    <label className="form-check-label" htmlFor="window-covering">
                                                        Window Covering
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="places"/>
                                                    <label className="form-check-label" htmlFor="places">
                                                        Places to seat
                                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="alarm"/>
                                                    <label className="form-check-label" htmlFor="alarm">
                                                        Alarm
                                                    </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="central-heating"/>
                                                    <label className="form-check-label" htmlFor="central-heating">
                                                        Central Heating
                                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="heading">Contact Details</h3>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" name="name" className="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" name="name" className="form-control" placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <a href="#" className="btn btn-md btn-color">Preview</a>
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
