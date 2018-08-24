import React, { Component } from "react";
import { getMap } from "@/utils/GoogleAPIUtil";

export default class FoodDetailTabMap extends Component {
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
            <div className="tab-pane fade " id="three" role="tabpanel" aria-labelledby="three-tab">
                <div className="section location">
                    {/* <h3 className="heading">Property Location</h3> */}
                    Map
                    <div className="map">
                        {/* {getMap(20, 105)} */}
                    </div>
                </div>
            </div>
        )                  
    }
}
