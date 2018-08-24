import React, { Component } from "react";

export default class FoodDetailTabDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    render() {
        let description = this.props.description;
        return (
            <div className="tab-pane fade active show" id="one" role="tabpanel" aria-labelledby="one-tab">
                {/* <h3 className="heading">Description</h3> */}
                <p>{description}</p>
            </div>
        )                                
    }
}
