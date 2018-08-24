import React, { Component } from "react";

export default class FoodDetailTabInfo extends Component {
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
            <div className="tab-pane fade " id="two" role="tabpanel" aria-labelledby="two-tab">
                <div class="property-details mb-60">
                    <h3 class="heading">Property Details</h3>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
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
                        <div class="col-md-4 col-sm-6">
                            <ul>
                                <li>
                                    <strong>Property Lot Size:</strong>800 ft2
                                </li>
                                <li>
                                    <strong>Land area</strong>230 ft2
                                </li>
                                <li>
                                    <strong>Year Built</strong>2018
                                </li>
                                <li>
                                    <strong>Available From</strong>2018
                                </li>
                                <li>
                                    <strong>Garages:</strong>2
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-6">
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
        )                  
    }
}
